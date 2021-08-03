import React, {useState, useContext} from 'react'
import {request} from "../../express/express";

const CardContext = React.createContext()

export const useCardProvider = () => {
  return useContext(CardContext)
}

export const AppCardContext = ({ children, serverData }) => {

  const [form, setForm] = useState({
    name: '',
    value: '',
    id: '',
    marked: ''
  })

  const [block, setBlock] = useState(false)

  const [contacts, setContacts] = useState([...serverData])

  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      id: Date.now(),
      marked: false
    })
    form.name.length === 0 && form.value.length === 0 ?
      setBlock(false) :
      setBlock(true)
  }

  async function createContact (e) {
    e.preventDefault()
    const {name, value} = form
    const contactDate = {
      name,
      value
    }
    const newContact = await request('/api/contacts', 'POST', contactDate)

    setContacts([
      ...contacts,
      newContact
    ])
    setForm({
      name: '',
      value: '',
      id: '',
      marked: ''
    })
    setBlock(false)
  }

  const changeContact = contact => {
    setContacts(contacts.map(el => el.id === contact.id ? contact : el))
  }

  const removeContact = id => {
    setContacts(contacts.filter(el => el.id !== id))
  }

  return (
    <CardContext.Provider value={{
      form,
      contacts,
      block,
      changeHandler,
      createContact,
      changeContact,
      removeContact
    }}>
      { children }
    </CardContext.Provider>
  )
}