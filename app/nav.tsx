"use client";
import React, { useState, useEffect } from "react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import "./css/animations.css";

const StickyNavbar: React.FC = () => {
	const [openNav, setOpenNav] = useState<boolean>(false);
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["main", "about-me", "projects", "contact"];
			let currentSection = "";

			sections.forEach((section) => {
				const element = document.getElementById(section);
				const rect = element?.getBoundingClientRect();

				if (
					rect &&
					rect.top <= window.innerHeight / 3 &&
					rect.bottom >= window.innerHeight / 3
				) {
					currentSection = section;
				}
				console.log(currentSection);
			});

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const NavLink: React.FC<{ children: React.ReactNode; section: string }> = ({
		children,
		section,
	}) => {
		return (
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-normal'
			>
				<a
					href={`#${section}`}
					className={`flex items-center justify-between ${
						activeSection === section ? "nav-active" : ""
					}`}
				>
					{children}
					{section && (
						<div className='dots'>
							<span className='dot bg-blue-500'></span>
							<span className='dot bg-red-500'></span>
							<span className='dot bg-yellow-500'></span>
							<span className='dot bg-green-500'></span>
						</div>
					)}
				</a>
			</Typography>
		);
	};

	const navList = (
		<ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
			<NavLink section='about-me'>O mnie</NavLink>
			<NavLink section='projects'>Projekty</NavLink>
			<NavLink section='contact'>Kontakt</NavLink>
		</ul>
	);

	return (
		<div className='overflow-hidden'>
			<Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-gradient-to-r from-emerald-500 to-emerald-200 bg-opacity-5'>
				<div className='flex items-center justify-between text-blue-gray-900 '>
					<Typography
						as='a'
						href='#'
						className='mr-4 cursor-pointer py-1.5 font-medium special-case'
					>
						Krystian Żywczak - Portfolio
					</Typography>
					<div className='flex items-center gap-4'>
						<div className='mr-4 hidden lg:block '>{navList}</div>
						<IconButton
							variant='text'
							className='ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden '
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									className='h-6 w-6'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
				<Collapse open={openNav}>{navList}</Collapse>
			</Navbar>
		</div>
	);
};

export default StickyNavbar;
