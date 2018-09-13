import React from 'react';
import { Button } from 'semantic-ui-react';
import './SearchForm.css'

const Navigate = ({ onClick, postId, disabled }) => (
    <form class="ui form">
        <h4 class="ui dividing header">Searching Information</h4>
        <div class="field">
            <label>Choose Type</label>
            <div class="three fields">
                <div class="field">
                    <select class="ui fluid search dropdown" name="card[expire-month]">
                        <option value="">KSUID</option>
                        <option value="">PIDM</option>
                        <option value="">NETID</option>
                    </select>
                </div>
                <div class="field">
                    <input type="text" name="shipping[last-name]" placeholder="Input IDs"/>
                </div>
                <div class="field">
                    <button class="ui secondary button" onClick>
                    Okay
                    </button>
                </div>
            </div>
        </div>
    </form>
            );
            
export default Navigate;