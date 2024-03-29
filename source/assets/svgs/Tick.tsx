import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const Tick = (props: SvgProps) => (
  <Svg width={96} height={96} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M94.533 46.557c-.783 0-1.467.636-1.467 1.468 0 24.843-20.247 45.09-45.09 45.09-24.844 0-45.09-20.247-45.09-45.09 0-24.844 20.246-45.14 45.139-45.14 13.302 0 25.723 5.82 34.33 15.894L39.369 61.816l-13.35-13.351c-.588-.587-1.468-.587-2.055 0-.587.586-.587 1.467 0 2.054L38.39 64.945c.294.294.636.44 1.027.44.392 0 .734-.146 1.027-.44l44.895-45.04c.587-.588.587-1.468 0-2.055-.05-.049-.147 0-.196-.098 0-.097 0-.195-.098-.293C75.9 6.358 62.402 0 48.025 0 21.518 0 0 21.518 0 48.025 0 74.53 21.518 96.049 48.025 96.049c26.506 0 48.024-21.518 48.024-48.025 0-.782-.636-1.467-1.467-1.467h-.05Z"
        fill="#1AC057"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h96v96H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Tick;
