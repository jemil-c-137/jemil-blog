import React, { useState } from "react"
import { H2, Flex, Button, Description, Title } from "../elements"
import styled from "styled-components"

const Wrapper = styled.div`
  background: #edf7fa;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 16px;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 500px;
    padding: 3rem;
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 1.25rem;
  padding: 0.5rem;
  border-radius: 8px;

  &:focus {
    outline: ${props => props.theme.colors.blue} solid;
    background: rgba(0, 0, 0, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  font-size: 1.25rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;

  &:focus {
    outline: ${props => props.theme.colors.blue} solid;
    background: rgba(0, 0, 0, 0.1);
  }
`

const FormTitle = styled(Description)`
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`

const Form = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div>
      <H2>Contact me</H2>
      <Wrapper>
        <FormTitle>Feel free to contact with me by the form</FormTitle>
        <form
          action="https://formsubmit.co/cb01b552b03e1032acbc2eeaade6d042"
          method="POST"
        >
          <Flex $direction="column" $rowGap="1rem">
            <Input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="name"
              required
            />
            <Input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email"
              required
            />
            <TextArea
              type="text"
              name="message"
              placeholder="message"
              rows={4}
              autoComplete={false}
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              multiple
            />
            <Button type="submit">Send</Button>
          </Flex>
        </form>
      </Wrapper>
    </div>
  )
}

export default Form
