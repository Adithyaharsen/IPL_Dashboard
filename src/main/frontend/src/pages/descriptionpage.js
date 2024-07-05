import './descriptionpage.scss'
import photo from '../images/myphoto.jpg'
import { Link } from 'react-router-dom';
import { React } from 'react'; 

export const Description = () =>{
 	const Back = `/`;
  	return (
		<div className='des'>
			<div className='title2'>
				<div className='container'>
					<Link to={Back}><button className='back5'>IPL - Dashboard</button></Link>
				</div>
				<h1 className='t2'>Project Builder</h1>
			</div>
			<div className='d1'>
				<div className='dl1'><h3>Name :</h3></div>
				<div className='dd1'><h3>R.V.Adithya Harsen</h3></div>
				<div className='dl2'><h3>Role :</h3></div>
				<div className='dd2'><h3>Full-Stack Developer</h3></div>
				<div className='dl3'><h3>Degree :</h3></div>
				<div className='dd3'><h3>B.Tech Computer Science & Engineering</h3></div>
				<div className='dl4'><h3>Institute :</h3></div>
				<div className='dd4'><h3>SASTRA Deemed University</h3></div>
				<div className='dl5'><h3>Contact no :</h3></div>
				<div className='dd5'><h3>9486043779</h3></div>
				<div className='dl6'><h3>E-mail :</h3></div>
				<div className='dd6'><h3>harsenadithya@gmail.com</h3></div>
			</div>
			<div className='d2'>
				<img className='img' src={photo} alt="Photo" />
			</div>
			<div className='projectdes'>
				<p>To know more about this project your looking at please visit the <Link to='/about'><strong>About</strong></Link> page.</p>
			</div>
		</div>
	);
}
