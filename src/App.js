import { useEffect, useState } from "react";

import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";

const App = () => {
	const [loadedData, setLoadedData] = useState({});
	const [searchBarValue, setSearchBarValue] = useState("");
	const [searchCards, setSearchCards] = useState([]);
	const [pageNo, setPageNo] = useState(1);

	// const [isLoading, setIsLoading] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const [modalData, setModalData] = useState({});
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
		};
		fetchData().catch((error) => {
			setHttpError(error.message);
		});
	}, [fetchUrl]);

	const caractersData = loadedData?.results;

	const showModal = (cardName) => {
		const cardPersonData = caractersData.filter((item) => {
			return item.name === cardName;
		});

		const totalNoOfEpisod = cardPersonData[0]?.episode?.length;
		const imageUrl = cardPersonData[0]?.image;
		setModalData({
			name: cardPersonData[0]?.name,
			status: cardPersonData[0]?.status,
			gender: cardPersonData[0]?.gender,
			image: imageUrl,
			species: cardPersonData[0]?.species,
			location: cardPersonData[0]?.location?.name,
			noOfEpisods: totalNoOfEpisod,
		});

		setIsModal(true);
	};
	const hideModal = () => {
		setIsModal(false);
	};

	const caracterList = caractersData?.map((caracter, i) => {
		return (
			<CharacterCard
				onClick={showModal}
				key={i}
				name={caracter.name}
				gender={caracter.gender}
				image={caracter.image}
			/>
		);
	});

	const searchCardHandler = (searchValue) => {
		console.log(caractersData);
		setSearchBarValue(searchValue);
		const filteredList = caractersData.filter((item) =>
			item?.name.toLowerCase().includes(searchValue.toLowerCase())
		);

		console.log(filteredList);
		console.log(searchBarValue.length);

		setSearchCards(filteredList);
	};

	const searchCardsList = searchCards?.map((caracter, i) => {
		return (
			<CharacterCard
				onClick={showModal}
				key={i}
				name={caracter.name}
				gender={caracter.gender}
				image={caracter.image}
			/>
		);
	});
	console.log(pageNo);

	return (
		<>
			<Header />
			<main className="relative flex flex-col justify-start min-h-[calc(100vh-4rem)] mt-16 text-white bg-slate-800 lg:px-6 ">
				{isModal && (
					<div id="overlay-backdrop">
						<Modal info={modalData} onClick={hideModal} />
					</div>
				)}
				<div>
					<div className="flex items-center h-16 my-4">
						<SearchBar
							inputValue={searchBarValue}
							onClick={searchCardHandler}
						/>
					</div>
					<div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-7xl">
						{HttpError && <p className="col-start-2">{HttpError}</p>}

						{searchBarValue.length > 0 && searchCards.length > 0 ? (
							searchCardsList
						) : searchBarValue.length > 0 && searchCards.length == 0 ? (
							<p>no character found</p>
						) : (
							caracterList
						)}
					</div>
					<div className="flex justify-center gap-6 pt-10 pb-4 mx-auto">
						<button
							disabled={pageNo == 1}
							onClick={() => {
								setFetchUrl(prevUrl);
								setSearchBarValue("");
								setPageNo(pageNo - 1);
							}}
							className={`px-8 py-2  ${
								pageNo == 1 && "opacity-40 cursor-not-allowed"
							}  text-lg rounded-md bg-slate-700`}
						>
							Prev
						</button>
						<button
							disabled={pageNo == loadedData?.info?.pages}
							onClick={() => {
								setFetchUrl(nextUrl);
								setSearchBarValue("");
								setPageNo(pageNo + 1);
							}}
							className={`px-8 py-2 text-lg rounded-md bg-slate-700 ${
								pageNo == loadedData?.info?.pages &&
								"opacity-40 cursor-not-allowed"
							}`}
						>
							Next
						</button>
					</div>
				</div>
				{/* )} */}
			</main>
		</>
	);
};

export default App;
