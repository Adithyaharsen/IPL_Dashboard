import { React } from 'react';
import { Link } from 'react-router-dom';
import './matchcard.scss'

export const MatchCard = ({match}) =>{
	const resultmargin = match.win_by_runs === 0 ? match.win_by_wickets : match.win_by_runs;
	const result = match.win_by_runs === 0 ? 'wickets' : 'runs';
	const team1route = `/teams/${match.team1}`;
	const team2route = `/teams/${match.team2}`;
  	return (
    	<div className='mcard'>
    		<h1 className='team1'>
    			<Link to={team1route}> {match.team1} <br /> vs </Link>
    		</h1>
    		<h2 className='poml'>Player of the Match :</h2>
    		<p className='pomd'>{match.player_of_match}</p>
    		<h1 className='team2'>
    			<Link to={team2route}> {match.team2} </Link>
    		</h1>
    		<h2 className='ump1l'>Umpire 1 :</h2>
    		<p className='ump1d'>{match.umpire1}</p>
    		<h2 className='mdate'>{ match.date }</h2>
    		<h2 className='ump2l'>Umpire 2 :</h2>
    		<p className='ump2d'>{match.umpire2}</p>
    		<p className='mvenue'> at { match.venue }</p>
    		<h2 className='ump3l'>3rd Umpire :</h2>
    		<p className='ump3d'>{match.umpire3}</p>
    		<p className='mtoss'>{match.toss_winner} won the toss & decided to {match.toss_decision}</p>
    		<h2 className='mresult'>{ match.winner } won by { resultmargin } { result } </h2>	
       	</div>
  	);
}