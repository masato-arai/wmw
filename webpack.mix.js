const mix = require('laravel-mix');

mix
  .autoload({ jquery: ['jQuery', '$'] })
  .webpackConfig({
    devtool: 'inline-source-map',
    output: { chunkFilename: 'scripts/[name][chunkhash].js' },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'imports-loader?define=>false',
        },
      ],
    },
  })
  .setPublicPath('web')
  .setResourceRoot('src')
  .postCss('src/css/main.css', 'web/css', [
    require('precss')(),
    require('postcss-easy-import')({ prefix: '_' }),
    require('postcss-custom-media'),
  ])
  .js('src/js/main.js', 'web/js')
  .extract(['fastclick', 'jquery'])
  .version();

if (mix.inProduction) {
  mix.sourceMaps(false);
  mix.version();
} else {
  mix.sourceMaps();
}

mix.browserSync({
  proxy: 'wmw.test',
  files: ['templates/**/*.twig', 'web/css/**/*.css', 'web/js/**/*.js'],
});
