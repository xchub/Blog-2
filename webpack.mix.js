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
// 导航站
mix.styles([
    'resources/assets/web-stack/css/fonts/linecons/css/linecons.css',
    'resources/assets/web-stack/css/fonts/fontawesome/css/font-awesome.min.css',
    'resources/assets/web-stack/css/bootstrap.css',
    'resources/assets/web-stack/css/xenon-core.css',
    'resources/assets/web-stack/css/xenon-components.css',
    'resources/assets/web-stack/css/xenon-skins.css',
    'resources/assets/web-stack/css/nav.css'
], 'public/static-navigation/css/app.css');

mix.copyDirectory('resources/assets/web-stack/css/fonts/fontawesome/fonts', 'public/static-navigation/fonts');
mix.copyDirectory('resources/assets/web-stack/css/fonts/linecons/font', 'public/static-navigation/font');

mix.scripts([
    'resources/assets/web-stack/js/jquery-1.11.1.min.js',
    'resources/assets/web-stack/js/bootstrap.min.js',
    'resources/assets/web-stack/js/TweenMax.min.js',
    'resources/assets/web-stack/js/resizeable.js',
    'resources/assets/web-stack/js/joinable.js',
    'resources/assets/web-stack/js/xenon-api.js',
    'resources/assets/web-stack/js/xenon-toggles.js',
    'resources/assets/web-stack/js/xenon-custom.js',
], 'public/static-navigation/js/app.js');

// Wiki 系统
mix.styles([
    'resources/assets/wiki/bootstrap/css/bootstrap.min.css',
    'resources/assets/wiki/editormd/css/editormd.min.css'
], 'public/static-wiki/css/app.css');

mix.scripts([
    'resources/assets/wiki/scripts/wiki.js'
], 'public/static-wiki/js/app.js');

mix.version();
