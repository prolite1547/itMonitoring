const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

   mix.sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/main.scss', 'public/css/style.comp.css')
    .styles([
        'public/css/style.comp.css',
        'public/assets/css/all.min.css'
    ], 'public/css/styles.css');


