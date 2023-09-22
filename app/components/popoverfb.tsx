"use client";
import {
	Popover,
	PopoverHandler,
	PopoverContent,
	Button,
} from "@material-tailwind/react";
import Image from "next/image";
import facebookIcon from "../img/facebook.svg";

export default function Popover_facebook() {
	return (
		<Popover
			animate={{
				mount: { scale: 1, y: 0 },
				unmount: { scale: 0, y: 25 },
			}}
		>
			<PopoverHandler>
				<Button className="rounded-full">
					<div className='cricle1 flex justify-center items-center m-3'>
						<Image
							src={facebookIcon}
							className='h-16 md:h-28 lg:h-44 pointer-events-none' 
							alt='Facebook Icon'
						/>
					</div>
				</Button>
			</PopoverHandler>
				<PopoverContent className='popoverstyle1'>
			<a
				href='https://www.facebook.com/BorsuczaStronaZycia'
				target='_blank'
				className="p-2"
			>
					My Facebook Page!
			</a>
				</PopoverContent>
		</Popover>
	);
}
