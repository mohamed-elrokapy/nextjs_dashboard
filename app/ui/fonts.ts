import localFont from 'next/font/local';

// Fonts are self-hosted through @fontsource packages instead of next/font/google,
// so the build does not need network access to Google Fonts.
export const inter = localFont({
  src: '../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  weight: '100 900',
  display: 'swap',
});

export const lusitana = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/lusitana/files/lusitana-latin-400-normal.woff2',
      weight: '400',
    },
    {
      path: '../../node_modules/@fontsource/lusitana/files/lusitana-latin-700-normal.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
});
