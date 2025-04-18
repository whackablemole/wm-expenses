import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Mole's Expenses",
	description: "This is only for Mole, so I don't know exactly what you're doing here...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en-GB">
			<body
				className={`dark`}
			>
				{children}
			</body>
		</html>
	);
}
