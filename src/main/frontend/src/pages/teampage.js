import './teampage.scss';
import { React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/matchdetailcard';
import { MatchSmallCard } from '../components/matchsmallcard';
import { Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () =>{
	const [team , setTeam] = useState({matches: []});
	const { teamName } = useParams();
 	useEffect(
		() => {
			const fetchMatches = async() => {
				const response = await fetch(`/teams/${teamName}`);
				const data = await response.json();
				setTeam(data);
			};
			fetchMatches();
		} , [teamName]
 	);
 	const Back = `/`;
	const more = `/teams/${teamName}/matches/2023`;
 	if(team==null || team.teamname==null)
 	{
		return <h1>Team not found</h1>
 	}
  	return (
    	<div className="teampage">
    		<div className='back'>
				<h1><Link to={Back}>  {'<'} Dashboard</Link></h1>
			</div>
    		<div className='team-name-section'>
    			<h1 className='teamname'>{team.teamname}</h1>
    			<h3 className='latestmatch'>Latest Match</h3>
    		</div>
    		<div className='win-loss-section'>
    			<h2>Wins/Losses</h2>
    			<PieChart
    				data={[
						{title: 'Losses = '+(team.totalmatches-team.totalwins) , value: team.totalmatches-team.totalwins , color: '#FF0000' },
						{title: 'Wins = '+team.totalwins , value: team.totalwins , color: '#7CFC00' },	
					]} 
    			/>
    			<h2>Win Percent : {((team.totalwins/team.totalmatches)*100).toFixed(2)}  %</h2>
    		</div>
    		<div className='latest-match-section'>
    			<MatchDetailCard teamName = { team.teamname } match={team.matches[0]}/>
    		</div>
    		
   			{team.matches.slice(1).map(match => <MatchSmallCard teamName = { team.teamname } match={match}/>)}
			
			<div className='more-section'>
				<h1><Link to={more}> More  ={'>'} </Link></h1>
			</div>
    	</div>
  	);
}

