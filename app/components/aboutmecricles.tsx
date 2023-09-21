"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import GithubIcon from "../img/github.svg";
import CodeImage from "../img/code-1076536_640.jpg";
import MyPhoto from "../img/1114.jpg";

const AboutMeCirclesComponent = () => {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	let factor1;

	if (window.innerWidth <= 1024) {
		factor1 = -0.2;
	} else {
		factor1 = 0.5;
	}
	let factor2;

	if (window.innerWidth <= 1024) {
		factor2 = -0.15;
	} else {
		factor2 = 0.3;
	}
	let factor3;

	if (window.innerWidth <= 1024) {
		factor3 = -0.07;
	} else {
		factor3 = 0.2;
	}

	const secondCircleStyle = {
		transform: `translateY(${-scrollY * factor1}px)`,
	};

	const MainCircleStyle = {
		transform: `translateY(${-scrollY * factor2}px)`,
	};

	const fourthCircleStyle = {
		transform: `translateY(${-scrollY * factor3}px)`,
	};

	return (
		<div className='mx-auto flex justify-center items-end h-1/2 md:h-screen'>
			<div
				className='flex justify-end items-center rounded-full w-40 h-40 md:w-80 md:h-80'
				style={MainCircleStyle}
			>
				<Image
					src={MyPhoto}
					className='rounded-full w-50 h-50 md:w-80 md:h-80'
					alt='JS Icon'
				/>
			</div>
			<div
				className='flex justify-center items-center cursor-pointer scaleClass bg-gray-700 rounded-full w-12 h-12 ml-2 md:w-24 md:h-24 md:ml-4'
				style={secondCircleStyle}
			>
				<a
					href='https://github.com/DUP3RELE'
					target='_blank'
				>
					<Image
						src={GithubIcon}
						className='h-8 md:h-16'
						alt='HTML Icon'
					/>
				</a>
			</div>

			<div
				className='flex justify-center items-center rounded-full w-20 h-20 ml-2 md:w-40 md:h-40 md:ml-4'
				style={fourthCircleStyle}
			>
				<Image
					src={CodeImage}
					className='rounded-full w-20 h-20 md:w-40 md:h-40'
					alt='Code Image'
				/>
			</div>
		</div>
	);
};

export default AboutMeCirclesComponent;
