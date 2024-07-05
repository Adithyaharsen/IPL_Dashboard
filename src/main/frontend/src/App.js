import './App.scss';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TeamPage } from './pages/teampage';
import { MatchPage } from './pages/MatchPage';
import { LatestMatchPage } from './pages/LatestMatchPage';
import { TeamDashBoard } from './pages/teamdashboard';
import { IPLDashBoard } from './pages/ipldashboard';
import { PTPage } from './pages/ptpage';
import { Description } from './pages/descriptionpage';
import { About } from './pages/aboutpage';
import { Records } from './pages/records';
import { OverAllRecord } from './pages/overallrecord';
import { SeasonRecord } from './pages/seasonrecord';

function App() {
  return (
    <div className="App">
    	<Helmet>
    		<title>Adithya's IPL-Dashboard</title></Helmet>
    	<Router>
    	<Routes>
    		<Route path='/' element={<IPLDashBoard />}></Route>
    		<Route path='/about' element={<About />}></Route>
    		<Route path='/records' element={<Records />}></Route>
    		<Route path='/records/season' element={<SeasonRecord />}></Route>
    		<Route path='/records/overall/:title' element={<OverAllRecord />}></Route>
    		<Route path='/description' element={<Description />}></Route>
    		<Route path='/teams' element={<TeamDashBoard />}></Route>
    		<Route path='/pointstable/:year' element={<PTPage />}></Route>
    		<Route path='/matches/:year' element={<LatestMatchPage />}></Route>
    		<Route path='/teams/:teamName' element={<TeamPage />}></Route>
			<Route path='/teams/:teamName/matches/:year' element={<MatchPage />}></Route>
      	</Routes>
      	</Router>
    </div>
  );
}

export default App;