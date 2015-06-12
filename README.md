# nytimes project

Project is based at NodeJS server

NYTynes API are proxied by NodeJS. (In first variant of project was used JSONP for Cross-Domain request, but in V2 of API full text of article is not returned. Then i'm try to use API V1 for get full text, but as it turned out V1 is completely deprecated)

##Install:

1. git clone git@github.com:bodyaka/nytimes.git
2. Configure project in config/config.json
	ip - run node package at IP
	port - run node package at PORT
	environment - project environment. Can be "dev"|"prod"
	devDojoSource - used only if environment=="dev". Relative path to source of Dojo Toolkit 
2. npm install
3. nodejs app.js

# Build JS if needed:
public/js/profile/build.sh
