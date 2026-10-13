import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Cta from '../components/Cta';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Home() {
	return (
		<>
			<Navbar />
			<div>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Cta />
				<Contact />
				<Footer />
			</div>
			<Reveal />
		</>
	);
}
