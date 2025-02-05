import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) return <a href='' {...props}></a>;
  return <button {...props}>Button</button>;
}

// helpers
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}
