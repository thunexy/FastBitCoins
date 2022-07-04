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
  h2: {
    fontSize: 30,
  },
  h3: {
    fontSize: 21,
  },
  h4: {
    fontSize: 18,
    lineHeight: 26,
    fontWight: '600',
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
