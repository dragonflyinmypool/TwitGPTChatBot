const GPT3Lib = require('openai-api');
require('dotenv').config();

// Load key
const gpt3 = new GPT3Lib(process.env.API_KEY_OpenAI);

// Call OpenAI API
exports.GPT3_API = async (prompt) => {
  const gpt3Response = await gpt3.complete({
    engine: 'text-davinci-003',
    prompt: prompt.text,
    maxTokens: 1250,
    temperature: prompt.temp,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
  });
  const thread = stringToArray(gpt3Response.data.choices[0].text);

  console.log(`
  ----------------------------------------------------------------------
  3. GPT3 reply:
  ----------------------------------------------------------------------
  ===> Tweets ==> ${thread.tweets}

  
  ===> Search Query ==> ${thread.SearchQuery}
  `);

  return thread;
};

// convert string to array ["string 1","string 2","string 3"]
function stringToArray(gpt) {
  const arr = JSON.parse(gpt);
  return arr;
}
