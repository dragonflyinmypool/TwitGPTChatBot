const axios = require('axios');
const cheerio = require('cheerio');

axios
  .get(
    'https://app.zenscrape.com/api/v1/get?&url=https://www.history.com/this-day-in-history',
    {
      headers: {
        apikey: 'ba0ac990-8eee-11ed-9356-ad3b28196789',
      },
    }
  )
  .then((response) => {
    console.log(response.data);
  });