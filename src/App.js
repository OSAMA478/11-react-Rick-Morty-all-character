import { SiTailwindcss } from "react-icons/si";
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
	return (
		<>
			<Header />
			<main className="flex flex-col  justify-start bg-slate-800 text-white p-2 lg:px-6 mt-16  h-[calc(100vh-4rem)]  ">
				<div className="my-4 bg-red-500 h-16  flex  items-center">
					<SearchBar />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center mx-auto max-w-7xl gap-8  ">
					<CharacterCard />
				</div>
			</main>
		</>
	);
};

export default App;
