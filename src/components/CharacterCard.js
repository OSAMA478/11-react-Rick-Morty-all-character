import React from "react";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { BsInfoLg } from "react-icons/bs";
import { BsQuestion } from "react-icons/bs";

const CharacterCard = ({ name, gender, image, onClick }) => {
	const imageUrl = image;
	const isMale = gender;

	const moreInfoHandler = () => {
		onClick(name);
	};

	return (
		<>
			<div className=" relative h-64 w-64 mb-8 hover:scale-105 transition duration-200">
				<img
					src={`${imageUrl}`}
					alt="character"
					className="rounded-xl hover:shadow-lg  hover:shadow-white transition duration-200"
				/>
				<div className=" absolute  -bottom-10 left-1/2 rounded-lg -translate-x-1/2 w-10/12 overflow-hidden  ">
					<div className="bg-slate-700 px-2">
						<h3 className="  text-xl text-center  ">{name}</h3>
					</div>
					<div className="bg-slate-600 flex p-2 justify-between ">
						<div className="flex items-center">
							{isMale == "Male" ? (
								<FaMale />
							) : isMale == "Female" ? (
								<FaFemale />
							) : (
								<BsQuestion />
							)}
							<p>{gender}</p>
						</div>
						<button
							onClick={() => moreInfoHandler()}
							className="active:scale-90 transition duration-200 cursor cursor-pointer flex bg-slate-700 rounded-md px-1 items-center"
						>
							<BsInfoLg />
							<p>more info</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CharacterCard;
