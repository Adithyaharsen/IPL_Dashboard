import './ipldashboard.scss';
import photo2 from '../images/live.png';
import photo3 from '../images/teamdash.png';
import photo4 from '../images/matches.png';
import photo5 from '../images/pointstable.png';
import photo6 from '../images/records.png';
import photo7 from '../images/about.png';
import { Link } from 'react-router-dom';
import { React } from 'react';

export const IPLDashBoard = () =>{
 
  	return (
    	<div className="ipl-dash-board">
    		<div className='s'><h1> </h1></div>
    		<div className='title-card'>
    			<h1 className='title'>IPL - Dashboard</h1>
    			<h3  className='author'><Link to='/description'>-By: R.V.Adithya Harsen</Link></h3>
    		</div>
    		<div className='s'><h1> </h1></div>
    		<div className='s'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/'><button className='live'><img className='img' src={photo2} alt="Photo" /></button></Link>
    			<h3><strong>Live</strong></h3>
    		</div>
    		<div className='s'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/teams'><button className='tdb'><img className='img' src={photo3} alt="Photo" /></button></Link>
    			<h3><strong>Team-dashboard</strong></h3>
    		</div>
    		<div className='s'><h1> </h1></div>
    		<div className='s'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/matches/2023'><button className='m'><img className='img' src={photo4} alt="Photo" /></button></Link>
    			<h3><strong>Matches</strong></h3>
    		</div>
    		<div className='s'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/pointstable/2023'><button className='pt'><img className='img' src={photo5} alt="Photo" /></button></Link>
    			<h3><strong>Points-table</strong></h3>
    		</div>
    		<div className='s'><h1> </h1></div>
    		<div className='s'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/records'><button className='records'><img className='img' src={photo6} alt="Photo" /></button></Link>
    			<h3><strong>Records</strong></h3>
    		</div>
    		<div className='s'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/about'><button className='about1'><img className='img' src={photo7} alt="Photo" /></button></Link>
    			<h3><strong>About</strong></h3>
    		</div>
    	</div>
  	);
}