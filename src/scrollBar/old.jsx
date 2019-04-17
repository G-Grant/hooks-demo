import React from 'react';

import LeftContainer from './left/old.jsx';
import RightContainer from './right/old.jsx';

import './index.css';

export default class OldScrollBar extends React.Component{

    constructor(props){
        super(props);
        this.onScroll = this.onScroll.bind(this);
    }

    state = {
        scrollTop: 0
    }

    onScroll = (e)=>{
        this.setState({
            scrollTop: e.target.scrollTop
        })
    }

    render(){
        let { scrollTop } = this.state;
        return(
            <div className="scroll-bar">
                <LeftContainer scrollTop={scrollTop} onScroll={this.onScroll} />
                <RightContainer scrollTop={scrollTop} onScroll={this.onScroll} />
            </div>
        );
    }
}