import MyTimeline from "@/app/components/timeline";
import AboutMeCirclesComponent from "@/app/components/aboutmecricles";
import Image from "next/image";

export default function AboutMeSection() {
	return (
		<section
			id='about-me'
			className='min-h-screen bg-gray-300 p-8 flex flex-wrap'
		>
			<div className='w-full lg:w-2/4'>
				<AboutMeCirclesComponent />
			</div>
			<div className='w-full lg:w-2/4 flex'>
				<div className="justify-center items-center ml-5 mt-5"><MyTimeline /></div>
			</div>
		</section>
	);
}
