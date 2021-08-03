import React, {Component} from 'react'
import {CreatePageForm} from "./components/CardPage/CreatePageForm"
import {CardsPage} from "./components/CardPage/CardsPage"
import {AppCardContext} from "./components/AppContext/AppCardContext"
import {request} from "./express/express"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverData: null,
      isLoading: true
    }
  }

  async componentDidMount() {
    const data = await request('/api/contacts')

    this.setState(() => {
      return {
        serverData: data,
        isLoading: false
      }
    })

  }

  render() {
    if (this.state.isLoading) {
      return <div ><h1 style={{textAlign: 'center'}}>Идет загрузка, подождите</h1></div>
    }

    return (
      <AppCardContext serverData={this.state.serverData}>
        <div>
          <CreatePageForm />
          <CardsPage />
        </div>
      </AppCardContext>
    )
  }
}


