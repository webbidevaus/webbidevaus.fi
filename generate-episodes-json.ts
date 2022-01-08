import { writeFileSync } from "fs";

import { getEpisode, getEpisodes } from "./util/episodes";
import TurndownService from "turndown";
import { MaybeAsync } from "purify-ts/MaybeAsync";

function isHTML(text: string) {
  return text.startsWith("<p>") || text.startsWith("<h");
}

async function main() {
  const episodes = await getEpisodes(process.env.SIMPLECAST_PODCAST_ID);
  writeFileSync("episodes.json.tmp", JSON.stringify(episodes));
  console.log(episodes.collection.length);

  const episodeRequests = episodes.collection.map(async (episode) =>
    getEpisode("episodes.json.tmp", episode.number.toString())
  );

  const fullEpisodeDetails = await MaybeAsync.catMaybes(
    episodeRequests.map((request) => MaybeAsync.fromPromise(() => request))
  );

  const episodesWithMarkdownDescription = fullEpisodeDetails.map((episode) => {
    // Episodes before 55 have description in markdown, others are in HTML
    if (!isHTML(episode.long_description)) {
      return episode;
    }
    return {
      ...episode,
      long_description: new TurndownService({ headingStyle: "atx" }).turndown(
        episode.long_description
      ),
    };
  });

  console.log("Writing episodes.json", episodesWithMarkdownDescription);

  writeFileSync(
    "public/episodes.json",
    JSON.stringify(episodesWithMarkdownDescription)
  );
}

main();
