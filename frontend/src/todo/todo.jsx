import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import Form from './form'
import List from './list'

export default class Todo extends Component {
    
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <Form />
                <List />
            </div>
        )
    }

}