# rhyming-part

> Get the part of a word that rhymes with other words, allowing to check for rhymes or for grouping rhyming words together.

Uses the CMU Pronouncing Dictionary to get the rhyming part of a word's pronounciation. This can be used to check if words rhyme with each other, or group together words that rhyme.

This is useful for automatically generating rhyming sentences, poems, etc. It is very accurate as it uses the pronouncing dictionary, but may not recognise some words, though the CMU dictionary does contain over 140k words.

## Install

```sh
npm install rhyming-part
```

## Usage

```js
import getRhymingPart from 'rhyming-part';

getRhymingPart('Hello');
//=> 'OW1'

getRhymingPart('Below');
//=> 'OW1'

getRhymingPart('treat');
//=> 'IY1 T'

getRhymingPart('Would you like a treat?');
//=> 'IY1 T'

getRhymingPart('Sweet');
//=> 'IY1 T'

getRhymingPart('ajhakjhksa');
//=> ''

getRhymingPart('Taxes', { multiple: true });
//=> ['AE1 K S AH0 Z', 'AE1 K S IH0 Z']

getRhymingPart('taped', { multiple: true });
//=> ['EY1 P T']

getRhymingPart('uahoahja', { multiple: true });
//=> []
```

## API

### getRhymingPart(input, options?)

#### input

Type: `string`

Text to retrieve the rhyming part from. If there is more than one word, the last word in the text will be used.

#### options

Type: `object`

##### multiple

Type: `boolean`\
Default: `false`

Whether to include all unique rhyming parts for every pronunciation of the word.
