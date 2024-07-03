import { Button, Heading, Input, HStack, Container, useToast } from '@chakra-ui/react'
import { ChangeEvent, useState, KeyboardEvent } from 'react'
import { Words } from './types'

function App() {
  const toast = useToast()
  const [word, setWord] = useState("")
  const [definitions, setDefinitions] = useState<Words>([])

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
      setDefinitions(json)
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
      {definitions.length > 0 &&
        <Container>{definitions[0].meanings[0].definitions[0].definition}</Container>}
    </>
  )
}

export default App
