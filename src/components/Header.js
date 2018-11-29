import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='logo' style={{color: this.props.color}}>Mix it up!</div>
            </div>
        );
    }
}

export default Header;