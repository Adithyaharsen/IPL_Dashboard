import './ptpage.scss';
import { React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { YearSelector1 } from '../selectors/yearselector1'
import { IPLPT } from '../components/table';

export const PTPage = () =>{
	const [pt , setT] = useState([]);
	const { year } = useParams();
 	useEffect(
		() => {
			const fetchrecords = async() => {
				const response = await fetch(`/pointstable/${year}`);
				const data = await response.json();
				setT(data);
			};
			fetchrecords();
		} , [year]
 	);
 	const Back2 = `/`;

  	return (
    	<div className="ptp">
    		<div className='container'>
				<Link to={Back2}><button className='back2'>IPL Dashboard</button></Link>
			</div>
    		<div className='pt-year-section'>
    			<h1 className='pt'>Points Table</h1>
    			<h3 className='y'>{year}</h3>
    		</div>
    		<div className='year-selector1'>
    			<YearSelector1 />
    		</div>
    		<div className='table'>
    			<div className='header'>
    				<div className='position'>
    					<h3>Position</h3>
    				</div>
    				<div className='name'>
    					<h3>Team Name</h3>
    				</div>
    				<div className='matchesplayed'>
    					<h3>Matches</h3>
    				</div>
    				<div className='matcheswon'>
   		 				<h3>Won</h3>
  			  		</div>
  	 		 		<div className='matcheslost'>
   		 				<h3>Lost</h3>
   		 			</div>
   					<div className='draw'>
    					<h3>Other</h3>
    				</div>
    				<div className='tpoints'>
    					<h3>Points</h3>
    				</div>
    				<div className='nrr'>
    					<h3>NRR</h3>
    				</div>
    			</div>
	    		{pt.map(r => <IPLPT row = { r } />)}
			</div>	
    	</div>
  	);
}