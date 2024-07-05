import { React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/matchdetailcard';
import './MatchPage.scss';
import { YearSelector } from '../selectors/yearselector';
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
  	const scrollhandler = () => {
		window.scrollTo({top: 0 , behavior: "smooth"});
	}
	const [show,setshow] = useState(false);
	useEffect(
		() => {
			const scrolltop = () => {
				if(window.scrollY > 1000)
					setshow(true);
				else
					setshow(false);
			}
			window.addEventListener("scroll",scrolltop);
			return () => {
				window.removeEventListener("scroll",scrolltop);
			}
		},[]
	);
  	return (
    	<div className="TeamPage">
    		<div className='container'>
				<Link to={Back1}><button className='back1'>Team Page</button></Link>
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
			{show &&  <button className='totop' onClick={() => scrollhandler()}> Top </button>}			
    	</div>
  	);
}