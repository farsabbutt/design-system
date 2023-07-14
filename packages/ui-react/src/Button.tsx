import React, {MouseEventHandler} from "react";

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({ onClick }: ButtonProps) => {
  return <button className="bg-pink-800 p-4 text-white rounded-2xl hover:bg-red-400" onClick={onClick}>Boop</button>;
};
