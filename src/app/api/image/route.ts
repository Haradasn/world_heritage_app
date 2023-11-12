"use server";
import { customsearch_v1 } from "@googleapis/customsearch";
import { google } from "googleapis";
import { NextRequest } from "next/server";
const customsearch: customsearch_v1.Customsearch = google.customsearch("v1");

// Ex: node customsearch.js
//      "Google Node.js"
//      "API KEY"
//      "CUSTOM ENGINE ID"
type Res = {
  data: Items;
};
type Items = {
  items: Link[];
};
type Link = {
  link: string;
};
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  console.log("searchParams", searchParams);
  const param = searchParams.get("query");
  console.log("param", param);
  const options = {
    q: `${param}`,
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    cx: process.env.GOOGLE_API_CX_KEY,
  };
  const res = (await customsearch.cse.list({
    cx: options.cx,
    q: options.q,
    auth: options.apiKey,
    searchType: "image",
    num: 1,
  })) as unknown as Res | undefined;
  console.log("res", res?.data);
  return new Response(JSON.stringify({ data: res?.data.items[0].link }));
}

// You can get a custom search engine id at
// https://www.google.com/cse/create/new
