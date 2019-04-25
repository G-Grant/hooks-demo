import React, { PureComponent } from 'react';

export default class Demo extends PureComponent {

    componentDidMount(){
        this.customTextInput.focus()
    }

    render() {
        return <CustomTextInput inputRef={node=>this.customTextInput=node} />;
    }
}

function CustomTextInput(props) {


        return (
            <div>
                <input type="text" ref={props.inputRef} />
            </div>
        );

}
