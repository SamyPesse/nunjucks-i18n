# Nunjucks i18n

[![Build Status](https://travis-ci.org/SamyPesse/nunjucks-i18n.png?branch=master)](https://travis-ci.org/SamyPesse/nunjucks-i18n)
[![NPM version](https://badge.fury.io/js/nunjucks-i18n.svg)](http://badge.fury.io/js/nunjucks-i18n)

Nunjucks extension to translate templates.

### How to install it?

```
$ npm install nunjucks-i18n
```

### How to use it?

```js
var I18nExtension = require("nunjucks-i18n");

env.addExtension('I18nExtension', new I18nExtension({
	env: env,
	translations: {
		fr: {
			HELLOWORLD: "Bonjour __name__"
		}
	}
}));
```


```html
{% i18n 'HELLOWORLD' __name__=name %}
Hello __name__
{% endi18n %}
```
