import React, { useState } from 'react'
import { Form, Button,Row } from 'react-bootstrap'


const TripleSearchBox = ({ history }) => {
  const [keyword1, setKeyword1] = useState('')
  const [keyword2, setKeyword2] = useState('')
  const [keyword3, setKeyword3] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword1.trim()||keyword2.trim()||keyword3.trim()) {
          history.push(`/search/${keyword1},${keyword2},${keyword3}`)
          } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
      <Form.Control
        size="sm"
        type='text'
        name='q'
        onChange={(e) => setKeyword1(e.target.value)}
        placeholder='name'
        className='mr-sm-1 ml-sm-0'
      ></Form.Control>
       <Form.Control
        size="sm"
        type='text'
        name='q'
        onChange={(e) => setKeyword2(e.target.value)}
        placeholder='catagory'
        className='mr-sm-1 ml-sm-0'
      ></Form.Control>
       <Form.Control
        size="sm"
        type='text'
        name='q'
        onChange={(e) => setKeyword3(e.target.value)}
        placeholder='description'
        className='mr-sm-1 ml-sm-0'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
      </Row>
     
      
    </Form>
  )
}

export default TripleSearchBox