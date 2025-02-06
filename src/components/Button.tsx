import { type ComponentPropsWithoutRef } from 'react';

import './Button.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

export default function Button(props: ButtonProps | AnchorProps) {
  return (
    <p className='CustomButton'>
      {isAnchorProps(props) ? (
        <a className='button' href='' {...props}></a>
      ) : (
        <button className='button' {...props}>
          Button
        </button>
      )}
    </p>
  );
}

// helpers
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}
