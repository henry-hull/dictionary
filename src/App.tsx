import { Button, Heading, Input, Text, HStack, Container } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { Words } from './types'

function App() {
  const [word, setWord] = useState("")
  const [definitions, setDefinitions] = useState<Words>([])

  const invalid = word === ""

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setWord(event.target.value)
  }

  async function handleClick(): Promise<void> {
    console.log({ word })
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setDefinitions(json)
      console.log(json);
    } catch (error) {
      console.error({error});
    }
  }

  return (
    <>
      <Heading margin={10}>Dictionary</Heading>
      <HStack margin={10}>
        <Input placeholder='Enter Word' value={word} onChange={handleChange} />
        <Button colorScheme='red' onClick={handleClick} isDisabled={invalid} >Go</Button>
      </HStack>
      {definitions.length>0&&
      <Container>{definitions[0].meanings[0].definitions[0].definition}</Container>}
    </>
  )
}

export default App
