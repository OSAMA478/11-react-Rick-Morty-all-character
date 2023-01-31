import React from "react";
import ReactDOM from "react-dom";
import { CgCloseR } from "react-icons/cg";
const portalElement = document.getElementById("overlay");
const Modal = ({ image, onClick }) => {
	return ReactDOM.createPortal(
		<div className="h-[calc(100vh-4rem)] relative">
			<div className="absolute h-3/4 sm:h-1/2  top-1/2 left-1/2 lg:h-2/6 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl w-1/2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<div className="absolute right-2 top-2">
					<CgCloseR
						onClick={() => onClick()}
						className="text-xl transition duration-200 active:scale-95 "
					/>
				</div>
				<img
					className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src={image}
					alt="profile"
				/>
				<div className="flex flex-col justify-between p-4 leading-normal">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						firstname lastname
					</h5>
					<ul>
						<li className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							<span>Status: </span>
							<span>Status</span>
						</li>
						<li className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							<span>Location: </span>
							<span>Location</span>
						</li>
						<li className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							<span>Gender: </span>
							<span>Gender</span>
						</li>
						<li className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							<span>Species: </span>
							<span>Species</span>
						</li>
					</ul>
				</div>
			</div>
		</div>,
		portalElement
	);
};

export default Modal;
