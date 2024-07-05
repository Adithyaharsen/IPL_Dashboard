import './seasonrecord.scss'
import { React , useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SREC } from '../components/srecord'

export const SeasonRecord = () =>{
	const [srecord , setSRecord] = useState([]);
 	useEffect(
		() => {
			const fetchRecords = async() => {
				const response = await fetch(`/records/season`);
				const data = await response.json();
				setSRecord(data);
			};
			fetchRecords();
		} , []
	);
	const Back = `/records`;

	return (
	    <div className='srecords'>
	    	<div className='title9'>
	    		<div className='container'>
					<Link to={Back}><button className='back9'>IPL - Records</button></Link>
				</div>
	    		<h1 className='t9'>Seasonal Records</h1>
	    	</div>
	    	<div className='ss'><h1> </h1></div>
	    	<div className='table-container'>
		    	<div className='header9'>
    				<div className='season'>
    					<h3>Season</h3>
    				</div>
    				<div className='winner'>
    					<h3>Winner</h3>
    				</div>
    				<div className='fair_play_award'>
    					<h3>Fair Play Award</h3>
    				</div>
    				<div className='Orange_Cap_P'>
   		 				<h3>Orange Cap</h3>
  			  		</div>
  	 		 		<div className='Orange_Cap'>
   		 				<h3>Runs</h3>
   		 			</div>
   					<div className='Purple_Cap_P'>
    					<h3>Purple Cap</h3>
    				</div>
    				<div className='Purple_Cap'>
    					<h3>Wickets</h3>
    				</div>
    				<div className='Most_Sixes_P'>
    					<h3>Most Sixes</h3>
    				</div>
    				<div className='Most_Sixes'>
    					<h3> 6's </h3>
    				</div>
    				<div className='H_SR_P'>
    					<h3>Highest Strike Rate</h3>
    				</div>
    				<div className='H_SR'>
    					<h3> s/r </h3>
    				</div>
    				<div className='PoT'>
    					<h3>Player of the Series</h3>
    				</div>
    				<div className='Emerging_P'>
    					<h3>Emerging Player</h3>
    				</div>
    				<div className='Best_Catch'>
    					<h3>Catch of the Series</h3>
    				</div>
    			</div>
	    		{srecord.map(r => <SREC row = { r } />)}
		    </div>
	  	</div>
	 );
}