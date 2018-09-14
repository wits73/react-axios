import React, { Component } from 'react';
import { IdWrapper, SearchForm, Result, Header} from '../../components/comId';
import * as service from '../../services/idSearch';

class IdContainer extends Component {
    
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            fetching: false, // tells whether the request is waiting for response or not
            result: [{
                pidm: null,
                ksuid: null,
                netid: null,
                name: null,
            }],
            warningVisibility: false
        };
    }
    /*
    componentDidMount() {
        this.fetchIdsInfo(1);
    }
    */
    fetchIdsInfo = async (target, keyword) => {
        this.setState({
            fetching: true // requesting..
        });

        try {
            // wait for promises
            const info = await Promise.all([
                service.getResult(target, keyword),
            ]);

            console.log(info);
            // Object destructuring Syntax,
            // takes out required values and create references to them
            const { pidm, ksuid, netid, name } = info[0].data[0];

            this.setState({
                result: {
                    pidm,
                    ksuid,
                    netid,
                    name
                },
                fetching: false // done!
            });
            console.log(this.state.result);
        } catch (e) {
            // if err, stop at this point
            this.setState({
                fetching: false
            });
            console.log('error occurred', e);
            //this.showWarning();
        }
    }

    
    
    handleCreate = (data) => {
        //console.log(data.ids);
        this.fetchIdsInfo(data.ids, data.keyword);
    }
    
    render() {
        const { information } = this.state;
        return (
            <IdWrapper>
                <Header/>
                <SearchForm onCreate={this.handleCreate}/>
                <Result result={this.state.result}/>
                {JSON.stringify(this.state.result)}
            </IdWrapper>
        );
    }
}

export default IdContainer;