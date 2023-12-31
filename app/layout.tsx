import "./css/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Krystian Żywczak Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl' className="scroll-smooth wrapper">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
