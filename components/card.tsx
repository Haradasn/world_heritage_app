import { FC } from "react";

type Card = {
  children: React.ReactNode;
};
export const Card: FC<Card> = ({ children }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">世界遺産検定問題</h2>
        {children}
      </div>
    </div>
  );
};
export default Card;
