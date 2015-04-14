/**
 * Created by danielezurico on 12/04/15.
 */

var webpack = require("webpack");
var path = require("path");
var ComponentResolverPlugin = require('component-resolver-webpack');
var bower_dir = __dirname + '/bower_components';

module.exports = {
	//add alias and stop webpack to parsing script
	addVendor: function (name, path) {
		this.resolve.alias[name] = path;
		this.module.noParse.push(new RegExp('^' + name + '$'));
	},
	//the first file loaded
	entry: {
		app: "./src/modules/entry/index.ts",
		//we create a vendor file that contains all the vendor in this array
		vendor: [
			'angular',
			'ngResource',
			'ngMockE2E'
		]
	},
	//output produced
	output: {
		path: __dirname,
		filename: "dist/bundle.js",
	},
	externals: [],
	context: path.resolve(__dirname, 'app'),
	devtool: 'source-map',
	// add '.ts' to resolve.extensions array.
	resolve: {
		//when you require samething in your code it search in this array
		root: [__dirname, 'app', bower_dir],
		modulesDirectories: ['app', bower_dir],
		extensions: ['', '.ts', '.js'],
		alias: {}
	},

	module: {
		noParse: [ ],
		loaders: [
			{test: /[\/\\]angular\.js$/, loader: "exports?angular"},
			{ test: /\.ts$/, loader: 'typescript-loader'},     //add typescript support
			{ test: /\.css$/,    loader: "style-loader!css-loader" }
		]
	},
	plugins: [
		new PlunkerModuleReplacementPlugin(),                                   //annotation
		new webpack.optimize.DedupePlugin(),                                    //remove duplicate code
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),  //contains all the additional library
		new ComponentResolverPlugin(['js','ts']),                               //when you require the library inside the code you don't need to set the extension
		new webpack.ResolverPlugin([
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
		], ["normal", "loader"])                                                // plugin read from bower compatible with webpack
	],
	watch:true
};

module.exports.addVendor('angular', bower_dir + '/angular/angular.js');
module.exports.addVendor('ngResource', bower_dir + '/angular-resource/angular-resource.min.js');
module.exports.addVendor('ngMockE2E', bower_dir + '/angular-mocks/angular-mocks.js');
/**
 * THIS IS FOR ANNOTATION:
 * EXAMPLE: entry.Controller
 * If you start with bower. it search inside bower folder
 * If you start with entry (the name of your folder) it start to search inside modules
 **/

function PlunkerModuleReplacementPlugin () {
	this.resourceValidRegExp = /^sb(.*)+$/;
	this.resourceRegExp = [];

	var filesystem = require("fs");

	var modules = filesystem.readdirSync("./app/src/modules");
	for(var module in modules) {
		var name = modules[module];
		this.resourceRegExp.push(name);
	}
}

PlunkerModuleReplacementPlugin.prototype.apply = function (compiler) {
	var resourceRegExp = this.resourceRegExp;
	compiler.plugin("normal-module-factory", function (nmf) {
		nmf.plugin("before-resolve", function (result, callback) {
			if (!result) {
				console.log("NO RESULT");
				return callback();
			}

			var split = result.request.split(".");
			if(split.length > 0) {
				var name = split[0];
				if (resourceRegExp.indexOf(name) > -1) {
					result.request = __dirname + "/app/src/modules/" + split.join("/");
				}
				else if (name == "bower") {
					var map = split.slice(1);
					result.request = bower_dir + "/" + map.join("/");
				}
			}

			return callback(null, result);
		});
	});
};
