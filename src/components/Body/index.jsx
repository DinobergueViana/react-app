import { Route, BrowserRouter } from 'react-router-dom';
import Store from '../Store'
import Sobre from '../Sobre'
import FaleConosco from '..FaleConosco/FaleConosco'
import Header from '../Header'
import Footer from '../Footer'

import './Body.css'

const Body = () => {
  return (
    <main>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Store}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/fale-conosco" component={FaleConosco}/>
        <Footer />
      </BrowserRouter>
    </main>
    
  )
}

export default Body