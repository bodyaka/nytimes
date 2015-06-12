# nytimes project

Project is based at NodeJS server

NYTynes API is proxied by NodeJS. (In first variant of project was used JSONP for Cross-Domain request, but in API-V2 full text of article is not returned. Then i'm try to use API-V1 for get full text, but as it turned out V1 is completely deprecated)

##Install:

1. git clone git@github.com:bodyaka/nytimes.git
2. Configure project in config/config.json
  * ip - run NodeJS package at IP
  * port - run NodeJS package at PORT
  * environment - project environment. Can be "dev"|"prod"
  * devDojoSource - used only if environment=="dev". Relative path to source of Dojo Toolkit 
2. npm install
3. nodejs app.js

# Build JS if needed:

1. unpack [Dojo Toolkit SDK](http://download.dojotoolkit.org/release-1.10.4/dojo-release-1.10.4-src.tar.gz) to public/js/dojo-src (by default)
2. run script ./public/js/profile/build.sh
