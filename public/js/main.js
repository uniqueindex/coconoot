
require.config({
	paths: {
		jquery: 'libs/jquery-1.9.1',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		bootstrap: 'libs/bootstrap',
		json2: 'libs/json2',
		text: 'libs/test',
		template: '../template'
	},

	shim: {
		underscore: { 
			deps: ["jquery"],
			exports: '-' 
		},
		backbone: { 
			deps: ["underscore", "json2", "jquery"],
			exports: "Backbone"
		},
		bootstrap: {
			deps: ["jquery"]
		}
	}
});

require (['app'], function(app) {
	app.initialize();
});
