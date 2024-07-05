import { React } from 'react';
import './srecord.scss'

export const SREC = ({row}) =>{
  	return (
    	<div className='row1'>
    		<div className='season'>
    			<h3>{row.season}</h3>
    		</div>
    		<div className='winner'>
    			<h3>{row.winner}</h3>
    		</div>
    		<div className='fair_play_award'>
    			<h3>{row.fair_play_award}</h3>
    		</div>
    		<div className='Orange_Cap_P'>
   		 		<h3>{row.Orange_Cap_P}</h3>
  			</div>
  	 		<div className='Orange_Cap'>
   		 		<h3>{row.Orange_Cap}</h3>
   		 	</div>
   			<div className='Purple_Cap_P'>
    			<h3>{row.Purple_Cap_P}</h3>
    		</div>
    		<div className='Purple_Cap'>
    			<h3>{row.Purple_Cap}</h3>
    		</div>
    		<div className='Most_Sixes_P'>
    			<h3>{row.Most_Sixes_P}</h3>
    		</div>
    		<div className='Most_Sixes'>
    			<h3>{row.Most_Sixes}</h3>
    		</div>
    		<div className='H_SR_P'>
    			<h3>{row.H_SR_P}</h3>
    		</div>
    		<div className='H_SR'>
    			<h3>{row.H_SR}</h3>
    		</div>
    		<div className='PoT'>
    			<h3>{row.PoT}</h3>
    		</div>
    		<div className='Emerging_P'>
    			<h3>{row.Emerging_P}</h3>
    		</div>
    		<div className='Best_Catch'>
    			<h3>{row.Best_Catch}</h3>
    		</div>
       	</div>
  	);
}
