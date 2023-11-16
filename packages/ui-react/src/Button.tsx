import React, {MouseEventHandler} from "react";

export interface ButtonProps {
  variant?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({ onClick }: ButtonProps) => {
  return <button className="bg-pink-900 border-2 text-white p-2 rounded-2xl hover:bg-pink-400" onClick={onClick}>Boop</button>;
};
