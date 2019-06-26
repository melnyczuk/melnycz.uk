import React from 'react';

interface LabelProps {
  parent: string;
  title: string;
}

const getClass = (parent: string) => (elm: string) => `${parent}--${elm}`;

const Label: React.FunctionComponent<LabelProps> =
  ({ parent, title }) =>{
    const getClassForElm = getClass(parent);
    return (
      <div className={getClassForElm('label')}>
        <h2 className={getClassForElm('title')}>
          {title}
        </h2>
      </div>
    );
  }

export { Label, LabelProps };
