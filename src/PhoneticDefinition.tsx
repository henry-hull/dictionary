import { Box, Heading } from "@chakra-ui/react"
import { Phonetic } from "./types"

type PhoneticDefinitionProps = {
    phonetic: Phonetic
}

export function PhoneticDefinition({ phonetic }: PhoneticDefinitionProps) {

    return (<Box>
        <Heading size="sm">{phonetic.text}</Heading>
        <audio controls>
            <source src={phonetic.audio} type="audio/mpeg" />
        </audio>
    </Box>

    )
}