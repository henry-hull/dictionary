import { Box, VStack, Heading, ListItem, UnorderedList, CardHeader, Card, CardBody, StackDivider } from "@chakra-ui/react"
import { Word } from "./types"
import { MeaningDefinition } from "./MeaningDefinition"
import { PhoneticDefinition } from "./PhoneticDefinition"

type WordDefinitionProps = {
    word: Word
}

export function WordDefinition({ word }: WordDefinitionProps) {

    return (
        <Card width={500}>
            <CardHeader><Heading size='lg'>{word.word}</Heading></CardHeader>

            <CardBody>
                <VStack divider={<StackDivider />} spacing={4} alignItems="flex-start">
                    <Box>
                        <Heading size="md">Meanings</Heading>
                        <UnorderedList>
                            {word.meanings.map(meaning => <ListItem><MeaningDefinition meaning={meaning} /></ListItem>)}
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md">Phonetics</Heading>
                        {word.phonetics.map(phonetic => <PhoneticDefinition phonetic={phonetic} />)}
                    </Box>
                </VStack>
            </CardBody>
        </Card>

    )
}