import { useEffect, useState } from "react";

import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
	const [loadedData, setLoadedData] = useState({});
	// const [isLoading, setIsLoading] = useState(false);
	const [HttpError, setHttpError] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://rickandmortyapi.com/api/character");
			// setHttpError(null);
			if (!response.ok) {
				throw new Error("something went wrong");
			}

			const data = await response.json();
			setLoadedData(data);
			console.log(data);
		};
		fetchData().catch((error) => {
			setHttpError(error.message);
		});
	}, []);
	console.log(loadedData);

	const caractersData = loadedData?.results;

	const caracterList = caractersData?.map((caracter, i) => {
		return (
			<CharacterCard
				key={i}
				name={caracter.name}
				gender={caracter.gender}
				image={caracter.image}
			/>
		);
	});

	return (
		<>
			<Header />
			<main className="flex flex-col  justify-start bg-slate-800 text-white p-2 lg:px-6 mt-16  h-  ">
				{/* [calc(100vh-4rem)] */}
				<div className="my-4 bg-red-500 h-16  flex  items-center">
					<SearchBar />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center mx-auto max-w-7xl gap-8  ">
					{HttpError && <p className="col-start-2">{HttpError}</p>}

					{caracterList}
				</div>
			</main>
		</>
	);
};

export default App;
