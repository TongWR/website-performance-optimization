Website Performance Optimization
===============================

This Front-End Web Developer [Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) project showcases website performance optimization techniques. In human language, we make pages load faster and elements animate smoother.

The original source code is in folder src, the optimized code is in dist folder.

Specifically, three main results are achieved:
1) [PageSpeed](https://developers.google.com/speed/pagespeed/insights/) score > 90 for index.html, both for Mobile and Desktop.
2) Resizing pizzas in pizza.html takes < 5ms.
3) pizza.html consistently renders at 60FPS or above.

## How to Set Up
[Gulp](http://gulpjs.com/), a popular task runner, is used to automate HTML/CSS/JS minifications and image optimization.

After installing Gulp and downloading this repository, simply go to the directory downloaded and type 'gulp' to run the optimizations. That is code/assets in dist will be re-generated from src folder again.