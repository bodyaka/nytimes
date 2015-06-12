dependencies = {
	action:"clean,release",
	selectorEngine: "acme",
	optimize:"shrinksafe",
	cssOptimize: true,
	releaseDir: "../../../",
	releaseName: "release",
	
	layers: [
		{
			name : "dojo.js",
			dependencies : [
			]
		}, {
			name : "../engine/engine.js",
			dependencies : [
			]
		}
	],
	prefixes: [
	    [ "dijit", "../dijit" ],
		[ "engine", "../../engine-src" ]
	]
};
