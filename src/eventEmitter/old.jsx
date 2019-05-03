import React, { PureComponent } from 'react';

export default class Old extends PureComponent{

    constructor(props){
        super(props);
        this.emitterNode = React.createRef();
        this.state = { x: 0, y: 0 };
    }

    move = e =>{
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount(){
        this.emitterNode.current.addEventListener('mousemove', this.move)
    }

    componentWillUnmount(){
        this.emitterNode.current.removeEventListener('mousemove', this.move);
    }

    render(){
        let { x, y } = this.state;
        return(
            <div className="event-emitter" ref={this.emitterNode}>
                {`你的鼠标位置${x},${y}`}
            </div>
        )
    }
}