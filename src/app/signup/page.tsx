import Link from "next/link";
import React from "react";

export default function SignupPage() {
	return (
		<>
			<main className="page active">
				<div className="container nav-inner">
					<Link href="/" className="brand">
						<img
							src="/logo-wide.png"
							alt="UNBOUND"
							className="brand-logo"
						/>
					</Link>
					<div className="nav-links">
						<Link href="/" className="nav-btn">
							Back to Home
						</Link>
					</div>
				</div>
				<section className="container section">
					<div className="section-head" style={{ textAlign: "center" }} >
						<h1>Turn your curiosity into flight.</h1>
						<br/>
                        <p style={{ marginBottom: "1.5rem", maxWidth: "none" }}>
							Join UNBOUND to learn programming, robotics, and problem-solving.
						</p>
						<a href="#signup" className="nav-btn active" style={{ display: "inline-block", padding: "10px 24px", fontSize: "1.1rem" }}>
							Sign Up Now
						</a>
					</div>

					{/* 2. Flyer */}
					<div
						style={{
							textAlign: "center",
						}}
					>
						<img 
							src="/unbound-advert.png" 
							alt="UNBOUND Event Flyer" 
							style={{ maxHeight: "60vh", borderRadius: "16px" }} 
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
					<div id="signup" className="section-head" style={{ marginTop: "5rem", textAlign: "center" }}>
						<h2>Secure Your Spot</h2>
						<p style={{ maxWidth: "none" }}>Complete the form below to register.</p>
					</div>
					
						<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdzf3kGXQEGTk1H_xYVZ2MfKU4ykmw7PgY6oANvxIqbaZZxxA/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
					
				</section>
			</main>

			<footer>
				<div className="container footer-row">
					<div>&copy; 2026 UNBOUND</div>
					<div>
						Questions?{" "}
						<a href="mailto:unbounddrones@gmail.com" style={{ color: "inherit", textDecoration: "underline" }}>
							unbounddrones@gmail.com
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
