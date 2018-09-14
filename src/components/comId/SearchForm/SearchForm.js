import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './SearchForm.css'

class SearchForm extends Component {
    state = {
        ids: 'ksuid',
        keyword: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            ids: '',
        })
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h4 className="ui dividing header">Searching Information</h4>
                <div className="field">
                    <label>Choose Type</label>
                    <div className="three fields">
                        <div className="field">
                            <select className="ui fluid search dropdown" name="ids" 
                                onChange={this.handleChange}>
                                <option value='ksuid'>KSUID</option>
                                <option value='pidm'>PIDM</option>
                                <option value='netid'>NETID</option>
                            </select>
                        </div>
                        <div className="field">
                            <input type="text" name="keyword" placeholder="Input IDs" onChange={this.handleChange} />
                        </div>
                        <div className="field">
                            <button type="submit" className="ui secondary button">
                                Okay
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm;