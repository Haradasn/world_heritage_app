import { FC } from "react";

type RadioProps = {
  children: string;
};
const Radio: FC<RadioProps> = ({ children }) => {
  return (
    <div className="flex">
      <input type="radio" name="radio-1" className="radio" />
      <label htmlFor={children}>{children}</label>
    </div>
  );
};
export default Radio;
