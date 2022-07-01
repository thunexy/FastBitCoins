export type Variant = 'h1' | 'body';
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
  body: {
    fontSize: 16,
    lineHeight: 28,
  },
};
