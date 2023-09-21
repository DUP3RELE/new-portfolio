"use client";
import { Button } from "@material-tailwind/react";

export default function Buttons() {
	return (
		<div className='flex w-max gap-4 z-10'>
			<Button
				onClick={() => {
					const section = document.getElementById("about-me");
					if (section) {
						section.scrollIntoView({ behavior: "smooth" });
					}
				}}
				variant='gradient'
				className='bg-emerald-500 text-inherit p-3 text-lg text-white rounded-md drop-shadow-lg'
			>
				O mnie
			</Button>
			<Button
				onClick={() => {
					const section = document.getElementById("projects");
					if (section) {
						section.scrollIntoView({ behavior: "smooth" });
					}
				}}
				variant='gradient'
				className='bg-emerald-500 p-3 rounded-lg text-lg text-white drop-shadow-lg'
			>
				Projekty
			</Button>
		</div>
	);
}
