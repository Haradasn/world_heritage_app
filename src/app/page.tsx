"use client";
import Button from "@/components/button";
import Card from "@/components/card";
import Select from "@/components/select";
import { useState } from "react";
import { useCompletion } from "ai/react";
import { Question } from "./question";
import { Answer } from "@/components/answer";

type Answer = {
  "heritage-name": string;
  choice: string;
  country: string;
  year_of_registration: string;
  image: string;
  criterions: string[];
  description: string;
  longitude: string;
  latitude: string;
};
export type QuestionAnswer = {
  question: string;
  choices: string[];
  answer: Answer;
};

export default function Home() {
  const [isAnswer, setIsAnswer] = useState(false);
  const [imageLink, setImageLink] = useState({ data: "" });
  const [selectValue, setSelectValue] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState<
    QuestionAnswer | undefined
  >();
  const handleValueChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    if (event) {
      setSelectValue(event.target.value);
    }
  };
  const generateQuestion = async () => {
    setIsAnswer(false);
    await complete(selectValue);
  };
  const { complete, isLoading } = useCompletion({
    api: "/api/completion",
    onFinish: (prop, completion) => {
      const parsedCompletion = JSON.parse(completion);
      setQuestionAnswer(parsedCompletion);
      getImage(
        `${parsedCompletion?.answer["heritage-name"]}　${parsedCompletion?.answer?.country}`
      );
    },
  });
  const getImage = async (query: string | undefined) => {
    if (query) {
      const link = await fetch(
        `${
          process.env.NEXT_PUBLIC_SITE_URL
        }/api/image?query=${encodeURIComponent(query)}`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      setImageLink(link);
    }
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-3 overflow-hidden">
        <div id="question" className="w-full md:w-[889px]">
          <div className="my-4">
            <Card>
              <h2 className="card-title">世界遺産 AI ウェーブ</h2>
              <div className="flex-start">
                <div className="flex whitespace-nowrap">
                  <Select onChange={handleValueChange} disabled={isLoading} />
                  <Button
                    to="#"
                    onClick={generateQuestion}
                    disabled={isLoading}
                  >
                    出題する
                  </Button>
                </div>
              </div>
              {isLoading ? (
                <>
                  AIが問題を作成中
                  <span className="loading loading-dots loading-xs"></span>
                </>
              ) : (
                questionAnswer && (
                  <Question
                    questionAnswer={questionAnswer}
                    onClick={() => {
                      setIsAnswer(true);
                    }}
                    isAnswer={isAnswer}
                    selectedRadio={selectedRadio}
                    radioButtons={questionAnswer.choices}
                    setSelectedRadio={setSelectedRadio}
                  />
                )
              )}
            </Card>
          </div>
          <div></div>
          {questionAnswer && (
            <Answer
              questionAnswer={questionAnswer}
              isAnswer={isAnswer}
              imageLink={imageLink?.data}
              selectedRadio={selectedRadio}
            />
          )}
        </div>
      </main>
    </>
  );
}
