import { Link } from 'react-router-dom';
import { React } from 'react';
import './aboutpage.scss'

export const About = () =>{
 	const Back = `/`;
  	return (
		<div className='about'>
			<div className='title3'>
				<div className='container'>
					<Link to={Back}><button className='back6'>IPL - Dashboard</button></Link>
				</div>
				<h1>About</h1>
			</div>
			<div className='details'>
				<p className='t'>Project Title:{'\t\t'}<strong className='blue1'>IPL - Dashboard</strong></p>
				<p><br /><h3 className='blue'>Objective:</h3><br />To develop a comprehensive IPL(Indian Premier League) Dashboard that streamlines <strong className='blue'>IPL data from 2008-2023</strong> in the basis of Points-Table , Teams , Matches , Records , e.t.c.., . To provide the <strong className='blue'>live match details</strong> of ongoing matches in IPL.<br /><br /><br /><h3 className='blue'>Key Features</h3><br /><strong className='blue'>1. Live Stream</strong><br />Provides the user with the information of <strong className='blue'>ongoing IPL matches</strong><br /><strong className='blue'>2. Team - Dashboard</strong><br />Provides the user with the information of each team through the <strong className='blue'>Team-Page</strong> assigned seperately for every team that exsisted or exsisting in IPL<br />Each teampage gives the user the information about their latest matches.<br />You can also navigate to the <strong className='blue'>Match-Page</strong> where all matches played by that particular team is classified by the season<br /><strong className='blue'>3. Matches</strong><br />Provides the user with a briefly detailed report on all matches classified by the season<br /><strong className='blue'>4. Points Table</strong><br />Provides the user with the final points-table data of IPL after the end of League Stage season-wise<br /><strong className='blue'>5. Records</strong><br />Provides the user with the data on all current records of IPL and it's current holder(s)<br /><br /><br /><h3 className='blue'>Technology Stack</h3><br /><strong className='blue'>1. Frontend</strong><br /><strong className='white'>Framework:</strong>React<br /><strong className='white'>Libraries:</strong>REST for API calls , Spring StateMachine for state management<br /><strong className='white'>Styling:</strong>SASS for for responsive design<br /><strong className='blue'>2. Backend</strong><br /><strong className='white'>Framework:</strong>	Spring Boot with Maven<br /><strong className='white'>Database:</strong>MySQL for storing patient records and appointment data<br /><strong className='white'>Authentication:</strong>JWT (JSON Web Tokens) for secure authentication<br /><strong className='blue'>3. DevOps</strong><br /><strong className='white'>Version Control:</strong>Git with GitHub for source code management<br /><strong className='white'>CI/CD:</strong>GitHub Actions for automated testing and deployment<br /><strong className='white'>Hosting:</strong>AWS (Amazon Web Services) with Docker for containerization<br /><br /><br /><h3 className='blue'>Conclusion:</h3><br />The <strong className='blue'>IPL - Dashboard</strong> aims to revolutionize the present Data Analysis of IPL by providing an integrated platform that enhances the viewing of Points-Table , Teams , Matches , Records , e.t.c.., & live match data . Utilizing modern web technologies and best practices in software development, the IPL_Dashboard project is poised to deliver a robust, scalable, and secure platform for data analysis of previous matches and strategising for the future matches .</p>
			</div>
			<div className='despage'>
				<p>For any discrepancy/suggetion on this project or to place any Full-Stack Developement order please contact the Project Builder through 'Whatsapp / Mail'.<br />Contact info available at <Link to='/description'><strong>Project Builders Description</strong></Link> page.</p>
			</div>
		</div>
	);
}