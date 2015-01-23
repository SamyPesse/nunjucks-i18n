var assert = require('assert');

describe('Translations', function () {
    it('should correctly show default value', function() {
    	assert.equal(tpl.render("helloworld.html"), "Hello World");
    });

    it('should correctly show translate a simple message', function() {
    	assert.equal(tpl.render("helloworld.html", {__lang__: "fr"}), "Bonjour le monde");
    });
});
