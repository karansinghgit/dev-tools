import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

// the DefaultLayout declares the layout of every page:
// head, navbar, main(filled with contents from the respective page) and footer
// there's no body here: it's declared in _document.tsx
// and the Head and main somehow get detected and pulled from here into the tags _document.tsx
export default function  DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
					title="nextui.org homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">NextUI</p>
				</Link>
			</footer>
		</div>
	);
}
