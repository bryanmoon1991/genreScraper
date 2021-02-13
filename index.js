import express from 'express';
import { getGenres } from './lib/scraper';

const app = express();

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!');
  let genres = await getGenres(
    'http://everynoise.com/everynoise1d.cgi?scope=all'
  );
  res.json(genres);
});

app.listen(3006, () => {
  console.log(`running on port 3006`);
});
