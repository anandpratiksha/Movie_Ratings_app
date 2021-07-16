import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './component/Header'
import BottomNavigation from './component/MainNav'
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'
import { Container } from '@material-ui/core'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <BottomNavigation />
    </BrowserRouter>
  );
}

export default App;
