import { type QuestionAnswer } from "@/app/page";
import Button from "@/components/button";
import RadioButtons from "@/components/radioButtons";

export const Question = ({
  questionAnswer,
  onClick,
  isAnswer,
  radioButtons,
  selectedRadio,
  setSelectedRadio,
}: {
  questionAnswer: QuestionAnswer;
  onClick: () => void;
  isAnswer: boolean;
  radioButtons: string[];
  selectedRadio: string;
  setSelectedRadio: (value: string) => void;
}) => {
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedRadio(event.target.value);

  return (
    <>
      <h2 className="card-title">問題</h2>
      <p>{questionAnswer?.question}</p>
      <div>
        <RadioButtons
          disabled={isAnswer}
          selected={selectedRadio}
          radioButtons={radioButtons}
          changeValue={changeValue}
        />
      </div>
      <div>
        <Button to="answer" onClick={onClick} disabled={false}>
          回答する
        </Button>
      </div>
    </>
  );
};
