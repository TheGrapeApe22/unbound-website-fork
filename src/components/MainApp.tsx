"use client";

import { useCallback, useState, useEffect } from "react";

type PageId = "home" | "about" | "programs" | "impact" | "contact" | "signup";

const navItems: { id: PageId; label: string }[] = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "programs", label: "Programs" },
	{ id: "impact", label: "Impact" },
	{ id: "contact", label: "Contact" },
	{ id: "signup", label: "Sign Up" },
];

export default function MainApp({ initialPage = "home" }: { initialPage?: PageId }) {
	const [activePage, setActivePage] = useState<PageId>(initialPage);

	const handleNav = useCallback((pageId: PageId) => {
		setActivePage(pageId);
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			if (pageId === "signup") {
				window.history.pushState(null, "", "/signup");
			} else {
				window.history.pushState(null, "", "/");
			}
		}
	}, []);

	// Handle browser back/forward buttons
	useEffect(() => {
		const handlePopState = () => {
			if (window.location.pathname === "/signup") {
				setActivePage("signup");
			} else if (window.location.pathname === "/") {
				setActivePage("home");
			}
		};
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, []);

	return (
		<>
			<nav className="nav">
				<div className="container nav-inner">
					<a
						href="/"
						className="brand"
						onClick={(event) => {
							event.preventDefault();
							handleNav("home");
						}}
					>
						<img
							src="/logo-wide.png"
							alt="UNBOUND"
							className="brand-logo"
						/>
					</a>
					<div className="nav-links">
						{navItems.map((item) => (
							<button
								key={item.id}
								type="button"
								className={`nav-btn ${
									activePage === item.id ? "active" : ""
								}`}
								onClick={() => handleNav(item.id)}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>
			</nav>

			<main>
				<section
					id="home"
					className={`page ${activePage === "home" ? "active" : ""}`}
				>
					<div className="container hero">
						<div className="hero-grid">
							<div>
								<div className="pill">
									Drone Education &bull; Robotics &bull; Access &bull; Community
								</div>
								<h1>UNBOUND</h1>
								<p>
									UNBOUND is an organization built to make drone education
									accessible in San Jose. The goal is to create a place
									where students and beginners can explore drones as a real
									form of robotics through coaching sessions, hands-on builds,
									and flight experiences that feel exciting, creative, and
									meaningful.
								</p>
								<p>
									From learning with DJI Tello to understanding hardware
									connections in FPV drones, and from coding to outreach for
									children who are stuck indoors because of medical
									conditions, UNBOUND is about helping people experience
									curiosity, freedom, and engineering in a way that feels real.
								</p>
								<div className="cta-row">
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => handleNav("programs")}
									>
										Explore programs
									</button>
									<button
										type="button"
										className="btn btn-secondary"
										onClick={() => handleNav("about")}
									>
										Learn more
									</button>
								</div>
							</div>

							<div className="card hero-card">
								<div>
									<div className="mini-label">Vision</div>
									<h3>Give more people access to the world of drones.</h3>
									<p>
										In a place with so much technology, drone education should
										not feel rare or out of reach. UNBOUND exists to turn
										interest into opportunity.
									</p>
								</div>
								<div className="drone-visual" aria-hidden="true">
									<div className="circle one"></div>
									<div className="circle two"></div>
									<div className="circle three"></div>
									<div className="core">FLY</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container section">
						<div className="section-head">
							<h2>What makes UNBOUND different</h2>
							<p>
								This is not a general STEM club and not a sports
								organization. It is centered specifically on drones, flight,
								robotics, and the freedom those experiences can create.
							</p>
						</div>
						<div className="grid-3">
							<div className="feature">
								<h3>Drone-first learning</h3>
								<p>
									Focused specifically on drones rather than broad engineering
									topics, so students can go deeper into flight systems,
									controls, and real-world applications.
								</p>
							</div>
							<div className="feature">
								<h3>Hands-on building</h3>
								<p>
									Students do not just watch demonstrations. They learn
									through hardware connections, components, setup, and
									practical problem-solving.
								</p>
							</div>
							<div className="feature">
								<h3>Freedom and inspiration</h3>
								<p>
									UNBOUND also brings drone experiences to children whose
									medical conditions keep them indoors, helping them feel
									wonder, movement, and connection.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					id="about"
					className={`page ${activePage === "about" ? "active" : ""}`}
				>
					<div className="container section">
						<div className="section-head">
							<h2>About UNBOUND</h2>
							<div className="section-copy">
								<p>
									UNBOUND started from a simple realization: despite being in
									the heart of Silicon Valley, there are very few accessible
									opportunities for students to learn about drones in a
									structured, hands-on way.
								</p>
								<p>
									Drones combine hardware, software, control systems, and
									creativity, but for many people, getting started feels
									unclear or inaccessible.
								</p>
								<p>UNBOUND was created to change that.</p>
								<p>
									At the same time, drones represent something more than
									technology. They represent movement, perspective, and
									freedom. That is why UNBOUND also focuses on outreach for
									children who are often confined indoors due to medical
									conditions, helping them experience flight in a way that
									feels real and meaningful.
								</p>
							</div>
						</div>

						<div className="grid-2">
							<div className="impact-card">
								<div className="mini-label">Mission</div>
								<h3>Make drone education more available.</h3>
								<p>
									UNBOUND helps beginners learn what drones really are: not
									just gadgets, but systems that combine hardware, software,
									control, design, and creativity.
								</p>
							</div>
							<div className="impact-card">
								<div className="mini-label">Why the name fits</div>
								<h3>"Unbound" means not limited.</h3>
								<p>
									Drones represent motion, perspective, exploration, and
									freedom. The name reflects both the literal feeling of
									flight and the idea of opening up opportunities that people
									may not otherwise have.
								</p>
							</div>
						</div>

						<div className="impact-card" style={{ marginTop: 18 }}>
							<div className="mini-label">Core idea</div>
							<h3>Engineering that feels alive</h3>
							<p>
								UNBOUND is meant to make robotics feel tangible. Instead of
								only learning abstract concepts, students can connect them
								to something they can build, fly, debug, and understand.
								That makes learning more memorable and more empowering.
							</p>
						</div>
					</div>
				</section>

				<section
					id="programs"
					className={`page ${activePage === "programs" ? "active" : ""}`}
				>
					<div className="container section">
						<div className="section-head">
							<h2>Programs</h2>
							<p>
								UNBOUND can grow through several kinds of sessions, each
								designed to make drones approachable for different ages and
								experience levels.
							</p>
						</div>
						<div className="grid-2">
							<div className="program">
								<div className="mini-label">01</div>
								<h3>Drone Hackathons</h3>
								<p>
									Competitive drone hackathons where participants design and
									code flight solutions for obstacle-based challenges. Teams
									apply programming, problem-solving, and real-time debugging
									skills, with awards recognizing innovation, efficiency,
									and performance.
								</p>
							</div>
							<div className="program">
								<div className="mini-label">02</div>
								<h3>DJI Tello Coaching Sessions</h3>
								<p>
									Beginner-friendly sessions focused on programming DJI Tello
									drones. Students learn to write code to control takeoff,
									landing, movement, and basic flight patterns, while building
									foundational skills in logic, sequencing, and real-time
									control through hands-on challenges.
								</p>
							</div>
							<div className="program">
								<div className="mini-label">03</div>
								<h3>Intro to Drone Robotics</h3>
								<p>
									Sessions introducing how drones connect to robotics concepts
									such as sensors, motors, control systems, stability, and
									communication.
								</p>
								<p>
									Additional workshops focus on FPV drone structure, hardware
									connections, components, and how a drone comes together as a
									complete system.
								</p>
							</div>
							<div className="program">
								<div className="mini-label">04</div>
								<h3>UNBOUND Outreach</h3>
								<p>
									Outreach sessions are designed for patients, especially
									children, who may not be able to go outside. Using drones
									near windows or open spaces, participants can control flight
									and explore the outside world in a safe, guided way, turning
									coding into a tool for curiosity, movement, and connection
									beyond their immediate environment.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					id="impact"
					className={`page ${activePage === "impact" ? "active" : ""}`}
				>
					<div className="container section">
						<div className="section-head">
							<h2>Impact</h2>
							<p>
								UNBOUND is not only about technical knowledge. It is also
								about the feeling of possibility that drones can create.
							</p>
						</div>
						<div className="grid-2">
							<div className="impact-card">
								<div className="mini-label">Community</div>
								<h3>Build a drone learning community in San Jose</h3>
								<div className="list">
									<div className="list-item">
										Create a visible local space for drone curiosity and
										beginner learning.
									</div>
									<div className="list-item">
										Help students see drones as a real path into robotics and
										engineering.
									</div>
									<div className="list-item">
										Lower the barrier to entry for people who do not know where
										to start.
									</div>
								</div>
							</div>
							<div className="impact-card">
								<div className="mini-label">Outreach</div>
								<h3>Bring the feeling of flight to kids indoors</h3>
								<div className="list">
									<div className="list-item">
										Design sessions for children with medical conditions who are
										often stuck inside.
									</div>
									<div className="list-item">
										Use drone experiences to create joy, exploration, and a
										sense of freedom.
									</div>
									<div className="list-item">
										Show that engineering can also be compassionate and
										human-centered.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="contact"
					className={`page ${activePage === "contact" ? "active" : ""}`}
				>
					<div className="container section">
						<div className="contact-card">
							<div className="mini-label">Get involved</div>
							<h2>Help build UNBOUND</h2>
							<p>
								UNBOUND is looking for students, mentors, educators,
								community partners, and supporters who want to help expand
								drone education and create meaningful outreach experiences.
							</p>
							<div
								className="cta-row"
								style={{ justifyContent: "center", marginTop: 24 }}
							>
								<a className="btn btn-primary" href="mailto:unbounddrones@gmail.com">
									Email us
								</a>
								<a
									className="btn btn-secondary"
									href="https://www.instagram.com/unbounddrones"
									target="_blank"
									rel="noopener noreferrer"
								>
									Instagram
								</a>
							</div>
						</div>
					</div>
				</section>

				<section
					id="signup"
					className={`page ${activePage === "signup" ? "active" : ""}`}
				>
					<div className="container section">
						<div className="section-head" style={{ textAlign: "center" }} >
							<h1>Turn your curiosity into flight.</h1>
							<br/>
							<p style={{ marginBottom: "1.5rem", maxWidth: "none" }}>
								Join UNBOUND to learn programming, robotics, and problem-solving.
							</p>
							<a href="#signup-form" className="btn btn-primary" style={{ display: "inline-block", padding: "10px 24px", fontSize: "1.1rem" }}>
								Sign Up Now
							</a>
						</div>

						{/* 2. Flyer */}
						<div style={{ textAlign: "center" }}>
							<img 
								src="/unbound-advert.png" 
								alt="UNBOUND Event Flyer" 
								style={{ maxHeight: "60vh", borderRadius: "16px", maxWidth: "100%", height: "auto" }} 
							/>
						</div>

						{/* 3. Curriculum / Program Details */}
						<div className="section-head" style={{ marginTop: "5rem" }}>
							<h2>Curriculum Overview</h2>
							<p>Here is what we'll cover in the sessions:</p>
						</div>
						<div className="program" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
							<div style={{ marginBottom: "2rem" }}>
								<div className="mini-label">Sessions 1 & 2</div>
								<h3>Hardware Basics & First Flights</h3>
								<p>
									Understand the physical principles of flight and drone hardware. Start with visual block-based coding, then transition to Python to program your first autonomous flight maneuvers like takeoff, landing, and basic shapes.
								</p>
							</div>
							<div style={{ marginBottom: "2rem" }}>
								<div className="mini-label">Session 3</div>
								<h3>Advanced Flight Logic</h3>
								<p>
									Dive deeper into Python programming. Learn how to use variables, loops, functions, and conditional statements to create complex, continuous flight patterns.
								</p>
							</div>
							<div style={{ marginBottom: "2rem" }}>
								<div className="mini-label">Sessions 4 & 5</div>
								<h3>Simulations, Sensors & Vision</h3>
								<p>
									Test code in a safe virtual environment before flying real drones. Then, explore how drones "see" the world by tapping into camera feeds and sensors like gyroscopes to solve basic visual tasks and avoid obstacles.
								</p>
							</div>
							<div>
								<div className="mini-label">Session 6 & Hackathon</div>
								<h3>The Final Challenge</h3>
								<p>
									Put everything together in a thrilling 6-hour hackathon. Work as a team to solve real-world drone programming challenges and show off your autonomous flight skills along with everything you've learned.
								</p>
							</div>
						</div>

						{/* 4. Quick FAQ */}
						<div className="section-head" style={{ marginTop: "5rem" }}>
							<h2>Frequently Asked Questions</h2>
						</div>
						<div className="grid-2">
							<div className="impact-card">
								<h3>What makes this different from a typical coding class?</h3>
								<p>From your first lines of code, you'll be flying a drone and seeing it directly in action. You'll learn the most practical aspects through engineering challenges and autonomous flight.</p>
							</div>
							<div className="impact-card">
								<h3>Is there a cost to participate?</h3>
								<p>We do not impose any fees, but we request a donation of $60 to help cover the costs of the materials and facility over 6 sessions and the hackathon. All donations are greatly appreciated!</p>
							</div>
							<div className="impact-card">
								<h3>Do I need my own drone?</h3>
								<p>No, we provide all the hardware and drones you need for the sessions. All you need is a computer to run your code.</p>
							</div>
							<div className="impact-card">
								<h3>Do I need to know how to code?</h3>
								<p>Not at all! We start from the absolute basics, making it easy for beginners.</p>
							</div>
							<div className="impact-card">
								<h3>What is a hackathon?</h3>
								<p>A hackathon is an event where participants collaborate intensively on software projects. This is where you'll use your skills in the final challenge and an advanced drone flight!</p>
							</div>
							<div className="impact-card">
								<h3>Do rising 6th graders and graduating 8th graders count as grades 6-8?</h3>
								<p>Yes!</p>
							</div>
						</div>

						{/* 5. Signup Form Placeholder */}
						<div id="signup-form" className="section-head" style={{ marginTop: "5rem", textAlign: "center" }}>
							<h2>Secure Your Spot</h2>
							<p style={{ maxWidth: "none" }}>Complete the form below to register.</p>
						</div>
						
						<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdzf3kGXQEGTk1H_xYVZ2MfKU4ykmw7PgY6oANvxIqbaZZxxA/viewform?embedded=true" width="100%" height="1000" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
					</div>
				</section>
			</main>

			<footer>
				<div className="container footer-row">
					<div>&copy; 2026 UNBOUND</div>
					<div>Drone education, access, and freedom.</div>
				</div>
			</footer>
		</>
	);
}
