import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import DogList from './views/Dogs/DogList.js';
import Dog from './views/Dogs/Dog.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <h1>Pet Emporium</h1>
          <NavLink to="/">view adoptable pets</NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={DogList} />
          <Route path="/dogs" exact component={DogList} />
          <Route path="/dogs/:id" component={Dog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
