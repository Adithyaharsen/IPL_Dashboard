import { React } from 'react';
import { Link } from 'react-router-dom';
import './matchsmallcard.scss'

export const MatchSmallCard = ({teamName, match}) =>{
	const otherTeam = match.team1 === teamName ? match.team2 : match.team1; 
	const resultmargin = match.win_by_runs === 0 ? match.win_by_wickets : match.win_by_runs;
	const result = match.win_by_runs === 0 ? 'wickets' : 'runs';
	const otherteamroute = `/teams/${otherTeam}`;
	const ismatchwon = match.winner === teamName;
  	return (
    	<div className={ismatchwon ? 'MatchSmallWonCard' : 'MatchSmallLostCard'}>
			<h3 className='vs1'>vs</h3>
    		<h1>
    			<Link to={otherteamroute}> {otherTeam} </Link>
    		</h1>
    		<br></br>
    		<p className='mwinner'>{ match.winner } won by { resultmargin } { result } </p>	
    	</div>
  );
}
