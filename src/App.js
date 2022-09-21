import travel_bataan from './images/travelbataan.png';
import are_u_love from './images/ruinlove.png';
function App() {

  return (
    <div className="App">
      <header id="top">
		<a className="icon-border header-title" href="#">TC</a>
		<nav>
			<ul>
				<li>
					<a href="#project" className="link">Projects</a>
				</li>
				<li>
					<a href="#stack" className="link">Tech Stack</a>
				</li>
				<li>
					<a href="#contact" className="link">Contact</a>
				</li>
			</ul>

			<button aria-label="Toggle navbar">
				<i aria-hidden="true" className="icon-normal fas fa-bars" ></i>
			</button>
		</nav>
	</header>
	

	<div className="hero">
		<h1>
			Hi. I am
			<span className="hero-name">Trisha</span>
			<span className="hero-name">Castillo</span>
		</h1>

		<div className="hero-about">
			<p>
				I am a passionate web developer. I enjoy writing code, and building
				website and application. Lorem ipsum dolor sit amet consectetur adipisicing
				 elit. Exercitationem praesentium perspiciatis accusantium tenetur ullam esse 
				 ipsam totam eaque, ipsa sed deleniti porro quo! Commodi labore, 
				  aspernatur numquam quas hic!
			</p>

			<a className="resume" href="">
				<span className="btn">Resume</span>
			</a>
		</div>
	</div>

	<section id="project" className="project">
		<h2 className="section-title">Projects</h2>

		
		<div className="project-container">
			<img src="https://raw.githubusercontent.com/trishacastillo/portfolio/main/src/images/weatherapp.png" alt="weather-app" height="250" width="450"/>

			<div className="project-content">
				<h3>Weather App</h3>
				<p>A simple weather application built using OpenWeatherMap API.</p>

				<ul className="project-skill">
					<li>HTML</li>
					<li>CSS</li>
					<li>React.js</li>
					<li>API</li>

				</ul>

				<ul className="project-link">
					<li>
						<a href="https://github.com/trishacastillo/weatherapp" aria-label="Source code"
							title="source code" rel="noopener"><i className="icon-border fas fa-code"></i></a>
					</li>
					<li>
						<a href="https://trishacastillo.github.io/weatherapp/" aria-label="Preview" 
							title="preview" rel="noopener"><i aria-hidden="true"
								className="icon-border fas fa-external-link-alt"></i></a>
					</li>
				</ul>
			</div>
		</div>

		<div className="project-container">
			<img src={are_u_love} alt="weather-app" height="250" width="450"/>

			<div className="project-content">
				<h3>Are u InLove</h3>
				<p>An entertainment website measuring how in love you are via test questions.</p>

				<ul className="project-skill">
					<li>HTML</li>
					<li>Vanilla CSS</li>
					<li>React.js</li>

				</ul>

				<ul className="project-link">
					<li>
						<a href="https://trishacastillo.github.io/areuinlove" aria-label="Source code"
							title="source code" rel="noopener"><i className="icon-border fas fa-code"></i></a>
					</li>
					<li>
						<a href="https://trishacastillo.github.io/areuinlove/" aria-label="Preview" 
							title="preview" rel="noopener"><i aria-hidden="true"
								className="icon-border fas fa-external-link-alt"></i></a>
					</li>
				</ul>
			</div>	
		</div>

		<div className="project-container">
			<img src={travel_bataan} alt="weather-app" height="250" width="450"/>

			<div className="project-content">
				<h3>Travel Bataan</h3>
				<p>A online reservation system designed for Bataan tourist spots. It was used to book a tour from anywhere in the Philippines using a single dynamic website that will provide the user with all of the information about the sites and tour specifics in one spot. The users can log in and book. The admin can confirm the transaction of the users on the manage booking page by sending them an email indicating that their booking has been approved.</p>

				<ul className="project-skill">
					<li>PHP</li>
					<li>Bootstrap</li>
					<li>Javascript</li>
					<li>SQL Database</li>

				</ul>

				<ul className="project-link">
					<li>
						<a href="https://trishacastillo.github.io/areuinlove" aria-label="Source code"
							title="source code" rel="noopener"><i className="icon-border fas fa-code"></i></a>
					</li>
					<li>
						<a href="https://trishacastillo.github.io/areuinlove/" aria-label="Preview" 
							title="preview" rel="noopener"><i aria-hidden="true"
								className="icon-border fas fa-external-link-alt"></i></a>
					</li>
				</ul>
			</div>	
		</div>

		
	</section>

	<section id="stack" className="stack">
		<h2 className="section-title">Tech Stack</h2>
		<div className="stack-container">
			<div className="tech-container">
				<i className="devicon-html5-plain colored"></i>
				HTML
			</div>
			<div className="tech-container">
				<i className="devicon-css3-plain colored"></i>
				CSS
			</div>
			<div className="tech-container">
				<i className="devicon-javascript-plain colored"></i>
				JavaScript
			</div>
			<div className="tech-container">

				<i className="devicon-php-plain colored"></i>

				Php
			</div>
			<div className="tech-container">
				<i className="devicon-python-plain"></i>
				Python
			</div>
			<div className="tech-container">
				<i className="devicon-react-plain colored"></i>
				React
			</div>
			<div className="tech-container">
				<i className="devicon-bootstrap-plain colored"></i>
				Bootstrap
			</div>
		

			<div className="tech-container">
				
				<i className="devicon-java-plain-wordmark colored"></i>
				
				
				Java
			</div>
			<div className="tech-container">

				<i className="devicon-mysql-plain colored"></i>


				Mysql
			</div>
			


			<div className="tech-container">
            	<i className="devicon-android-plain colored"></i>
				Android
			</div>

		</div>
	</section>

	<section id="contact" className="contact">
		<h2 className="section-title">Get in touch</h2>

		<ul>
			<li>
				<a href="mailto:trishaduzon13@gmail.com">
					<span className="btn">
						<i aria-hidden="true" className="fas icon fa-envelope"></i>Email
					</span>
				</a>
			</li>

			<li>
				<a href="https://github.com/trishacastillo" aria-label="Github">
					<span className="btn">
						<i aria-hidden="true" className="fab icon fa-github"></i>
						Github
					</span>
				</a>
			</li>

			<li>
				<a href="https://www.linkedin.com/in/trishacastillo" aria-label="Linkedin">
					<span className="btn">
						<i aria-hidden="true" className="fab icon fa-linkedin"></i>
						Linkedin
					</span>
				</a>
			</li>
		</ul>
	</section>

	<footer>
		<small>Made with 💛 by Trisha Castillo v2022</small>
	</footer>

	<div className="scroll-container">
		<div aria-label="Scroll up" className="scroll-up">
			<a href="#top">
				<i aria-hidden="true" className="fas fa-arrow-up"></i>
			</a>
		</div>
	</div>
	</div>
  );
}
export default App;