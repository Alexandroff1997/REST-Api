import React from 'react'
import {useCardProvider} from "../App"

export const CardsPage = () => {
  const { contacts } = useCardProvider()

  function toggleMarked(id) {
    contacts.forEach(el => el.id === id ? el.marked = true : el.marked)
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
          <button onClick={() => {toggleMarked(el.id)}} className="btn btn-primary">Отметить</button>
          <button className="btn btn-danger">Удалить</button>
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