# Front End Test for WE MAKE WEBSITES

I chose to use Gatsby for this project.

For an overview of the project in a browser please visit [this page](http://wmw.m-a-s.info/).

```sh
http://wmw.m-a-s.info/
```

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

Deploy with Rsync by running the command below (NOTE: Server requires a password)

```sh
$ mv deploy.example deploy

Change your hosting info in the deploy file
And run this command to deploy

$ ./deploy
```
