# laravel-demo

try to make web application with laravel and vue.js

## 1. Introduction

setup environment and initial project

### Setup Laravel (For windows)

- Installing XAMPP

  https://www.apachefriends.org/index.html

- Installing Composer

  https://getcomposer.org/doc/00-intro.md

- Installing Laravel

1. Open cmd.exe
2. Run `composer global require laravel/installer`


### Usage

- Init Project
1. Open cmd.exe
2. Run `cd \xampp\htdocs`
3. Run `laravel new blog`
4. Can see `blog` directory in C:\xampp\htdocs

- See Web
1. Start Apache service in xampp control panel
2. Open http://localhost/blog/public/ in web browser such as Chrome

## 2. Vue Component and Router

use Vue.js framework instead html

### Setup

- Installing Node.js

  https://nodejs.org/en/download/

- Installing Package
1. Open cmd.exe
2. Run `cd \xampp\htdocs`
3. Run `npm install`
4. Run `npm install vue-router --save-dev`

- Init Home Page
1. Open cmd.exe
1. Run `cd \xampp\htdocs`
1. Run `npm run watch`
1. Open http://localhost/blog/public/ in web browser such as Chrome
1. Add or edit following files:
    - resources/views/app.blade.php
    - routes/web.php
    - resources/js/components/AppComponent.vue
    - resources/js/components/HomePage.vue
    - resources/js/app.js
    - resources/js/router.js

    see the files in this [link](https://github.com/ak1103dev/laravel-demo/commit/b9e1ed0ead1214fe918b51599413cce91df66c28)

- Link to Login Page
1. Open cmd.exe
1. Run `cd \xampp\htdocs`
1. Run `npm run watch`
1. Open http://localhost/blog/public/ in web browser such as Chrome
1. Add or edit following files:
    - resources/js/components/HomePage.vue
    - resources/js/components/LoginPage.vue
    - resources/js/router.js

    see the files in this [link](https://github.com/ak1103dev/laravel-demo/commit/6e3464e6421f1f4eda7fc11ece5bea558aa2046f)

## Reference
- [Laravel Framework Tutorial by SIPA](https://www.youtube.com/playlist?list=PLtM3znnbMbVUCSplQZ4Wl5KwOj6Inz__n) clip video playlist
- [Vue.js + Laravel](https://www.youtube.com/watch?v=DJ6PD_jBtU0) clip video
