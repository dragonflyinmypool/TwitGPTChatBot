exports.prompt = (article) => {
  return {
    text: prompt1(article),
    temp: 0.8,
  };
};

function prompt1(article) {
  const thePrompt = `You are a history twitter bot that posts very interesting tweets about history.
Follow these rules when generating the tweets:
1. Use the article provided to genearate the content. 
  - Ingnore any html or javascript.
  - Ignore links or 'read more' section in the article text, don't include this info in the tweet.    
2. Create a thread of three tweets
  - Do not include hash tags, no #hashtags (very important).
  - The tweets should be interesting, informative and relevant to the average reader. 
  - Don't use emojis or any other special characters.
  - The information should be factual and based on the article provided, do not make it up.
  - The first tweet should be about event, the second tweet should add interesting unique or odd details.
  - The third tweet shold be about the impact of the event or why it is relevant to the reader.    
3. Also I would like to add a photo to the first tweet so please come up with relevant search query that I can use to query bing images api. 
  - This could be a person, a specific event, a map, etc. 
  - It needs to be a photo that when the query is used will likely appear as the first image result.
  - The image should be relevant to the first tweet, since it will be posted with the first tweet.
4.- The article is:  
      >>>${article}<<<
5. Your repsonse should be in the following format (this is very important): 
response:{"tweets":["Tweet 1","tweet2","tweet3"],"SearchQuery":"Search query"}
6. Note each tweet should not be more than 280 characters.
---
response:`;

  console.log(`
  ----------------------------------------------------------------------
  2. Prompt created: 
  ----------------------------------------------------------------------
  
  ${thePrompt}`);

  return thePrompt;
}
