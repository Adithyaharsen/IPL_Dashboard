import './dashboard.scss';
import { Link } from 'react-router-dom';
import { React,useEffect,useState} from 'react';

export const DashBoard = () =>{
	const [teams , setTeams] = useState([]);
 	useEffect(
		() => {
			const fetchAllteams = async() => {
				const response = await fetch(`/teams`);
				const data = await response.json();
				setTeams(data);
			};
			fetchAllteams();
		} , []
 	);
 
  	return (
    	<div className="dash-board">
    		<div className='title-card'>
    			<h1 className='title'>IPL - Dashboard</h1>
    			<h3  className='author'>-By: R.V.Adithya Harsen</h3>
    		</div>
    		<div className='sss'><h1> </h1></div>
    		<div className='CSK'>
    			<Link to='/teams/Chennai Super Kings'><h2>Chennai Super Kings</h2></Link>
    		</div>
    		<div className='DeC'>
    			<Link to='/teams/Deccan Chargers'><h2>Deccan Chargers</h2></Link>
    		</div>
    		<div className='DC'>
    			<Link to='/teams/Delhi Capitals'><h2>Delhi Capitals</h2></Link>
    		</div>
    		<div className='DD'>
    			<Link to='/teams/Delhi Daredevils'><h2>Delhi Daredevils</h2></Link>
    		</div>
    		<div className='GL'>
    			<Link to='/teams/Gujarat Lions'><h2>Gujarat Lions</h2></Link>
    		</div>
    		<div className='GT'>
    			<Link to='/teams/Gujarat Titans'><h2>Gujarat Titans</h2></Link>
    		</div>
    		<div className='KXIP'>
    			<Link to='/teams/Kings XI Punjab'><h2>Kings XI Punjab</h2></Link>
    		</div>
    		<div className='KTK'>
    			<Link to='/teams/Kochi Tuskers Kerala'><h2>Kochi Tuskers Kerala</h2></Link>
    		</div>
    		<div className='KKR'>
    			<Link to='/teams/Kolkata Knight Riders'><h2>Kolkata Knight Riders</h2></Link>
    		</div>
    		<div className='LSG'>
    			<Link to='/teams/Lucknow Super Giants'><h2>Lucknow Super Giants</h2></Link>
    		</div>
    		<div className='MI'>
    			<Link to='/teams/Mumbai Indians'><h2>Mumbai Indians</h2></Link>
    		</div>
    		<div className='PW'>
    			<Link to='/teams/Pune Warriors'><h2>Pune Warriors</h2></Link>
    		</div>
    		<div className='PK'>
    			<Link to='/teams/Punjab Kings'><h2>Punjab Kings</h2></Link>
    		</div>
    		<div className='RR'>
    			<Link to='/teams/Rajasthan Royals'><h2>Rajasthan Royals</h2></Link>
    		</div>
    		<div className='RPS'>
    			<Link to='/teams/Rising Pune Supergiants'><h2>Rising Pune Supergiants</h2></Link>
    		</div>
    		<div className='RCB'>
    			<Link to='/teams/Royal Challengers Bangalore'><h2>Royal Challengers Bangalore</h2></Link>
    		</div>
    		<div className='SRH'>
    			<Link to='/teams/Sunrisers Hyderabad'><h2>Sunrisers Hyderebad</h2></Link>
    		</div>
    	</div>
  	);
}