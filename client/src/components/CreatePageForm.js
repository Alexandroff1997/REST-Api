import React from 'react'
import {useCardProvider} from "../App"

export const CreatePageForm = () => {
  const { changeHandler, createContact } = useCardProvider()

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>REST Api</h1>

      <form className="form-inline mb-3" onSubmit={createContact}>
        <div className="form-group mr-5">
          <label htmlFor="name" className="mr-3">Имя</label>
          <input onChange={changeHandler} type="text" className="form-control" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="value" className="mr-3">Значение</label>
          <input onChange={changeHandler} type="text" className="form-control" id="value" name="value" />
        </div>
        <button className="btn btn-primary" type="submit">Создать</button>
      </form>
    </div>
  )
}