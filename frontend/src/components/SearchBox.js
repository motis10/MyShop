import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history, fromScreen }) => {
  const [keyword, setKeyword] = useState('')
  const [isAdmin, setIsAdmin] = useState('')
  const [isGmail, setIsGmail] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if(fromScreen && fromScreen === 'usersList'){
      if (keyword.trim()){
        history.push(`/admin/userlist:${keyword},${isAdmin},${isGmail}`)
      } else {
        history.push(`/admin/userlist`)
      }
    } else {
      if (keyword.trim()) {
        history.push(`/search/${keyword}`)
      } else {
        history.push('/')
      }
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search...'
        className='mr-sm-2'
      ></Form.Control>
      <Form.Label>
        IsAdmin
      </Form.Label>
      <Form.Control
        type='checkbox'
        name='admin'
        onChange={(e) => setIsAdmin(e.target.checked)}
        className='mr-sm-2'
      ></Form.Control>
      <Form.Label>
        IsGmail
      </Form.Label>
      <Form.Control
        type='checkbox'
        name='gmail'
        onChange={(e) => setIsGmail(e.target.checked)}
        className='mr-sm-2'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox