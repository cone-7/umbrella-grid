import React from 'react';
import '../styles/main.css'
import Grid from './Grid'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

class MainLayout extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      cartItems: []
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(itemToAdd){
    const key = itemToAdd.umbrella.tcin
    const sum = this.state.cartItems[key] !== undefined ? this.state.cartItems[key].sum + itemToAdd.num : itemToAdd.num
    this.setState({
      cartItems: {
        ...this.state.cartItems,
        [key]: {
          sum,
          umbrella: itemToAdd.umbrella
        }
      }
    })
  }

  render(){
    return (
      <div>
          <div className='topbar'>
            <Topbar cartItems={this.state.cartItems}></Topbar>
          </div>
          <div className='sideBar'>
            <Sidebar></Sidebar>
          </div>
          <div className='container'>
            <Grid addItem={this.addItem}></Grid>
          </div>
      </div>
    )
  }
}

export default MainLayout;
