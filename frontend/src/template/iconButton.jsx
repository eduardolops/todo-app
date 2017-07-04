import React from 'react'
import If from './helpers/If'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style} onclick={props.onclick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)
