"use client";
import {
	Popover,
	PopoverHandler,
	PopoverContent,
	Button,
} from "@material-tailwind/react";
import Image from "next/image";
import codeIcon from "../img/code-solid.svg";

export default function Popover_legacy() {
	return (
		<Popover
			animate={{
				mount: { scale: 1, y: 0 },
				unmount: { scale: 0, y: 25 },
			}}
		>
			<PopoverHandler>
				<Button className="rounded-full">
					<div className='cricle2 flex justify-center items-center  m-3'>
						<Image
							src={codeIcon}
							className='h-16 md:h-28 lg:h-40 pointer-events-none'
							alt='Code Icon'
						/>
					</div>
				</Button>
			</PopoverHandler>
			<PopoverContent className='popoverstyle2'>
				<a
					href='https://www.facebook.com/BorsuczaStronaZycia'
					target='_blank'
					className="p-2"
				>
					Legacy Page!
				</a>
			</PopoverContent>
		</Popover>
	);
}
