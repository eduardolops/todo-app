import React from 'react'

import PageHeader from '../template/pageHeader'
import Form from './form'
import List from './list'

export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <Form/>
        <List />
    </div>
)