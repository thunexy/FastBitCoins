import React from 'react';
import {CaretRight, Envelope, Tick, Logo, ArrowLeft} from '../../assets/svgs';
import Search from '../../assets/svgs/Search';

const components = {
  Envelope,
  Tick,
  CaretRight,
  Search,
  ArrowLeft,
  Logo: Logo,
};

export interface IconProps {
  name: keyof typeof components;
}

export const Icon: React.FC<IconProps> = ({name, ...rest}) => {
  const TagName: React.FC = components[name];

  if (TagName) {
    return <TagName {...rest} />;
  } else {
    return null;
  }
};
