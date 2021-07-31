import React, {useState, useContext} from 'react'
import {CreatePageForm} from "./components/CreatePageForm"
import {CardsPage} from "./components/CardsPage"

const CardContext = React.createContext()

export const useCardProvider = () => {
  return useContext(CardContext)
}

export default function App() {
  const [form, setForm] = useState({
    name: '',
    value: '',
    id: '',
    marked: ''
  })

  const [block, setBlock] = useState(false)

  const [contacts, setContacts] = useState([])

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

  const createContact = e => {
    e.preventDefault()
    const {...contact} = form
    setContacts([
      ...contacts,
      contact
    ])
    setForm({
      name: '',
      value: '',
      id: '',
      marked: ''
    })
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
      <div>
        <CreatePageForm />
        <CardsPage />
      </div>
    </CardContext.Provider>
  )
}


