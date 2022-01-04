import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs.js';
import Dog from './views/Dogs/Dog.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <h1>Doggo Emporium</h1>
          <NavLink to="/">view adoptable dogs</NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Dogs} />
          <Route path="/dogs" exact component={Dogs} />
          <Route path="/dogs/:id" component={Dog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
