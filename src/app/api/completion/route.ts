// app/api/completion/route.ts

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: "user",
        content: `# 実施項目
        カテゴリ${prompt}の世界遺産検定1級の問題を過去問から日本語で作成せよ。以下のJSONフォーマットを返却せよ。        
        
        # JSONフォーマット
        {
          "question": "世界遺産検定1級の問題(string)",
          "choices": [
            "A.回答の選択肢(string)",
            "B.回答の選択肢(string)",
            "C.回答の選択肢(string)",
            "D.回答の選択肢(string)"
          ],
          "answer": {
            "choice": "解答の選択肢のアルファベット(string).選択肢",
            "heritage-name": "世界遺産の正式名称(string)",
            "country": "世界遺産のある国名(string)",
            "year_of_registration": "世界遺産登録年(string)",
            "image": "世界遺産画像のURL"
            "criterions": "世界遺産登録基準(i)～(x)(array)",
            "longitude": "googlemapの経度(integer)",
            "latitude": "googlemapの緯度(integer)",
            "description": "世界遺産概要(string)"
          }
        }`,
      },
    ],
    max_tokens: 1000,
    temperature: 2, // 単語の確率分布を変える
    top_p: 0.8, // 選択肢を制限
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    response_format: { type: "json_object" },
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
