# genreScraper

This simple scraper pulls all the genres from http://everynoise.com/everynoise1d.cgi?scope=all and the URL of the Spotify Playlist they are associated with.  After pulling the data, it writes it locally to a db in json format and looks like this:
```
{
    "date": 1613256344278,
    
    "genres": {
    "pop": "https://embed.spotify.com/?uri=spotify:playlist:6gS3HhOiI17QNojjPuPzqc",
    "dance pop": "https://embed.spotify.com/?uri=spotify:playlist:2ZIRxkFuqNPMnlY7vL54uK",
    "rap": "https://embed.spotify.com/?uri=spotify:playlist:6s5MoZzR70Qef7x4bVxDO1",
    "pop dance": "https://embed.spotify.com/?uri=spotify:playlist:2HhaArHsOiofpUheCRPkLa",
    "rock": "https://embed.spotify.com/?uri=spotify:playlist:7dowgSWOmvdpwNkGFMUs6e",
    "post-teen pop": "https://embed.spotify.com/?uri=spotify:playlist:10FCW9lj0NdeoYI5VVvVtY",
    ...
    }
}
```

The scraping function runs every week on 12:00 AM on Sunday's via node-cron.


# How To Run 
Install dependencies using ```npm i``` and run using ```npm run dev```
