import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function getGenres(html) {
  // this is the raw data for homepage
  //   const $ = cheerio.load(html);
  //   const genres = $('.scanme');
  //   console.log(genres.text().split('» '));

  let gm = new Map();
  const $ = cheerio.load(html);

  let names = [];
  genres
    .find('[title="Re-sort the list starting from here."]')
    .each((i, n) => names.push($(n).text()));

  let links = [];

  genres.each((i, e) =>
    links.push($(e).find('[title="See this playlist"]').attr('href'))
  );

  names.forEach((e, i) => (gm[e] = links[i]));

  console.log(gm);

  //   gm[
  //     genres.find('[title="Re-sort the list starting from here."]').text()
  //   ] = genres.find('[title="See this playlist"]').attr('href');
  //   genres.each(
  //     (i, obj) => ({
  //      gm[obj
  //         .find('[title="Re-sort the list starting from here."]')
  //         .text()]= obj.find('[title="See this playlist"]').attr('href'),
  //     })
}

export { getHTML, getGenres };
