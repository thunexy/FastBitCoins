export type TextSize = {
  [key: string]: {
    fontSize: number;
    lineHeight: number;
    fontWeight: '400' | '600' | '700';
  };
};
export const fontFamily = {
  poppinsRegular: 'Poppins-Regular',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsBold: 'Poppins-Bold',
};
export const TextSizes = {
  h1: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '700',
    fontFamily: fontFamily.poppinsBold,
  },
  h2: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '700',
    fontFamily: fontFamily.poppinsBold,
  },
  h3: {
    fontSize: 21,
    lineHeight: 32,
    fontWeight: '600',
    fontFamily: fontFamily.poppinsSemiBold,
  },
  h4: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '700',
    fontFamily: fontFamily.poppinsBold,
  },
  big: {
    fontSize: 21,
    lineHeight: 32,
    fontWeight: '400',
    fontFamily: fontFamily.poppinsRegular,
  },
  normal: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: fontFamily.poppinsSemiBold,
  },
  body: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: fontFamily.poppinsBold,
  },
  mini: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: fontFamily.poppinsRegular,
  },
};

export type Variant = keyof typeof TextSizes;
