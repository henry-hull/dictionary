type Definition = {
    definition: string
    synonyms: string[]
    antonyms: string[]
    example: string
}

type Meaning = {
    partOfSpeech: string
    definitions: Definition[]
    synonyms: string[]
    antonyms: string[]
}

type License = {
    name: string
    url: string
}

type Word = {
    word: string
    phonetics: Phonetic[]
    meanings: Meaning[]
    license: License
    sourceUrls: string[]
}

type Phonetic = {
    audio: string
    sourceUrl?: string
    license?: License
    text?: string

}

export type Words = Word[]