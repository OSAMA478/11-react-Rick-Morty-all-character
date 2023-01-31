import React from "react";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { BsInfoLg } from "react-icons/bs";

const CharacterCard = () => {
	const imageUrl = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
	const isMale = "male";
	return (
		<div className="relative h-64 w-64 mb-8">
			<img src={`${imageUrl}`} alt="character" className="rounded-xl" />
			<div className=" absolute  -bottom-10 left-1/2 rounded-lg -translate-x-1/2 w-10/12 overflow-hidden  ">
				<div className="bg-slate-700 px-2">
					<h3 className="  text-2xl text-center  ">name</h3>
				</div>
				<div className="bg-slate-600 flex p-2 justify-between ">
					<div className="flex items-center">
						{isMale == "male" ? <FaMale /> : <FaFemale />}
						<p>gender</p>
					</div>
					<div className="flex bg-slate-700 rounded-md px-1 items-center">
						<BsInfoLg />
						<p>more info</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
