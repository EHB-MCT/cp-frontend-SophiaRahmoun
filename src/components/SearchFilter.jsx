import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../index.css";

function SearchFilter({ onSearch }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		if (isExpanded && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isExpanded]);

	const handleClick = () => {
		setIsExpanded(true);
	};

	const handleBlur = () => {
		if (inputRef.current?.value === "") {
			setIsExpanded(false);
		}
	};

	return (
		<div className={`search-container ${isExpanded ? "expanded" : ""}`}>
			{!isExpanded && (
				<FaSearch className="search-icon" onClick={handleClick} />
			)}
			{isExpanded && (
				<input
					type="text"
					ref={inputRef}
					className="search-input"
					placeholder="Wat zoek je..."
					onChange={(e) => onSearch(e.target.value)}
					onBlur={handleBlur}
				/>
			)}
		</div>
	);
}

export default SearchFilter;
