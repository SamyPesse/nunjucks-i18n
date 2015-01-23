var path = require("path");
var nunjucks = require("nunjucks");
var I18nExtension = require("../lib");

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.resolve(__dirname, "fixtures")));

env.addExtension('I18nExtension', new I18nExtension({
	env: env,
	translations: {
		fr: {
			HELLOWORLD: "Bonjour le monde"
		}
	}
}));

global.tpl = env;
