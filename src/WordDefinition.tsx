import { Box, VStack, Heading, ListItem, UnorderedList } from "@chakra-ui/react"
import { Word } from "./types"
import { MeaningDefinition } from "./MeaningDefinition"
import { PhoneticDefinition } from "./PhoneticDefinition"

type WordDefinitionProps = {
    word: Word
}

export function WordDefinition({ word }: WordDefinitionProps) {

    return (

        <VStack spacing={6} alignItems="flex-start">
            <Box>
                <Heading size="md">Phonetics</Heading>
                {word.phonetics.map(phonetic => <PhoneticDefinition phonetic={phonetic} />)}
            </Box>
            <Box>
                <Heading size="md">Meanings</Heading>
                <UnorderedList>
                    {word.meanings.map(meaning => <ListItem><MeaningDefinition meaning={meaning} /></ListItem>)}
                </UnorderedList>
            </Box>
        </VStack>
    )
}