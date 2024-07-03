import { Button, Heading, Input, HStack, Container, useToast, VStack, Box } from '@chakra-ui/react'
import { ChangeEvent, useState, KeyboardEvent } from 'react'
import { Words } from './types'
import { WordDefinition } from './WordDefinition'

function App() {
  const toast = useToast()
  const [word, setWord] = useState("")
  const [results, setResults] = useState<Words>([])

  const invalid = word === ""

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setWord(event.target.value)
  }

  async function handleClick(): Promise<void> {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast({
          title: `"${word}" not found.`,
          description: `Server response was ${response.status}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      const json = await response.json();
      setResults(json)
    } catch (error) {
      console.error({ error });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    console.log(event)
    if (event.keyCode === 13) {
      handleClick()
    }
  }

  return (
    <>
      <Heading margin={10}>Dictionary</Heading>
      <HStack margin={10}>
        <Input placeholder='Enter Word' value={word} onChange={handleChange} onKeyDown={handleKeyDown} />
        <Button colorScheme='red' onClick={handleClick} isDisabled={invalid} >Go</Button>
      </HStack>

      <Box maxW="2xl">
        <VStack spacing={4}>
          {results.map(result => <WordDefinition word={result} />)}
        </VStack>
      </Box>
    </>
  )
}

export default App
