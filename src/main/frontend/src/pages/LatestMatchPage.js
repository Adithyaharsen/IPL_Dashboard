import './LatestMatchPage.scss';
import { React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { YearSelector2 } from '../selectors/yearselector2'
import { MatchCard } from '../components/matchcard'


export const LatestMatchPage = () =>{
	const [matches, setMatches] = useState([]);
	const { year } = useParams();
 	useEffect(
		() => {
			const fetchMatches = async() => {
				const response = await fetch(`/matches/${year}`);
				const data = await response.json();
				setMatches(data);
			};
			fetchMatches();
		} , [year]
  	);
 	const Back3 = `/`;
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
    	<div className="LMP">
    		<div className='container'>
				<Link to={Back3}><button className='back3'>IPL Dashboard</button></Link>
			</div>
    		<div  className='heading'>
	    		<h1> Matches - {year} </h1>
	    	</div>
    		<div className='year-selector3'>
    			<YearSelector2 />
    		</div>
    		<div>
				<div className='allmatches'>
     				{matches.map(match => <MatchCard match={match}/>)}
   				</div>
			</div>
			{show &&  <button className='totop' onClick={() => scrollhandler()}> Top </button>}		
    	</div>
  	);
}