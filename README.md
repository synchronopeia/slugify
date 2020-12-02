# Slugify Labels

## Motivation

Sometimes we just want to do:

```javascript
slugify("Côte d'Ivoire REDD+ Finance")); // cote-d-ivoire-redd-plus-finance
```

For more complicated use cases, we use the impressive [@sindresorhus/slugify](https://www.npmjs.com/package/@sindresorhus/slugify).

## Details

Does a [deburr](https://lodash.com/docs/4.17.15#deburr) and converts to kebab case after some simple character replacements.

The character replacements are

Char | Replacement
---- | -----------
& | and
+ | plus
/ | slash
# | hash
@ | at
. | dot

## Dependencies

We use the standalone lodash modules [lodash.deburr](https://www.npmjs.com/package/lodash.deburr) and [lodash.kebabcase](https://www.npmjs.com/package/lodash.kebabcase).

## Requirements

We use es6 modules (Node version >= 13.2.0). See [Announcing core Node.js support for ECMAScript modules](https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663).

