import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Route from './Router';
import Header from './componets/partials/Header';
import {Template} from '../src/componets/MainComponents'
import Menu from './componets/partials/Menu'
function App() {
  return (
    <BrowserRouter>
      	<Header/>
      		<Template>
          <Menu />
			  	<Route />
      		</Template>
    </BrowserRouter>
  );
}

export default App;
