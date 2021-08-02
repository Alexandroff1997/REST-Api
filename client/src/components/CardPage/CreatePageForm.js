import React from 'react'
import {useCardProvider} from "../AppContext/AppCardContext"

export const CreatePageForm = () => {
  const { form, changeHandler, createContact, block } = useCardProvider()

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>REST Api</h1>

      <form className="form-inline mb-3" onSubmit={createContact}>
        <div className="form-group mr-5">
          <label htmlFor="name" className="mr-3">Имя</label>
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name} />
        </div>
        <div>
          <label htmlFor="value" className="mr-3">Значение</label>
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
            id="value"
            name="value"
            value={form.value} />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!block}
        >Создать</button>
      </form>
    </div>
  )
}