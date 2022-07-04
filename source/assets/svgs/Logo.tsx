import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const Logo = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      d="m12.23 8.24-.958 5.264H6L7.871 3h18.441L22.73 8.24H12.231Zm6.893 5.264h-7.805L8.556 29l10.567-15.496Z"
      fill="#FFB81C"
    />
  </Svg>
);
