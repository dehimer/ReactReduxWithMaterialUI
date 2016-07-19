const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  	app: path.join(__dirname, '/../src'),
  	build: path.join(__dirname, '/../build/client'),
};


var bundles = ['pmapp'];
var bundles_entry = {};

bundles.forEach(bundle_name => {	

	
	bundles_entry[bundle_name] = [];

	if(TARGET === 'start')
	{
		bundles_entry[bundle_name].push('webpack-hot-middleware/client?reload=true');
	}

	bundles_entry[bundle_name].push(`${PATHS.app}/${bundle_name}.js`);
});

// console.log(bundles_entry);

const common = {
	entry: bundles_entry,
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	resolve: {
		modulesDirectories: ['node_modules', './src'],
		extensions: ['', '.js', '.jsx', '.json', '.css', '.scss']
	},
	module: {
		preLoaders: [
	      	{
	        	test: /\.js$/,
	        	loaders: ['eslint'],
	        	include: [
	          		path.resolve(__dirname, '../src'),
	        	],
	      	}
	    ],
		loaders: [
			{ test: /\.js[x]?$/, exclude: /node_modules/, loaders: (TARGET === 'start')?['react-hot', 'babel-loader']:['babel-loader'] },
			{ test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
			{ test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' }
		]
	},
	postcss: (webpack) => {
	    return [
	    	require('postcss-nested')(),
	      	autoprefixer({
	        	browsers: ['last 2 versions'],
	      	}),
	      	postcssImport({
				addDependencyTo: webpack,
			}),
	    ];
	}
};

if (TARGET === 'start')
{
  module.exports = merge(development, common);
}
else if (TARGET === 'build' || !TARGET)
{
  module.exports = merge(production, common);
};