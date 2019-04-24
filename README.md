# Webbidevaus.fi

A Gatsby-powered website for [our little web dev podcast](https://webbidevaus.fi).

## Development

### Local development

`npm install`

As seen on the website, our site integrates with both YouTube (Vlog entries) and Simplecast (episode listing). For these integrations to work properly, you need to set few environment varibles. These can be set by creating a `.env` file to project root:

```
YOUTUBE_CHANNEL_ID=UCNYn3Or32Kjd3uzYw_qVVLQ
YOUTUBE_API_KEY=<api key generated in Google's Developer Console>
```

To generate an API key for Youtube, visit [Google Developer Console](https://console.developers.google.com).
After logging in, browse to Library -> Search for Youtube Data API V3 -> Enable -> Credentials and generate a new API key. Add this to your `.env` file. Simplecast integration should work automatically, providing you with some fake data to start with.

`npm start`

### Building

`npm run build`

## License

Webbidevaus.fi is licensed [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/). The development of this website is partly fueled by Futurice's [Spice Program](https://spiceprogram.org/).
