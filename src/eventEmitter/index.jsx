import React, { PureComponent } from 'react';

import Old from './old.jsx';
import New from './new.jsx';

import './index.css';

export default class EventEmitter extends PureComponent{

    render(){
        return(
            <div>
                <Old />
                <New />
            </div>
        )
    }
}