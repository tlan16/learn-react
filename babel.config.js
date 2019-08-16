module.exports = {
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
