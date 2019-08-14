import * as React from 'react';
import { Button } from './Button';

interface IProps {
   title: string,
   subTitle?: string

}

const onClickHandler = () => {
   console.log('Button clicked');
}

export const Hello = (props: IProps) => {

   return (
      <div>
         <h1>{props.title}</h1>
         {props.subTitle && <h3>{props.subTitle}</h3>}
         <Button onClick={() => onClickHandler()} title='Default Button' />
         <Button onClick={() => onClickHandler()} title='Info Button' buttonClass='infoBtn' />
         <Button onClick={() => onClickHandler()} title='Alert Button' buttonClass='alertBtn' />
      </div>

   );
}

//         {props.subTitle && <h3>{props.subTitle}</h3>}
