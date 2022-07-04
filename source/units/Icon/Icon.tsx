import React from 'react';
import {Envelope, Tick} from '../../assets/svgs';

const components = {
  envelope: Envelope,
  tick: Tick,
};

interface Props {
  name: keyof typeof components;
}

export const Icon: React.FC<Props> = ({name, ...rest}) => {
  const TagName: React.FC = components[name];

  if (TagName) {
    return <TagName {...rest} />;
  } else {
    return null;
  }
};
