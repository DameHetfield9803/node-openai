const openai = require("../config/config");

const GPTMODEL = "gpt-4o";

const getChatResponse = async (question) => {
  const response = await openai.chat.completions.create({
    messages: [
      { 
          role: "user", 
          content: question
      },
    ],
    model: GPTMODEL,
  })
  return (response.choices[0].message.content);
}

module.exports = { getChatResponse };