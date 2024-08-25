import { dictionary } from 'cmu-pronouncing-dictionary';
import extractWords from 'extractwords';

const MAX_PRONUNCIATIONS = 10;

export default function getRhymingPart(input, { multiple = false } = {}) {
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof input}`);
    }

    const defaultReturn = multiple ? [] : '';

    const words = extractWords(input, { lowercase: true });
    if (!words || words.length === 0) return defaultReturn;
    const lastWord = words[words.length - 1] ?? '';
    const rhymingPart = getRhymingPartFromWord(lastWord);

    if (!multiple) {
        return rhymingPart;
    }

    if (!rhymingPart) {
        return defaultReturn;
    }

    const rhymingParts = [rhymingPart];

    for (let i = 1; i < MAX_PRONUNCIATIONS; i++) {
        const rhymingPart = getRhymingPartFromWord(`${lastWord}(${i})`);

        if (!rhymingPart) {
            // don't break, in case a number was skipped in data entry for whatever reason
            continue;
        }

        rhymingParts.push(rhymingPart);
    }

    return [...new Set(rhymingParts)];
}

function getRhymingPartFromWord(word) {
    const pronounciation = dictionary[word] ?? '';
    const stresses = pronounciation.split(' ');
    const searchStress = pronounciation.includes('1') ? '1' : '2';

    for (let i = stresses.length - 1; i >= 0; i--) {
        if (stresses[i].includes(searchStress)) {
            return stresses.slice(i).join(' ');
        }
    }

    return '';
}
