export const fonts = {
  regular: 'Delius-Regular',
  // medium: 'Delius-Regular',
  // bold: 'Delius-Regular',
  meowScript: 'MeowScript-Regular',
} as const;

export type FontWeight = keyof typeof fonts;

