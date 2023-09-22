"use client";
import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
} from "@material-tailwind/react";

export default function MyTimeline() {
	return (
		<div className='m-8'>
			<Timeline>
				<TimelineItem className=" mb-2 mt-2">
					<TimelineConnector />
					<TimelineHeader className='h-3'>
						<TimelineIcon />
						<Typography
							variant='h6'
							color='blue-gray'
							className='leading-none'
						>
							Jak to się zaczęło?
						</Typography>
					</TimelineHeader>
					<TimelineBody className='p-5'>
						<Typography
							variant='small'
							color='gray'
							className='font-normal text-gray-600 text-sm md:text-lg'
						>
							Przez niemal dekadę działałem w branży gastronomicznej, doskonaląc
							umiejętności organizacji, planowania oraz dbałość o szczegóły.
							Nauczyłem się także adaptować do zmieniających się sytuacji i
							skutecznie rozwiązywać napotykane problemy. W późniejszym czasie,
							jako szef kuchni, zdobyłem doświadczenie w zarządzaniu zespołem
							oraz planowaniu funkcjonowania restauracji w szerokim kontekście.
						</Typography>
					</TimelineBody>
				</TimelineItem>
				<TimelineItem className=" mb-2 mt-2">
					<TimelineConnector />
					<TimelineHeader className='h-3'>
						<TimelineIcon />
						<Typography
							variant='h6'
							color='blue-gray'
							className='leading-none'
						>
							Zmiany są dobre!
						</Typography>
					</TimelineHeader>
					<TimelineBody className='p-5'>
						<Typography
							variant='small'
							color='gray'
							className='font-normal text-gray-600 text-sm md:text-lg' 
						>
							Zdecydowałem się na zmianę branży i zainteresowałem się tworzeniem
							stron internetowych. Programowanie przypomina mi przygotowywanie
							doskonałego dania. Aby osiągnąć pożądany efekt, trzeba korzystać z
							najlepszych składników, stosować najnowocześniejsze techniki,
							planować pracę oraz działać z konsekwencją. Ważne jest, by każdy
							projekt, podobnie jak każde kolejne danie, był przygotowywany z
							taką samą starannością i dbałością o jakość.
						</Typography>
					</TimelineBody>
				</TimelineItem>
				<TimelineItem className="mb-2 mt-2">
					<TimelineHeader className='h-3'>
						<TimelineIcon />
						<Typography
							variant='h6'
							color='blue-gray'
							className='leading-none'
						>
							Nowe wyzwanie!
						</Typography>
					</TimelineHeader>
					<TimelineBody className='p-5'>
						<Typography
							variant='small'
							color='gray'
							className='font-normal text-gray-600 text-sm md:text-lg'
						>Cenię branże, które stawiają wyzwania i umożliwiają nieustanny rozwój umiejętności, dlatego zdecydowałem się na programowanie. Od pół roku uczę się tej dziedziny od podstaw i z zapałem podejmuję kolejne wyzwania. Moim celem jest praca jako front-end developer i dalszy rozwój.
						</Typography>
					</TimelineBody>
				</TimelineItem>
			</Timeline>
		</div>
	);
}
