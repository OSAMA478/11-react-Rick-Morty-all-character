import { useEffect, useState } from "react";

import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
	const [loadedData, setLoadedData] = useState({});
	// const [isLoading, setIsLoading] = useState(false);
	const [HttpError, setHttpError] = useState("");
	const [fetchUrl, setFetchUrl] = useState(
		"https://rickandmortyapi.com/api/character"
	);

	const nextUrl = loadedData?.info?.next;
	const prevUrl = loadedData?.info?.prev;
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(fetchUrl);
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
	}, [fetchUrl]);
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
				<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center mx-auto max-w-7xl gap-8  ">
					{HttpError && <p className="col-start-2">{HttpError}</p>}

					{caracterList}
				</div>
				<div className="mx-auto flex gap-6 pt-10 pb-4">
					<button
						onClick={() => {
							setFetchUrl(prevUrl);
						}}
						className="bg-slate-700 px-8 py-2 rounded-md text-lg"
					>
						Prev
					</button>
					<button
						onClick={() => {
							setFetchUrl(nextUrl);
						}}
						className="bg-slate-700 px-8 py-2 rounded-md text-lg"
					>
						Next
					</button>
				</div>
			</main>
		</>
	);
};

export default App;
