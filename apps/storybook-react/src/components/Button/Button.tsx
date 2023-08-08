import React, {MouseEventHandler} from 'react'
import classNames from 'classnames'
export interface ButtonProps {
    className?: string
    onClick: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({ className, onClick }: ButtonProps) => {
    return <button className={classNames(className, 'bg-pink-300 text-white p-4 rounded-2xl hover:bg-pink-400')} onClick={onClick}>I some button</button>
}
