import { React } from 'react';
import { Link } from 'react-router-dom';
import './records.scss';

export const Records = () =>{
	const Back = `/`;
	return(
		<div className='rec'>
			<div className='container'>
				<Link to={Back}><button className='back10'>IPL - Dashboard</button></Link>
			</div>
    		<div className='title-card1'>
    			<h1>IPL-Records</h1>
    		</div>
    		<div className='s'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/records/season'><button className='Season'>Seasonal<br />Records</button></Link>
    		</div>
    		<div className='s'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/records/overall/Runs'><button className='Overall'>Overall<br />Records</button></Link>
    		</div>
		</div>
	);
}