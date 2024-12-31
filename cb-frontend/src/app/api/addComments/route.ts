import { NextRequest, NextResponse } from "next/server";
const Groq = require("groq-sdk");


export async function POST(req: NextRequest) {
  try {
    const groq = new Groq({ apiKey: `${process.env.API}` });
    const { currentCode } = await req.json();
    console.log("Received code from editor:", currentCode);

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Add comments to the given code using a proper style guide",
        },
        {
          role: "user",
          content: currentCode,
        },
      ],
      model: "llama3-70b-8192",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: true,
      stop: null,
    });

    console.log("Groq API Response:", chatCompletion);
    return NextResponse.json({ data: chatCompletion });

  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
