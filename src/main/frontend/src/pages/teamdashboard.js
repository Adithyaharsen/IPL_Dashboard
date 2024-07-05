import './teamdashboard.scss';
import { Link } from 'react-router-dom';
import { React} from 'react';

export const TeamDashBoard = () =>{
 	const Back = `/`;
 
  	return (
    	<div className="team-dash-board">
    		<div className='teamdash'>	
	    		<div className='container'>
					<Link to={Back}><button className='back4'>IPL - Dashboard</button></Link>
				</div>
	    		<div>
	    			<h1 className='title1'>Teams - Dashboard</h1>
	    		</div>
    		</div>
    		<div className='sss'><h1> </h1></div>
    		<div className='container'>
    			<Link to='/teams/Chennai Super Kings'><button className='CSK'>Chennai Super Kings</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Deccan Chargers'><button className='DeC'>Deccan Chargers</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Delhi Capitals'><button className='DC'>Delhi Capitals</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Delhi Daredevils'><button className='DD'>Delhi Daredevils</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Gujarat Lions'><button className='GL'>Gujarat Lions</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Gujarat Titans'><button className='GT'>Gujarat Titans</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Kings XI Punjab'><button className='KXIP'>Kings XI Punjab</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Kochi Tuskers Kerala'><button className='KTK'>Kochi Tuskers Kerala</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Kolkata Knight Riders'><button className='KKR'>Kolkata Knight Riders</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Lucknow Super Giants'><button className='LSG'>Lucknow Super Giants</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Mumbai Indians'><button className='MI'>Mumbai Indians</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Pune Warriors'><button className='PW'>Pune Warriors</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Punjab Kings'><button className='PK'>Punjab Kings</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Rajasthan Royals'><button className='RR'>Rajasthan Royals</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Rising Pune Supergiants'><button className='RPS'>Rising Pune Supergiants</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Royal Challengers Bangalore'><button className='RCB'>Royal Challengers Bangalore</button></Link>
    		</div>
    		<div className='container'>
    			<Link to='/teams/Sunrisers Hyderabad'><button className='SRH'>Sunrisers Hyderebad</button></Link>
    		</div>
    	</div>
  	);
}