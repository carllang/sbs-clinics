import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Questrial',
      styles: ['400'],
    },
    {
      name: 'Roboto',
      styles: ['300'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Questrial'],
  bodyFontFamily: ['Roboto'],
});

export default typography;
