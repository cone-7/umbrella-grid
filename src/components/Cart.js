import React from 'react';
import '../styles/main.css'

class Cart extends React.Component {

    createItems(cartItems){
        if(cartItems.length < 1) return ''
        const items = Object.values(cartItems)
        return items !== undefined ?
            items.map((item) => {
            return <div key={item.umbrella.tcin} className='items-description name-item-cart'>
                <div style={{display:'inline-block', marginRight:'5px'}}>{item.sum}</div>
                <div style={{display:'inline-block'}} className=''>{item.umbrella.title} </div>
            </div>
            }) : ''
    }
    
    render(){
        return this.props.isOpen ? <div className='cart-container'>
            <div className='close-button' onClick={this.props.toggle}>x</div>
            {this.props.cartItems ? this.createItems(this.props.cartItems) : ''}
            <span>Total:</span>
        </div> : ''
    }
}

export default Cart;
