import { Route, BrowserRouter } from 'react-router-dom';
import Store from './components/Store'
import Sobre from './components/Sobre'
import FaleConosco from './components/FaleConosco'
import Header from './components/Header'
import Footer from './components/Footer'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/" exact component={Store}/>
      <Route path="/sobre" component={Sobre}/>
      <Route path="/fale-conosco" component={FaleConosco}/>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;