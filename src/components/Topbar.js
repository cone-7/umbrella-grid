import React from 'react';
import '../styles/main.css'
import Cart from './Cart'

class Topbar extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    getTotalItems(items){
        const values =  Object.values(items)
        return values.reduce((acc, act) => {
            return acc + act.sum
        },0)
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
    const number = this.getTotalItems(this.props.cartItems)
    return (
        <div>
            <span>Umbrella</span>
            <div className='cart-section' onClick={this.toggle}>
                <div className='cart-symbol'></div>
                Cart <Cart isOpen={this.state.isOpen} toggle={this.toggle} cartItems={this.props.cartItems}></Cart>
                {number > 1 ? number + ' items': number + ' item'}
            </div>
        </div>
    );
    }
}

export default Topbar;
