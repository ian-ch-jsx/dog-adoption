import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Dogs from './views/Dogs/Dogs.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/">Adoptable Dogs</NavLink>
        <Switch>
          <Route path="/" component={Dogs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
