import { FC } from "react";

type Card = {
  id?: string;
  children: React.ReactNode;
};
export const Card: FC<Card> = ({ id, children }) => {
  return (
    <div id={id} className="card bg-base-100 shadow-xl w-full">
      <div className="card-body items-center text-center">{children}</div>
    </div>
  );
};
export default Card;
