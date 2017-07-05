import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import Form from './form'
import List from './list'

const URL = 'http://127.0.0.1:3003/api/todo'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkTask = this.handleMarkTask.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
             .then( resp => this.setState({...this.state, description, list: resp.data}) )
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description })
             .then( resp => this.refresh() )
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
             .then( resp => this.refresh(this.state.description) )
    }

    handleMarkTask(todo, task){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: task })
             .then( resp => this.refresh(this.state.description) )
    }
    
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <Form
                      handleAdd={this.handleAdd}
                      handleChange={this.handleChange}
                      handleSearch={this.handleSearch}
                      description={this.state.description}/>
                <List
                      list={this.state.list}
                      handleMarkTask={this.handleMarkTask}
                      handleRemove={this.handleRemove} />
            </div>
        )
    }

}