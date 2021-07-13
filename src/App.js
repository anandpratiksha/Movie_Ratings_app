import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header'
import BottomNavigation from './component/MainNav'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <div>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </div>
      <BottomNavigation />
    </BrowserRouter>
  );
}

export default App;
