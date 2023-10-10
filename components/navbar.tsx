import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	Logo,
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar position="static">
			<nav className="bg-white w-screen">
				<div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
					<a href="https://flowbite.com/" className="flex items-center">
						{/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Devtools Logo" /> */}
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DevTools</span>
					</a>
					<div className="flex flex-row">
						<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mr-8" id="navbar-search">
							<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								<li>
									<Link href="/" className="rounded hover:text-blue-600" aria-current="page">Home</Link>
								</li>
								<li>
									<Link href="/posts/line-sorter" className="rounded hover:text-blue-600" aria-current="page">Tools</Link>
								</li>
								<li>
									<Link href="#" className="rounded hover:text-blue-600" aria-current="page">About Us</Link>
								</li>
							</ul>
						</div>
						<div className="flex md:order-2">
							<div className="relative hidden md:block">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
										<path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
									</svg>
								</div>
								<input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</NextUINavbar>
	);
};
