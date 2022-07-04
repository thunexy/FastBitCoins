import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11Z"
      fill="#101820"
    />
  </Svg>
);
