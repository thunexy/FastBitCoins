export type TextSize = {
  [key: string]: {
    fontSize: number;
    lineHeight: number;
  };
};
export const TextSizes = {
  h1: {
    fontSize: 32,
    lineHeight: 38,
    fontWight: '700',
  },
  normal: {
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 28,
  },
  mini: {
    fontSize: 14,
    lineHeight: 18,
  },
};

export type Variant = keyof typeof TextSizes;
