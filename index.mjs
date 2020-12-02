/**
 * is
 * A simple module to make kebab-case slugs from labels.
 * @version 0.1.0
 * @module
 */

import deburr from 'lodash.deburr';
import kebabCase from 'lodash.kebabcase';

const AMPERSAND_REGEX = /&/g;
const PLUS_REGEX = /\+/g;
const SLASH_REGEX = /\//g;
const HASH_REGEX = /\#/g;
const AT_REGEX = /@/g;
const DOT_REGEX = /\./g;

const slugify = (label) => kebabCase(deburr(label.replace(AMPERSAND_REGEX, ' and ').replace(PLUS_REGEX, ' plus ').replace(SLASH_REGEX, ' slash ').replace(HASH_REGEX, ' hash ').replace(AT_REGEX, ' at ').replace(DOT_REGEX, ' dot ')));

export default slugify;
