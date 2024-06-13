import { React } from 'react';
import { Link } from 'react-router-dom';
import './matchdetailcard.scss'

export const MatchDetailCard = ({teamName, match}) =>{
	if(!match) return null;
	const otherTeam = match.team1 === teamName ? match.team2 : match.team1; 
	const resultmargin = match.win_by_runs === 0 ? match.win_by_wickets : match.win_by_runs;
	const result = match.win_by_runs === 0 ? 'wickets' : 'runs';
	const otherteamroute = `/teams/${otherTeam}`;
	const ismatchwon = match.winner === teamName;
  	return (
    	<div className={ismatchwon ? 'MatchDetailwon-card' : 'MatchDetaillost-card'}>
    		<h1 className='vs'>vs</h1>
    		<h2 className='pom1'>Player of the Match :</h2>
    		<p className='pom2'>{match.player_of_match}</p>
    		<h1 className='opponent'>
    		<Link to={otherteamroute}> {otherTeam} </Link>
    		</h1>
    		<h2 className='ump11'>Umpire 1 :</h2>
    		<p className='ump12'>{match.umpire1}</p>
    		<h2 className='date'>{ match.date }</h2>
    		<h2 className='ump21'>Umpire 2 :</h2>
    		<p className='ump22'>{match.umpire2}</p>
    		<p className='venue'> at { match.venue }</p>
    		<h2 className='ump31'>3rd Umpire :</h2>
    		<p className='ump32'>{match.umpire3}</p>
    		<p className='toss'>{match.toss_winner} won the toss & decided to {match.toss_decision}</p>
    		<h2 className='result'>{ match.winner } won by { resultmargin } { result } </h2>	
       	</div>
  	);
}
