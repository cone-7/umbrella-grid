import React from 'react';
import '../styles/main.css'

class Card extends React.Component {

    constructor(props){
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.state = {
            items: {}
        }
    }

    addItem() {
        this.props.addItem({num: this.state.numberOfItems, umbrella: this.props.umbrella})
    }

    handleInput(event){
        this.setState({numberOfItems: parseInt(event.target.value)});
    }

    render(){
        return <div key={this.props.umbrella.tcin} className='card'>
            <img className='card-image' alt={this.props.umbrella.title} src={this.props.umbrella.images[0].base_url+this.props.umbrella.images[0].primary}></img>
            <span className='card-image-title'>
                {this.props.umbrella.title}
            </span>
            <input onChange={this.handleInput} className='inputNumberAdd' type='number'></input>
            <button onClick={this.addItem} className='card-button'>Buy</button>
        </div>
    }
}

export default Card;
