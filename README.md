# Front End Test for WE MAKE WEBSITES

For an overview of the project in a browser please visit [this page](http://wmw.m-a-s.info/).

```sh
http://wmw.m-a-s.info/
```

![screen shot 2018-09-17 at 00 17 21](https://user-images.githubusercontent.com/4133530/45602073-52ba0a80-ba0f-11e8-88d1-791786a74db4.png)

## CSS
I only use [PostCSS](https://postcss.org/) in this project as I tried to get light weight as much as possible.

## Install

Install modules

```sh
$ yarn
```

Install composer libraries

```sh
$ composer install
```

Create Storage Folder in root directory and change the permission

```sh
$ mkdir storage
$ chmod -R 777 storage
```

Setup Project Database using .env.example

```sh
$ mv .env.example .env

SQL file is stored in /src/sql directory
Please upload it to your database

$ cd src/sql
```

Then you can run it by:

```sh
yarn watch
```

Open this page in a browser

```sh
http://localhost:3000/
```

## Deploy

Deploy with Rsync by running the command below (NOTE: You need to setup your server)

```sh
$ mv deploy.example deploy

Change your hosting info in the deploy file
And run this command to deploy

$ ./deploy
```
