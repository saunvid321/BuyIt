import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import CategoryScreen from './screens/CategoryScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/Electronics/' component={CategoryScreen} exact />
          <Route path='/Grocery/' component={CategoryScreen} exact />
          <Route path='/Home/' component={CategoryScreen} exact />
          <Route path='/Fashion/' component={CategoryScreen} exact />
          <Route path='/Category/Beauty/page/:pageNumber' component={CategoryScreen} exact />
          <Route path='/Category/Electronics/page/:pageNumber' component={CategoryScreen} exact />
          <Route path='/Category/Grocery/page/:pageNumber' component={CategoryScreen} exact />
          <Route path='/Category/Home/page/:pageNumber' component={CategoryScreen} exact />
          <Route path='/Category/Fashion/page/:pageNumber' component={CategoryScreen} exact />
          <Route path='/Beauty' component={CategoryScreen} exact />
          <Route path='/admin/Electronics' component={CategoryScreen} exact />
          <Route path='/admin/Beauty' component={CategoryScreen} exact />
          <Route path='/admin/Grocery' component={CategoryScreen} exact />
          <Route path='/admin/Home' component={CategoryScreen} exact />
          <Route path='/admin/Fashion' component={CategoryScreen} exact />
          <Route path='admin/productlist/Fashion' component={CategoryScreen} exact />
          <Route path='admin/productlist/Home' component={CategoryScreen} exact />
          <Route path='admin/productlist/Grocery' component={CategoryScreen} exact />
          <Route path='admin/productlist/Beauty' component={CategoryScreen} exact />
          <Route path='admin/productlist/Electronics' component={CategoryScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
