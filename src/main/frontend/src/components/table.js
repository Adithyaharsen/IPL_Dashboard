import { React } from 'react';
import { Link } from 'react-router-dom';
import './table.scss'

export const IPLPT = ({row}) =>{
	const lr = `/teams/${row.name}`;
  	return (
    	<div className='row'>
    		<div className='position'>
    			<h3>{row.iplrank}</h3>
    		</div>
    		<div className='names'>
    			<Link to={lr}><h3>{row.name}</h3></Link>
    		</div>
    		<div className='matchesplayed'>
    			<h3>{row.matchesplayed}</h3>
    		</div>
    		<div className='matcheswon'>
    			<h3>{row.matcheswon}</h3>
    		</div>
    		<div className='matcheslost'>
    			<h3>{row.matcheslost}</h3>
    		</div>
    		<div className='draw'>
    			<h3>{row.noresult}</h3>
    		</div>
    		<div className='tpoints'>
    			<h3>{row.points}</h3>
    		</div>
    		<div className='nrr'>
    			<h3>{row.nrr}</h3>
    		</div>	
       	</div>
  	);
}
