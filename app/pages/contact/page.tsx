import Popovers from "../../components/popoverfb";
import Popovercode from "../../components/popoverlegacy";
import Popovergit from "../../components/popovergit";
import Popoverphone from "../../components/popoverphone";

export default function ContactSection() {
	return (
		<div
			id='contact'
			className='min-h-screen bg-gray-300 p-8 flex flex-col justify-center items-center flex-wrap col-auto'
		>
			<h2 className='text-4xl mb-10 w-full text-center'>Skontaktuj się ze mną!</h2>
			<div className='flex flex-row mt-10'>
				<div className="relative overflow-visible">
					<Popovers />
					<Popovercode />
				</div>
				<div className="relative overflow-visible">
					<Popovergit />
					<Popoverphone />
				</div>
			</div>

			{/* Możesz dodać dodatkową treść, zdjęcia itp. */}
		</div>
	);
}
