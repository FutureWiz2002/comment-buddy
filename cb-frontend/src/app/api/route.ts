const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
export async function POST(req: any) {
  const { currentCode } = await req.json();
  console.log("Inside server side function");
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "please write a poem of two lines",
      },
      {
        role: "user",
        content: "please write a poem of two lines",
      },
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
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

// type ResponseData = {
//   message: string
// }

// export async function GET() {
//   return new Response("Hi")
// }
