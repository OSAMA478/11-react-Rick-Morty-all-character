import React from "react";

const Header = () => {
	return (
		<header className="fixed top-0 z-50 flex items-center justify-start w-full h-16 p-2 text-white bg-slate-700 lg:px-6">
			{/* <h1 className="text-4xl font-bold capitalize">Rick & Morty</h1> */}
			<img
				src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png"
				alt="cartoon name"
				className="h-full"
			/>
		</header>
	);
};

export default Header;
