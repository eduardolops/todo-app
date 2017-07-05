import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import Form from './form'
import List from './list'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(){
        console.log(this)
    }
    
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <Form handleAdd={this.handleAdd}/>
                <List />
            </div>
        )
    }

}