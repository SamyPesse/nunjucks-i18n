var nunjucks = require("nunjucks");
var _ = require("lodash");

function I18nExtension(options) {
    this.tags = ['i18n'];

    options = _.defaults(options || {}, {
        translations: {}
    });


    this.parse = function(parser, nodes, lexer) {
        // get the tag token
        var tok = parser.nextToken();

        // parse the args and move after the block end. passing true
        // as the second arg is required if there are no parentheses
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        // parse the body and possibly the error block, which is optional
        var body = parser.parseUntilBlocks('endi18n');

        parser.advanceAfterBlockEnd();

        return new nodes.CallExtension(this, 'run', args, [body]);
    };

    this.run = function(context, filter, body) {
        var ret, body;



        ret = new nunjucks.runtime.SafeString(body());
        return ret;
    };
}

module.exports = I18nExtension;
