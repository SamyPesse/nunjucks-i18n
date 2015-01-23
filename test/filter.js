var assert = require('assert');

describe('Filter', function () {
    it('should correctly translate a message with a variable', function() {
    	assert.equal(tpl.render("hello_filter.html", {__locale__: "fr", name: "Samy"}), "Bonjour Samy");
    });
});
