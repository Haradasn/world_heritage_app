import { Card } from "@/components/card";
import { QuestionAnswer } from "@/app/page";
import { criterionToolchips } from "@/utils/criterionToolchips";
import Image from "next/image";
import Button from "@/components/button";
import { animateScroll as scroll } from "react-scroll";
export const Answer = ({
  questionAnswer,
  isAnswer,
  imageLink,
  selectedRadio,
}: {
  questionAnswer: QuestionAnswer;
  isAnswer: boolean;
  imageLink: string;
  selectedRadio: string;
}) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={isAnswer ? "visible" : "invisible"}>
      <Card id="answer">
        {questionAnswer?.answer.choice === selectedRadio ? (
          <h2 className="card-title text-red-600">正解</h2>
        ) : (
          <h2 className="card-title text-blue-600">不正解</h2>
        )}
        <h2 className="card-title">答え：{questionAnswer?.answer.choice}</h2>
        <div className="flex flex-wrap justify-center">
          <div className="mr-4">
            名称：{questionAnswer?.answer["heritage-name"]}
          </div>
          <div className="mr-4">国名：{questionAnswer?.answer?.country}</div>
        </div>
        <div className="flex">
          <div className="mr-4">
            登録年：{questionAnswer?.answer?.year_of_registration}
          </div>
          <div className="mr-4">
            登録基準：
            {questionAnswer?.answer?.criterions.map((criterion: string) => (
              <>
                <button
                  className="tooltip tooltip-bottom before:w-[10rem] before:content-[attr(data-tip)]"
                  data-tip={criterionToolchips(criterion)}
                >
                  {criterion}
                </button>
              </>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={imageLink}
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <div className="gcse-search"></div>
        <div>
          解説：
          {questionAnswer?.answer?.description
            ? questionAnswer?.answer?.description
            : "解説はありません"}
        </div>
        <div className="border-spacing-0">
          <iframe
            src={`https://www.google.co.jp/maps/embed/v1/place?key=${
              process.env.NEXT_PUBLIC_GOOGLE_API_KEY
            }&q=${encodeURIComponent(
              `${questionAnswer?.answer["heritage-name"]}　${questionAnswer?.answer?.country}`
            )}&zoom=4`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="card-actions justify-end">
          <Button to="question" onClick={scrollToTop} disabled={false}>
            トップへ戻る
          </Button>
        </div>
      </Card>
    </div>
  );
};
