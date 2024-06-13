import { React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/matchdetailcard';
import './MatchPage.scss';
import { YearSelector } from './yearselector';
import { Link } from 'react-router-dom';

export const MatchPage = () =>{
	const [matches, setMatches] = useState([]);
	const { teamName, year } = useParams();
 	useEffect(
		() => {
			const fetchMatches = async() => {
				const response = await fetch(`/teams/${teamName}/matches?year=${year}`);
				const data = await response.json();
				setMatches(data);
			};
			fetchMatches();
		} , [teamName,year]
  	);
  	const Back1 = `/teams/${teamName}`;
  	return (
    	<div className="TeamPage">
    		<div className='back1'>
				<h1><Link to={Back1}>  {'<'} Team Page</Link></h1>
			</div>
    		<div  className='teamname1'>
	    		<h1>{teamName} - {year}</h1>
	    	</div>
    		<div className='year-selector'>
    			<YearSelector teamName = {teamName} />
    		</div>
    		<div>
				{matches==null ? 
					<div className='not-found'><h2>Team not played this year in IPL</h2></div> :
					<div className='matches'>{matches.map(match => <MatchDetailCard teamName = { teamName } match={match}/>)}</div>
				}
			</div>			
    	</div>
  	);
}