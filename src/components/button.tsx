import React, { MouseEventHandler, PropsWithChildren } from "react";
import './button.css';

interface IProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = (props: PropsWithChildren<IProps>) => {
    return (
        <button onClick={props.onClick} className="aiyo-button-yellow">
            {props.children}
        </button>
    );
}