import './App.scss';
import { TeamPage } from './pages/teampage';
import { MatchPage } from './pages/MatchPage';
import { DashBoard } from './pages/dashboard';
import  {HashRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    	<Router>

    	<Routes>
    		<Route path='/' element={<DashBoard />}></Route>
    		<Route path='/teams' element={<DashBoard />}></Route>
    		<Route path='/teams/:teamName' element={<TeamPage />}></Route>
			<Route path='/teams/:teamName/matches/:year' element={<MatchPage />}></Route>
      	</Routes>
      	</Router>
    </div>
  );
}

export default App;
