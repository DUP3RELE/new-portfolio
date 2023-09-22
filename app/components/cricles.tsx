"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactIcon from "../img/react.svg";
import HtmlIcon from "../img/html5.svg";
import JsIcon from "../img/js.svg";
import CssIcon from "../img/css3-alt.svg";

const CirclesComponent = () => {
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

	const firstCircleStyle = {
		transform: `translateY(${-scrollY * 1.0}px)`,
	};

	const secondCircleStyle = {
		transform: `translateY(${-scrollY * 0.1}px)`,
	};

	const thirdCircleStyle = {
		transform: `translateY(${-scrollY * 0.7}px)`,
	};

	const fourthCircleStyle = {
		transform: `translateY(${-scrollY * 0.3}px)`,
	};

	return (
		<div className='mx-auto flex justify-center items-center h-1/2 md:h-screen'>
			<div
				className='flex justify-center items-center bg-blue-500 rounded-full w-8 h-8 md:w-16 md:h-16'
				style={firstCircleStyle}
			>
				<Image
					src={ReactIcon}
					className='h-6 md:h-12 pointer-events-none'
					alt='React Icon'
				/>
			</div>
			<div
				className='flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 ml-2 md:w-32 md:h-32 md:ml-4'
				style={thirdCircleStyle}
			>
				<Image
					src={JsIcon}
					className='h-10 md:h-20 pointer-events-none'
					alt='JS Icon'
				/>
			</div>
			<div
				className='flex justify-center items-center bg-red-500 rounded-full w-12 h-12 ml-2 md:w-24 md:h-24 md:ml-4'
				style={secondCircleStyle}
			>
				<Image
					src={HtmlIcon}
					className='h-8 md:h-16 pointer-events-none'
					alt='HTML Icon'
				/>
			</div>

			<div
				className='flex justify-center items-center bg-green-500 rounded-full w-20 h-20 ml-2 md:w-40 md:h-40 md:ml-4'
				style={fourthCircleStyle}
			>
				<Image
					src={CssIcon}
					className='h-14 md:h-28 pointer-events-none'
					alt='CSS Icon'
				/>
			</div>
		</div>
	);
};

export default CirclesComponent;
