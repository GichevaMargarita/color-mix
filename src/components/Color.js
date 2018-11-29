import React from 'react';
import './Color.scss'
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

class Color extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            color: {
                alpha: 100,
                color: "#fff"
            }
        }
    }

    handleChange(color) {
        this.setState({color: color});
        this.props.handleColorChange(color);
    }

    render() {
        return (
            <div className='color'>
                <ColorPicker
                    defaultColor={this.state.color.color}
                    onChange={this.handleChange.bind(this)}/>
                <div className='code'>{this.state.color.color}</div>
            </div>
        );
    }
}

export default Color;