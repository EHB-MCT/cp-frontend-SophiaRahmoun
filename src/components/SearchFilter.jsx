function SearchFilter({ onSearch }) {
	return (
		<input
			type="text"
			placeholder="Search movies..."
			onChange={(event) => onSearch(event.target.value)}
		/>
	);
}

export default SearchFilter;
