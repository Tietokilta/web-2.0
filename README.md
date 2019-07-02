# WEB 2.0

> Killan sivut 2.0

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Folder structure
You will fine README.md files inside most of the folders if you can't find the information here.

### Assets ###
The assets that you want to use are places inside this directory.
This can be images, stylesheets, videos... you name it.

### Components ###
Your components will be placed inside this directory.

### Layouts ###
Your layout files will be placed inside this directory.
Always remember to put ```<nuxt />``` inside the layout, since it defines where the content page will be loaded.

### Locale ###
The Nuxt I18n (extends VueI18n) plugin is used for localization.
In the locale directory you'll find an example for internalization.
Please follow the same format, when creating new translations

### Plugins ###
This folder contains your plugins or their configurations.
You can include these files in the nuxtjs config file

### Static ###
This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#static).

### Store ###
Vuex is the single point of truth. All the data that needs to be stored during a session should be saved here.
To learn more about Vuex, visit the [documentation](http://vuex.vuejs.org)

## Other files

### nuxt.config.js ###
By default, Nuxt.js is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.

Here you will activate plugins, import styles, add meta data etc. Since Nuxtjs doesn't have a visible index.html, most configs will be put here.

Read more from: <https://nuxtjs.org/guide/configuration/>