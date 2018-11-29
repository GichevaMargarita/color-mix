import React, {Component} from 'react';
import Color from './components/Color';
import Header from './components/Header';
import color from 'color';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstColor: {color: '#fff', alpha: 100},
            secondColor: {color: '#fff', alpha: 100}
        }
    }

    onFirstColorChange = color => {
        this.setState({firstColor: color})
    };

    onSecondColorChange = color => {
        this.setState({secondColor: color});
    };

    render() {
        let firstColor = color(this.state.firstColor.color).alpha(this.state.firstColor.alpha);
        let secondColor = color(this.state.secondColor.color).alpha(this.state.secondColor.alpha);
        let newColor = firstColor.mix(secondColor);
        return (
            <div>
                <Header color={newColor}/>
                <div style={{backgroundImage: 'linear-gradient(to right,' + firstColor + ',' + secondColor + ')'}}
                     className='background'>
                    <Color handleColorChange={this.onFirstColorChange}/>
                    <Color handleColorChange={this.onSecondColorChange}/>
                </div>
            </div>
        );
    }
}

export default App;
