export type Words = Word[];

export interface Word {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
}

export interface Phonetic {
  text: string;
  audio?: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface Definition {
  definition: string;
  example: string;
  synonyms: any[];
  antonyms: any[];
}
