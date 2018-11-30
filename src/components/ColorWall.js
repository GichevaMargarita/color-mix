import React from 'react';
import './ColorWall.scss';
import './Color.scss';
import color from 'color';

class ColorWall extends React.Component {
    render() {
        return (
            <div className='color'>
                <div className='colorWall' style={{background: this.props.color}}/>
                <div className='code'>{color(this.props.color.color).hex()}</div>
            </div>
        );
    }
}

export default ColorWall;