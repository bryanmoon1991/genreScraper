import cron from 'node-cron';
import { getGenres } from './scraper';

cron.schedule('0 0 0 0 SUN', () => {
  console.log('Running cron!');
  getGenres();
});
