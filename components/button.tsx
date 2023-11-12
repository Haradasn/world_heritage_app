import { FC } from "react";

type ButtonProps = {
  onClick: () => void;
};
const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="card-actions">
      <button onClick={onClick} className="btn btn-primary">
        解答する
      </button>
    </div>
  );
};
export default Button;
