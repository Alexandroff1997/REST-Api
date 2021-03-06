import React from 'react'
import {useCardProvider} from "../AppContext/AppCardContext"
import {request} from "../../express/express";

export const CardsPage = () => {
  const { contacts, changeContact, removeContact } = useCardProvider()

  async function toggleMarked(id){
    const contact = contacts.find(el => el.id === id)
    const upd = await request(`/api/contacts/${id}`, 'PUT', {
      ...contact,
      marked: true
    })
    contact.marked = upd.marked
    changeContact(contact)
  }

  if (contacts.length === 0) {
    return (
      <h2 style={{textAlign: 'center'}}>На этом месте скоро что-то будет</h2>
    )
  }

  const items = contacts.map((el, index) => {
    return (
      <div className="card mb-3" key={index}>
        <div className="card-body">
          <h5 style={{color: el.marked ? 'red' : 'black'}} className="card-title">{el.name}</h5>
          <p className="card-text">{el.value}</p>
          <button
            onClick={() => {toggleMarked(el.id)}}
            className="btn btn-primary"
            disabled={el.marked ? "enable" : ""}
          >Отметить</button>
          <button onClick={() => removeContact(el.id)} className="btn btn-danger">Удалить</button>
        </div>
      </div>
    )
  })

  return (
    <div>
      { items }
    </div>
  )
}