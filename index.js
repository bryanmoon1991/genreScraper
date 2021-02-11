import { getHTML, getGenres } from './lib/scraper';

async function go() {
  //   getGenres(await getHTML('http://everynoise.com/'));
  getGenres(await getHTML('http://everynoise.com/everynoise1d.cgi?scope=all'));
}

go();
