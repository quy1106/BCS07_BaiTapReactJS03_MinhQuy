import React, { Component } from 'react'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import Modal from '../Components/Modal';
import { data } from '../Data/DataShoesShop';

export default class HomeShoesShop extends Component {
    constructor(props){
        super(props);
        this.state={
          chooseItem:{}
        }
    }
  render() {
    return (
        <div className="row">
        <nav className="nav col-2 flex-column justify-content-center mt-5 pt-5">
          <NavLink className={({isActive})=>isActive?'nav-link border border-2 border-info-subtle':'nav-link border border-2 border-white'} aria-current="page" to="home" >
            Home
          </NavLink>
          <NavLink className={({isActive})=>isActive?'nav-link border border-2 border-info-subtle':'nav-link border border-2 border-white'} to="shop">
            Shop
          </NavLink>
        </nav>
        <div className="tab-content col-10" id="myTabContent">
          <Routes>
            <Route path="home" element={<ProductList data={data} changeChoose={this.changeChoose}/>}/>
            <Route path="shop" element={<Modal item={this.state.chooseItem}/>}/>
            <Route path="*" element={<Navigate to='home'/>}/>
          </Routes>
        </div>
      </div>
    );
  }
  changeChoose=(item)=>{

    if(item.name){
      this.setState({
        chooseItem:item
      })
    }

  }
}

