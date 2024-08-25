export type Options = {
    /**
    Whether to include the rhyming part for all pronunciations of the word.

    @default false
    */
    readonly multiple?: boolean;
};

/**
Get the part of a word that rhymes with other words, allowing to check for rhymes or group rhyming words together.

@param input - Text to retrieve the rhyming part from. If there is more than one word, the last word in the text will be used.
@returns The rhyming part of the word in arpabet (e.g. 'UW1'), or a list is the multiple option is set.

@example
```
import getRhymingPart from 'rhyming-part';

getRhymingPart('Hello');
//=> 'OW1'
```
*/
export default function getRhymingPart(input: string, options?: Options): string | string[];
