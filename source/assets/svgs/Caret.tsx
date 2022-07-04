import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CaretRight = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414 4.95-4.95Z"
      fill="#707070"
    />
  </Svg>
);
