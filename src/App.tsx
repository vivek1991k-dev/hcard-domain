import React from 'react';

interface IApp {
	className?: string;
}

export const AppBase = (props: IApp) => {
  return (
    <div className={props.className}>
    </div>
  );
}
