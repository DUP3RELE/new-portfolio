"use client";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
	return (
		<footer className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between'>
			<Typography
				color='blue-gray'
				className='font-normal'
			>
				&copy; 2023 Krystian Żywczak
			</Typography>
			<ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
				<li>
					<Typography
						as='a'
						href='#'
						color='blue-gray'
						className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
					>
						Strona główna
					</Typography>
				</li>
				<li>
					<Typography
						as='a'
						href='#about-me'
						color='blue-gray'
						className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
					>
						O mnie
					</Typography>
				</li>
				<li>
					<Typography
						as='a'
						href='#projects'
						color='blue-gray'
						className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
					>
						Projekty
					</Typography>
				</li>
				<li>
					<Typography
						as='a'
						href='#contact'
						color='blue-gray'
						className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
					>
						Kontakt
					</Typography>
				</li>
			</ul>
		</footer>
	);
}
