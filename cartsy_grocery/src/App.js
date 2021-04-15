import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/app_components/Navbar'
import FixedSidebar from './components/app_components/FixesSidebar'
import Banner from "./components/app_components/Banner";
import Productpage from "./components/app_components/Productpage";
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './components/Redux/Saga/Saga.js'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducer from './components/Redux/Combinereducer/CombineReducer.js'
import SpecificProduct from './components/app_components/SpecificProduct'
import Footer from './components/app_components/Footer'
import SagaTesting from "./components/app_components/SagaTesting";
import Account from './components/app_components/Account'
import Demo from './components/app_components/Demo'

const sagamiddlware=createSagaMiddleware()
const store=createStore(combineReducer,composeWithDevTools(applyMiddleware(sagamiddlware)))
sagamiddlware.run(RootSaga)

function App() {
  return (
    <Provider store={store}>
      <div>
          <Router>
            <div style={{display: 'flex',flexDirection: 'column'}}>
              <Navbar/>
                <Switch> 
                    <Route path="/" exact>
                      <div style={{display:"flex",flexDirection:"row"}}>
                        <FixedSidebar/>
                        <div style={{display:"flex",flexDirection:"column"}}>
                          <Banner/>
                          <Productpage/>
                        </div>
                      </div>
                    </Route>
                    <Route path="/products">
                        <SpecificProduct/>
                    </Route>
                    <Route path="/account" exact>
                      <Account/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
          </Router>
      </div>
    </Provider>
  );
}


export default App;
