import React, { Component } from 'react';
import { IdWrapper, SearchForm, Result, Header} from '../../components/comId'

class IdContainer extends Component {
    render() {
        return (
            <IdWrapper>
                <Header/>
                <SearchForm/>
                <Result/>
            </IdWrapper>
        );
    }
}

export default IdContainer;