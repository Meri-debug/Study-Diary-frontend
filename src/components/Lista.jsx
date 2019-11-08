import React, { Component } from 'react'

export default class REST extends Component {
    render() {
        return (
            <ul>
            {this.props.rest.map((topic) => {
                const { title, description, timetomaster, timespent, source, startlearningdate, inprogress } = topic;
                return <li key={topic.id}>{title}, {description}, {timetomaster}, {timespent}, {source}, {startlearningdate}, {inprogress} </li>
            })
            }
        </ul>
        )
    }
}
