import { useCompletion } from "ai/react";
import { Link as Scroll } from "react-scroll";
import { FC, FormEvent, useState } from "react";

type ButtonProps = {
  children: string;
  to: string;
  onClick: () => void;
  disabled: boolean;
};
const Button: FC<ButtonProps> = ({ to, children, onClick, disabled }) => {
  return (
    <div className="card-actions w-full">
      <Scroll to={to} smooth={true} offset={0}>
        <button
          onClick={onClick}
          className="btn btn-primary"
          disabled={disabled}
        >
          {children}
        </button>
      </Scroll>
    </div>
  );
};
export default Button;
