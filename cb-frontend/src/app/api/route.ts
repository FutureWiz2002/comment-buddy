const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
export async function POST(req: any) {
  const { currentCode } = await req.json();
  console.log("Inside server side function");
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Follow a google style guide and add comments. You don't have to add comments every line, but a chunck of code would be nice. If you receive a function then please use google style guides, like input and output and what it does. Please only return the code, return the code as text, DO NOT USE ```",
      },
      {
        role: "user",
        content: currentCode,
      },
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null,
  });

  console.log(chatCompletion);
  const returnedCode = {
    text: chatCompletion,
  };
  return new Response(JSON.stringify(returnedCode), {
    headers: {
      "Content-type": "application/json",
    },
    status: 201,
  });
}
