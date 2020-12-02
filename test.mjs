import test from 'ava';

import slugify from './index.mjs';

test('slugify(src) replaces characters', (t) => {
  t.is(slugify('FOO&BAR'), 'foo-and-bar');
  t.is(slugify('FOO+BAR'), 'foo-plus-bar');
  t.is(slugify('FOO/BAR'), 'foo-slash-bar');
  t.is(slugify('FOO#3'), 'foo-hash-3');
  t.is(slugify('FOO@fakemail.com'), 'foo-at-fakemail-dot-com');
  t.is(slugify('Côte d\'Ivoire'), 'cote-d-ivoire');
  t.is(slugify("Côte d'Ivoire REDD+ Finance"), 'cote-d-ivoire-redd-plus-finance');
  t.pass();
});
