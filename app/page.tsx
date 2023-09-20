import Footer from "./footer";
import StickyNavbar from "./nav";
import CirclesComponent from "./components/cricles";
import AboutMeSection from "./pages/aboutme/page";
import ProjectsSection from "./pages/projects/page";
import ContactSection from "./pages/contact/page";
import Buttons from "./components/buttons";

export default function Home() {
	return (
		<>
			<div className='sticky top-0'>
				<StickyNavbar />
			</div>
			<main className='flex min-h-screen'>
				<div
					className='w-2/4'
					id='main'
				>
					<div className='mx-auto flex justify-center items-center h-2/6'>
						<a className='text-6xl'>Witaj na mojej stronie!</a>
					</div>
					<div className="mx-auto flex justify-center items-center h-4/6">
						<Buttons />
					</div>
				</div>
				<div className='w-2/4 fade-in'>
					<CirclesComponent />
				</div>
			</main>
			<div>
				<AboutMeSection />
			</div>
			<div>
				<ProjectsSection />
			</div>
			<div>
				<ContactSection />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}
