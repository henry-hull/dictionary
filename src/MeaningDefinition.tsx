import { Box } from "@chakra-ui/react"
import { Meaning } from "./types"

type MeaningDefinitionProps = {
    meaning: Meaning
}

export function MeaningDefinition({ meaning }: MeaningDefinitionProps) {
    return (
        <Box>
            <strong>{meaning.partOfSpeech}:</strong> {meaning.definitions[0].definition}
        </Box>
    )
}