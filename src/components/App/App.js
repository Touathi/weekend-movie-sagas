import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import '@fontsource/roboto';


function App() {
  return (
    <div className="App">
      <h1 id='header'>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route exact path='/moviedetails'> 
        {/* Details page */}
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
