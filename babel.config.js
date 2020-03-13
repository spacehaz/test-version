const presets = [
  [
    '@babel/env',
    {
      targets: {
        android: '67',
        ios: '12',
        edge: '15',
        firefox: '60',
        chrome: '64',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      corejs: '3.1.4',
    },
  ],
];

module.exports = { presets };
