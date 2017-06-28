import React, { Component } from 'react';
import recipes from './recipes.js'

class DropDown extends Component {
  constructor(props) {
    console.log(props);
      super(props);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.state = {
        activeMenue: false
      };
    }

  toggleMenu() {
    let menuState = !this.state.activeMenue;
    this.setState({
      activeMenue: menuState
    });
  }



  render() {
    let menu;
    if(this.state.activeMenue) {
      menu =
      <ul className="menu" onClick={(e) => this.props.filterByCategory(e)}>
          <li className='categories'><button className='category-buttons'>Soups</button></li>
          <li className='categories'><button className='category-buttons'>Dessert</button></li>
          <li className='categories'><button className='category-buttons'>Jewish</button></li>
          <li className='categories'><button className='category-buttons'>Fish</button></li>
      </ul>
    } else {
      menu = "";
    }

    return (
      <div>
      <button onClick={this.toggleMenu}>Filter by Category</button>
      {menu}
      </div>
    );
  }
}

export default DropDown;
