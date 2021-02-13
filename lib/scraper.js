import axios from 'axios';
import cheerio from 'cheerio';

export const getGenres = async (url) => {
  const { data: html } = await axios.get(url);
  // create object to store genres and links
  let gm = new Map();
  const $ = cheerio.load(html);
  // grab all tr elements using cheerio
  let genres = $('tr');

  // put all genre names in array
  let names = [];
  genres
    .find('[title="Re-sort the list starting from here."]')
    .each((i, n) => names.push($(n).text()));

  // put all embed playlists into array
  let links = [];
  genres.each((i, e) =>
    links.push($(e).find('[title="See this playlist"]').attr('href'))
  );

  // zip them together using index
  // for some reason some keys dont have quotes around them
  names.forEach((e, i) => (gm[e] = links[i]));

  return gm;
};
