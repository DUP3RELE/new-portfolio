import Image from "next/image";
import gitIcon from "../../img/github.svg";
import facebookIcon from "../../img/facebook.svg";
import phoneIcon from "../../img/phone-solid.svg"
import codeIcon from "../../img/code-solid.svg"

export default function ContactSection() {
	return (
		<div
			id='contact'
			className='min-h-screen bg-gray-100 p-8 flex flex-col justify-center items-center h-[100vh]'
		>
			<h2 className='text-4xl mb-10'>Skontaktuj się ze mną!</h2>
			<div className='flex flex-row justify-between w-full mt-10'>
				<div className='cricle1 flex justify-center items-center'>
					<Image
						src={facebookIcon}
						className='h-16 md:h-28 lg:h-44'
						alt='Facebook Icon'
					/>
				</div>
				<div className='cricle2 flex justify-center items-center'><Image
						src={codeIcon}
						className='h-16 md:h-28 lg:h-40'
						alt='Code Icon'
					/></div>
				<div className='cricle3 flex justify-center items-center'>
					<Image
						src={gitIcon}
						className='h-8 md:h-20 lg:h-32'
						alt='Git Icon'
					/>
				</div>
				<div
					className='cricle4 flex
					justify-center
					items-center'
				>
					<Image
						src={phoneIcon}
						className='h-14 md:h-28 lg:h-44'
						alt='phone Icon'
					/>
				</div>
			</div>

			{/* Możesz dodać dodatkową treść, zdjęcia itp. */}
		</div>
	);
}
