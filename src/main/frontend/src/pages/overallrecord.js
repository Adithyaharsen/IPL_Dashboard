import './overallrecord.scss'
import { React , useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { OAREC } from '../components/oarecord'
import { to } from 'react-spring';

export const OverAllRecord = () =>{
	const [rows, setRows] = useState([]);
	const { title } = useParams();
 	useEffect(
		() => {
			const fetchRows = async() => {
				const response = await fetch(`/records/overall/${title}`);
				const data = await response.json();
				setRows(data);
			};
			fetchRows();
		} , [title]
  	);
  	const Back10 = `/records`;
  	
	return(
		<div className='oarecords'>
			<div className='title10'>
	    		<div className='container'>
					<Link to={Back10}><button className='back10'>IPL - Records</button></Link>
				</div>
	    		<h1 className='t10'>Overall Records</h1>
	    	</div>
	    	<div className='s'><h1></h1></div> 
	    	<div className='summa'>
	    		<div className='optiontitle'>
		    		<h2>Choose a Category :</h2>
	        		<ol>
	            		<li><Link to='/records/overall/Catches'>Catches</Link></li>
	            		<li><Link to='/records/overall/Catches_in_an_Innings'>Catches_in_an_Innings</Link></li>
	            		<li><Link to='/records/overall/Dismissals'>Dismissals</Link></li>
	            		<li><Link to='/records/overall/Ducks'>Ducks</Link></li>
	            		<li><Link to='/records/overall/Fifties'>Fifties</Link></li>
	            		<li><Link to='/records/overall/Fours'>Fours</Link></li>
	            		<li><Link to='/records/overall/Highest_Average'>Highest_Average</Link></li>
	            		<li><Link to='/records/overall/Highest_Partnership'>Highest_Partnership</Link></li>
	            		<li><Link to='/records/overall/Highest_Score'>Highest_Score</Link></li>
	            		<li><Link to='/records/overall/Highest_Strikerate'>Highest_Strikerate</Link></li>
	            		<li><Link to='/records/overall/Hundreds'>Hundreds</Link></li>
	            		<li><Link to='/records/overall/Runs'>Runs</Link></li>
	            		<li><Link to='/records/overall/Sixes'>Sixes</Link></li>
	            		<li><Link to='/records/overall/Sixes_in_an_innings'>Sixes_in_an_innings</Link></li>
	            		<li><Link to='/records/overall/Wickets'>Wickets</Link></li>
	       			 </ol>
	    		</div>
		    	<div className='table-container1'>
			    	<div className='header10'>
	    				<div className='slno'>
	    					<h3>Rank</h3>
	    				</div>
	    				<div className='player'>
	    					<h3>Player Name</h3>
	    				</div>
	    				<div className='value'>
	    					<h3>{title}</h3>
	    				</div>
	    			</div>
		    		{rows.map(r => <OAREC row = { r } />)}
			    </div>
			</div>
		</div>
	);
}