"use client";
import {
	Popover,
	PopoverHandler,
	PopoverContent,
	Button,
} from "@material-tailwind/react";
import Image from "next/image";
import phoneIcon from "../img/phone-solid.svg";

export default function Popover_phone() {
	return (
		<Popover
			animate={{
				mount: { scale: 1, y: 0 },
				unmount: { scale: 0, y: 25 },
			}}
		>
			<PopoverHandler>
				<Button className="rounded-full">
					<div className='cricle4 flex justify-center items-center  m-3'>
						<Image
							src={phoneIcon}
							className='h-14 md:h-28 lg:h-44 pointer-events-none'
							alt='phone Icon'
						/>
					</div>
				</Button>
			</PopoverHandler>
			<PopoverContent className='popoverstyle4'>
				<a
					href='tel:+48690938651'
					className="p-2"
				>
					+48 690 938 651
				</a>
			</PopoverContent>
		</Popover>
	);
}
