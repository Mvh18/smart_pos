const mix = require('laravel-mix');
const webpack = require('webpack');

mix.webpackConfig({
   plugins: [
      new webpack.ProvidePlugin({
         '$': 'jquery',
         'jQuery': 'jquery',
         'window.jQuery': 'jquery',
      }),
   ]
});

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/scss/app.scss', 'public/css')
   .copy('resources/images', 'public/images') 
   .copy('resources/fonts', 'public/fonts');

mix.copy('resources/vendors/flag-icon-css/css/flag-icons.min.css', 'public/css/vendors/flag-icons.min.css')
   .copy('resources/vendors/flag-icon-css/flags/4x3', 'public/css/flags/4x3')
   .copy('resources/vendors/owl-carousel-2/owl.carousel.min.css', 'public/css/vendors/owl.carousel.min.css')
   .copy('resources/vendors/owl-carousel-2/owl.theme.default.min.css', 'public/css/vendors/owl.theme.default.min.css')
   .copy('resources/vendors/select2/select2.min.css', 'public/css/vendors/select2.min.css')
   .copy('resources/vendors/select2-bootstrap-theme/select2-bootstrap.min.css', 'public/css/vendors/select2-bootstrap.min.css')
   .copy('resources/vendors/css/vendor.bundle.base.css', 'public/css/vendors/vendor.bundle.base.css')
   .copy('resources/vendors/font-awesome/css/font-awesome.min.css', 'public/css/vendors/font-awesome.min.css')
   .copy('resources/vendors/mdi/fonts', 'public/css/fonts')
   .copy('resources/vendors/jvectormap/jquery-jvectormap.css', 'public/css/vendors/jquery-jvectormap.css')
   .copy('resources/vendors/ti-icons/css/themify-icons.css', 'public/css/vendors/themify-icons.css')
   .copy('resources/vendors/jquery-file-upload/jquery.uploadfile.min.js', 'public/js/vendors/jquery.uploadfile.min.js')
   .copy('resources/vendors/js/vendor.bundle.base.js', 'public/js/vendors/vendor.bundle.base.js')