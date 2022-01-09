import fetch from "cross-fetch";
import { Right } from "purify-ts";
import { EitherAsync } from "purify-ts/EitherAsync";

export const fetchToJson = (url: string) => {
  return EitherAsync.fromPromise(() => fetch(url).then(Right)).map((e) =>
    e.json()
  );
};
