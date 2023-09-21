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
			<main className='flex flex-wrap min-h-screen'>
				<div
					className='w-full lg:w-2/4'
					id='main'
				>
					<div className='mx-auto flex justify-center items-center mt-20'>
						<a className='text-4xl md:text-6xl ml-3 text-yellow-500 cursor-default'>Witaj na mojej stronie!</a>
					</div>
					<div className='mx-auto flex justify-center items-center mt-10'>
						<a className='text-1xl md:text-3xl ml-3 text-sky-400/100 font-bold cursor-default'>Nazywam się Krystian, a to jest moje <span className="text-emerald-600">Portfolio!</span></a>
					</div>
					<div className='mx-auto flex justify-center items-center'>
						<a className='text-1xl md:text-3xl ml-3 text-sky-400/75 font-semibold cursor-default'>Nazywam się Krystian, a to jest moje <span className="text-emerald-600/75">Portfolio!</span></a>
					</div>
					<div className='mx-auto flex justify-center items-center'>
						<a className='text-1xl md:text-3xl ml-3 text-sky-400/50 font-medium cursor-default'>Nazywam się Krystian, a to jest moje <span className="text-emerald-600/50">Portfolio!</span></a>
					</div>
					<div className='mx-auto flex justify-center items-center'>
						<a className='text-1xl md:text-3xl ml-3 text-sky-400/25 font-normal cursor-default'>Nazywam się Krystian, a to jest moje <span className="text-emerald-600/25">Portfolio!</span></a>
					</div>
					<div className="mx-auto flex justify-center items-center h-2/6">
						<Buttons />
					</div>
				</div>
				<div className='w-full lg:w-2/4 fade-in'>
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
