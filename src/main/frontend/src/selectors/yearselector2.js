import { React} from 'react';
import { Link } from 'react-router-dom';

export const YearSelector2 = () => {
	return(
		<div>
			<div class="dropdown">
        		<button class="dropdown-toggle">Select a Year</button>
        		<ul class="dropdown-menu">
            		<li class="dropdown-item" data-value="1">
            			<Link to={`/matches/2023`}>2023</Link>
            		</li>
            		<li class="dropdown-item" data-value="2">
            			<Link to={`/matches/2022`}>2022</Link>
            		</li>
            		<li class="dropdown-item" data-value="3">
            			<Link to={`/matches/2021`}>2021</Link>
            		</li>
            		<li class="dropdown-item" data-value="4">
            			<Link to={`/matches/2020`}>2020</Link>
            		</li>
            		<li class="dropdown-item" data-value="5">
            			<Link to={`/matches/2019`}>2019</Link>
            		</li>
            		<li class="dropdown-item" data-value="6">
            			<Link to={`/matches/2018`}>2018</Link>
            		</li>
            		<li class="dropdown-item" data-value="7">
            			<Link to={`/matches/2017`}>2017</Link>
            		</li>
            		<li class="dropdown-item" data-value="8">
            			<Link to={`/matches/2016`}>2016</Link>
            		</li>
            		<li class="dropdown-item" data-value="9">
            			<Link to={`/matches/2015`}>2015</Link>
            		</li>
            		<li class="dropdown-item" data-value="10">
            			<Link to={`/matches/2014`}>2014</Link>
            		</li>
            		<li class="dropdown-item" data-value="11">
            			<Link to={`/matches/2013`}>2013</Link>
            		</li>
            		<li class="dropdown-item" data-value="12">
            			<Link to={`/matches/2012`}>2012</Link>
            		</li>
            		<li class="dropdown-item" data-value="13">
            			<Link to={`/matches/2011`}>2011</Link>
            		</li>
            		<li class="dropdown-item" data-value="14">
            			<Link to={`/matches/2010`}>2010</Link>
            		</li>
            		<li class="dropdown-item" data-value="15">
            			<Link to={`/matches/2009`}>2009</Link>
            		</li>
            		<li class="dropdown-item" data-value="16">
            			<Link to={`/matches/2008`}>2008</Link>
            		</li>
       			 </ul>
   			 </div>
       	</div>
	)
}