module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@env': './src/env',
        '@routes': './src/routes',
        '@controllers': './src/controllers',
        '@libs': './src/libs'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}