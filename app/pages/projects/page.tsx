"use client";
import { useState } from "react";
import FullScreenPopup from "@/app/components/cardtravelbuddy";
import FullScreenPopupRipper from "@/app/components/cardripperdock";
import Image from "next/image";
import travelBuddy from "../../img/logo-color.png";
import ripperdock from "../../img/Ripperdock-shop-from-cyberpunk--full-of-electronic-devices-and-led-lights-.png"

export default function ProjectsSection() {
	const [popupOpen, setPopupOpen] = useState(false);
	const [popupRipperOpen, setPopupRipperOpen] = useState(false);
	return (
		<>
			<div
				id='projects'
				className='min-h-screen bg-gray-100 p-8 w-full text-center'
			>
				<h2 className='text-4xl mb-4 mt-20'>Projekty</h2>
				<div className='flex flex-row flex-wrap justify-center mt-10'>
					<button onClick={() => setPopupOpen(true)}>
						<div className='project-cricle bg-blue-500 shadow-projects1'>
							<Image
								src={travelBuddy}
								alt='travel buddy'
								className='w-full h-full rounded-full'
							/>
						</div>
					</button>
					<button onClick={() => setPopupRipperOpen(true)}>
						<div className='project-cricle bg-blue-500 shadow-projects2'>
							<Image
								src={ripperdock}
								alt='travel buddy'
								className='w-full h-full rounded-full'
							/>
						</div>
					</button>
				</div>
				<FullScreenPopup
					isOpen={popupOpen}
					onClose={() => setPopupOpen(false)}
				/>
				<FullScreenPopupRipper
					isOpen={popupRipperOpen}
					onClose={() => setPopupRipperOpen(false)}
				/>
			</div>
		</>
	);
}
