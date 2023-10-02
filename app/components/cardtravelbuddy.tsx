import React, { useRef } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import Image from "next/image";
import travelBuddy from "../img/travel-buddy.jpg";
import reactIcon from "../img/react.svg";
import jsIcon from "../img/js.svg";
import mongoDB from "../img/mongodb-icon.svg";
import postman from "../img/icons8-postman-api.svg";
import vs from "../img/icons8-visual-studio.svg";

interface FullScreenPopupProps {
	isOpen: boolean;
	onClose: () => void;
}

const FullScreenPopup: React.FC<FullScreenPopupProps> = ({
	isOpen,
	onClose,
}) => {
	const popupRef = useRef(null);
	if (!isOpen) return null;

	const handleBackdropClick = (event: MouseEvent) => {
		// @ts-ignore
		if (popupRef.current && !popupRef.current.contains(event.target)) {
			onClose();
		}
	};

	return (
		<div
			className='fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center transition-opacity transition-backdrop-blur duration-500 ease-in-out overflow-y-auto text-xs md:text-lg'
			// @ts-ignore
			onClick={handleBackdropClick}
		>
			<Card
				className='w-5/6 h-5/6 rounded-3xl border-4 border-black'
				ref={popupRef}
			>
				<CardHeader
					color='blue-gray'
					className='relative flex justify-start'
				>
					<div className='h-5/6 w-0 md:w-3/4 hidden md:block'>
						<Image
							className='relative rounded-3xl h-full m-4 drop-shadow-lg z-50'
							src={travelBuddy}
							alt='travel-buddy image'
						/>
					</div>
					<div className='w-full p-4 md:1/4 rounded-2xl md:rounded-r-2xl bg-black flex flex-wrap justify-evenly items-center'>
						<a
							href='https://travel-buddy-eight.vercel.app/'
							target='_blank'
						>
							<button className='button-popup-style'>Zobacz stronę</button>
						</a>
						<a
							href='https://github.com/DUP3RELE/TravelBuddy'
							target='_blank'
						>
							<button className='button-popup-style'>Repozytorium Git</button>
						</a>
					</div>
				</CardHeader>
				<CardBody className='relative rounded-3xl m-2 p-4 bg-slate-300 z-10'>
					<Typography
						variant='h5'
						color='blue-gray'
						className='mb-2'
					>
						Travel Buddy
					</Typography>
					<Typography>
						Aplikacja, w której można dodawać i edytować karty z tytułem i
						opisem. Użytkownicy zalogowani mogą edytować karty, użytkownicy
						niezalogowani mogą je jedynie oglądać.
					</Typography>
				</CardBody>
				<div className='flex flex-row'>
					<CardBody className='relative rounded-3xl m-2 p-4 bg-slate-300 drop-shadow-lg'>
						<Typography
							variant='h5'
							color='blue-gray'
							className='mb-2'
						>
							Czego się nauczyłem?
						</Typography>
						<Typography>
							Nauczyłem się planowania i budowy struktury aplikacji w React.js
							Next13, praca z API (MongoDB, Postman), podstawy TypeScripta,
							ćwiczenia z Javascriptem. Hosting aplikacji na Vercelu.
						</Typography>
					</CardBody>
					<CardBody className='relative rounded-3xl m-2 p-4 bg-slate-300 drop-shadow-lg mb-10'>
						<Typography className='flex flex-wrap'>
							<Typography
								variant='h5'
								color='blue-gray'
								className='mb-2'
							>
								Użyte technologie:
							</Typography>
							<div className='flex flex-wrap'>
								<div className='w-7 h-7 md:w-10 md:h-10 bg-blue-700 rounded-full flex justify-center items-center m-1'>
									<Image
										title='React.js'
										src={reactIcon}
										alt='react image'
										className='w-5 h-5 md:w-7 md:h-7'
									/>
								</div>
								<div className='w-7 h-7 md:w-10 md:h-10 bg-yellow-400 rounded-full flex justify-center items-center m-1'>
									<Image
										title='JavaScript'
										src={jsIcon}
										alt='JavaScript image'
										className='w-5 h-5 md:w-7 md:h-7'
									/>
								</div>
								<div className='w-7 h-7 md:w-10 md:h-10 bg-green-400 rounded-full flex justify-center items-center m-1'>
									<Image
										title='mongoDB'
										src={mongoDB}
										alt='mongoDB image'
										className='w-5 h-5 md:w-7 md:h-7'
									/>
								</div>
								<div className='w-7 h-7 md:w-10 md:h-10 bg-orange-500 rounded-full flex justify-center items-center m-1'>
									<Image
										title='postman'
										src={postman}
										alt='postman image'
										className='w-5 h-5 md:w-7 md:h-7'
									/>
								</div>
								<div className='w-7 h-7 md:w-10 md:h-10 bg-white rounded-full flex justify-center items-center m-1'>
									<Image
										title='Visual Studio Code'
										src={vs}
										alt='Visual Studio Code image'
										className='w-5 h-5 md:w-7 md:h-7'
									/>
								</div>
							</div>
						</Typography>
					</CardBody>
				</div>
				<CardFooter className='absolute bottom-1 right-1'>
					<Button
						className='button-popup-style drop-shadow-lg'
						onClick={onClose}
					>
						Wyjdź
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};
export default FullScreenPopup;
