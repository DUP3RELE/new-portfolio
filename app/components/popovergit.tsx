"use client";
import {
	Popover,
	PopoverHandler,
	PopoverContent,
	Button,
} from "@material-tailwind/react";
import Image from "next/image";
import gitIcon from "../img/github.svg";

export default function Popover_git() {
	return (
		<Popover
			animate={{
				mount: { scale: 1, y: 0 },
				unmount: { scale: 0, y: 25 },
			}}
		>
			<PopoverHandler>
				<Button className="rounded-full">
					<div className='cricle3 flex justify-center items-center  m-3'>
						<Image
							src={gitIcon}
							className='h-8 md:h-20 lg:h-32 pointer-events-none'
							alt='Git Icon'
						/>
					</div>
				</Button>
			</PopoverHandler>
			<PopoverContent className='popoverstyle3'>
				<a
					href='https://github.com/DUP3RELE'
					target='_blank'
					className="p-2"
				>
					My Github Page!
				</a>
			</PopoverContent>
		</Popover>
	);
}
