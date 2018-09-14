import React, { Component } from 'react';
import './Result.css';


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            animate: false,
            direction: 'left'
        }
    }

    
    render() {
        const  resultList = this.props.result;
        console.log(resultList.length);
        const { animate, direction } = this.state;

        return (
            <table className="ui celled table">
                <thead>
                    <tr><th>PIDM</th>
                        <th>KSUID</th>
                        <th>NETID</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {resultList.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.pidm}</td>
                            <td>{item.ksuid}</td>
                            <td>{item.netid}</td>
                            <td>{item.name}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        );
    }
}

export default Result;