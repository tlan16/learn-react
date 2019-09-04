module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          'browsers': [
            'defaults',
            'not ie <= 11',
            'not op_mini all',
          ],
        },
      },
    ],
    '@babel/preset-react',
  ],
}
