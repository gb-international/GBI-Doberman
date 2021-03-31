let mix = require('laravel-mix');

mix.webpackConfig({
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'resources/js')
      }
   }
});



// mix.js('resources/js/front/app.js', 'public/js')
//    .sass('resources/sass/front/app.scss', 'public/css')

mix.js('resources/js/admin/admin.js', 'public/js/admin')
   .sass('resources/sass/admin/app.scss', 'public/css/admin')

mix.js('resources/js/escort/app.js', 'public/js/escort')
   .sass('resources/sass/escort/app.scss', 'public/css/escort')









