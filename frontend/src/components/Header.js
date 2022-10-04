import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  const [category,setCategory]=useState('');

  const handleSelect=(e)=>{
    console.log(e);
    localStorage.setItem('category',e)
  }
  return (
    <header>
      <Navbar className="color-nav" variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BuyIT</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title='Categories' id='cat'>
                <LinkContainer to='Electronics'>
                  <NavDropdown.Item onSelect={handleSelect}>Electronics</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='Beauty'>
                  <NavDropdown.Item onSelect={handleSelect}>Beauty</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='Grocery'>
                  <NavDropdown.Item onSelect={handleSelect}>Grocery</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='Home'>
                  <NavDropdown.Item onSelect={handleSelect}>Home</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='Fashion'>
                  <NavDropdown.Item onSelect={handleSelect}>Fashion</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
