import React from 'react';

export interface IButtonProps {
  title: string;
  buttonClass?: string;
  onClick: () => void;
}

export const Button = (props: IButtonProps) => {

  const btnClass = props.buttonClass ? props.buttonClass : "";

  return (
    <button className={`btn ${btnClass}`} onClick={props.onClick}>{props.title}</button>
  );
}
