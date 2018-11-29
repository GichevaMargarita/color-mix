import React from 'react';
import './Color.scss'
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

class ColorWall extends React.Component {
    handleChange(color) {
        this.props.handleColorChange(color);
    }

    render() {
        return (
            <div>
                <ColorPicker
                    defaultColor='#fff'
                    onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

export default ColorWall;