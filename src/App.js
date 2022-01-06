import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import DogList from './views/Dogs/DogList.js';
import DogEdit from './views/Dogs/DogEdit.js';
import Dog from './views/Dogs/Dog.js';
import Admin from './views/Dogs/Admin.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <h1>Pet Emporium</h1>
          <NavLink to="/">view adoptable pets</NavLink>
          <NavLink to="/admin">admin</NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={DogList} />
          <Route path="/dogs" exact component={DogList} />
          <Route path="/dogs/:id" exact component={Dog} />
          <Route path="/dogs/edit/:id" component={DogEdit} />
          <Route path="/admin" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
