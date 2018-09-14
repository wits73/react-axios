import React, { Component } from 'react';
import './Result.css';


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {
                pidm:null,
                ksuid:null,
                netid:null,
                name:null
            },
            animate: false,
            direction: 'left'
        }
    }

    
    render() {
        const { pidm, ksuid, netid, name } = this.props.result;
        console.log(pidm);
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
                    <tr>
                        <td>{pidm}</td>
                        <td>{ksuid}</td>
                        <td>{netid}</td>
                        <td>{name}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Result;