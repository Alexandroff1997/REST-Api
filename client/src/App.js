import React, {Component} from 'react'
import {CreatePageForm} from "./components/CardPage/CreatePageForm"
import {CardsPage} from "./components/CardPage/CardsPage"
import {AppCardContext} from "./components/AppContext/AppCardContext"
import {request} from "./express/express"

export default class App extends Component {

  async componentDidMount() {
    const data = await request('/api/contacts')
    console.log(data)
  }

  render() {
    return (
      <AppCardContext>
        <div>
          <CreatePageForm />
          <CardsPage />
        </div>
      </AppCardContext>
    )
  }
}


