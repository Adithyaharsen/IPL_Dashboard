import { React } from 'react';
import './oarecord.scss'

export const OAREC = ({row}) =>{

	if(row.player2)
	{	
	  	return (
	    	<div className='row2'>
	    		<div className='slno'>
	    			<h3>{row.slno}</h3>
	    		</div>
	    		<div className='player'>
	    			<h3>{row.player} & { row.player2}</h3>	
	    		</div>
	    		<div className='value'>
	    			<h3>{row.value}</h3>
	    		</div>
	       	</div>
	  	);
  	}		
	else
	{	
	  	return (
	    	<div className='row2'>
	    		<div className='slno'>
	    			<h3>{row.slno}</h3>
	    		</div>
	    		<div className='player'>
	    			<h3>{row.player}</h3>	
	    		</div>
	    		<div className='value'>
	    			<h3>{row.value}</h3>
	    		</div>
	       	</div>
	  	);
  	}
  	
}