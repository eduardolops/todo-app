import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import Form from './form'
import List from './list'

const URL = 'http://127.0.0.1:3003/api/todo/'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
             .then( resp => this.setState({...this.state, description: '', list: resp.data}) )
    }

    handleChange(e){
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description})
             .then( resp => this.refresh() )
    }
    
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <Form handleAdd={this.handleAdd}
                      handleChange={this.handleChange}
                      description={this.state.description}/>
                <List />
            </div>
        )
    }

}