import React, { Component } from 'react';


class DropDown extends Component {
  constructor(props) {
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

  filterByCategory() {
    
  }


  render() {
    let menu;
    if(this.state.activeMenue) {
      menu =
      <ul className="menu">
          <li className='categories'><button className='category-buttons'>Soups</button></li>
          <li className='categories'><button className='category-buttons'>Desserts</button></li>
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
