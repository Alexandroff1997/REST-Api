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
    marked: false
  })

  const [contacts, setContacts] = useState([])

  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value],
      id: Date.now(),
      marked: false
    })
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
      marked: false
    })
  }

  return (
    <CardContext.Provider value={{
      form,
      contacts,
      changeHandler,
      createContact
    }}>
      <div>
        <CreatePageForm />
        <CardsPage />
      </div>
    </CardContext.Provider>
  )
}


