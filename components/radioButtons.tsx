import { FC, useState } from "react";

type RadioProps = {
  radioButtons: string[];
  selected: string;
  disabled: boolean;
  changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const RadioButtons: FC<RadioProps> = ({
  radioButtons,
  selected,
  disabled,
  changeValue,
}) => {
  return (
    <>
      {radioButtons.map((radio, index) => {
        return (
          <div key={index} className="flex">
            {/* checked属性に式を定義する */}
            <input
              className="radio  mb-2 mr-2"
              type="radio"
              name={`radio-${index}`}
              value={radio}
              onChange={changeValue}
              disabled={disabled}
              checked={radio === selected}
            />
            <label htmlFor={radio}>{radio}</label>
          </div>
        );
      })}
    </>
  );
};
export default RadioButtons;
