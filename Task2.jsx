import React, { useState, useEffect, useMemo } from "react";

const ItemList = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch("https://api.example.com/items");
				const data = await response.json();
				setItems(data);
			} catch (error) {
				console.log("Error fetching items:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchItems();
	}, []); // Fetch items only once when the component mounts, empty dependency array avoids re-fetching

	// useMemo hook can be used to memoize the filtered items and optimize performance
	const filteredItems = useMemo(() => {
		return items.filter((item) =>
			item.name.toLowerCase().includes(filter.toLowerCase())
		);
	}, [items, filter]); // Re-run the filteredItems function only when items or filter change

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div>
			<input
				type="text"
				value={filter}
				onChange={handleFilterChange}
				placeholder="Filter items..."
			/>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{filteredItems.map((item) => (
						<li key={item.id}>{item.name}</li> // Use a unique identifier as key instead of index
					))}
				</ul>
			)}
		</div>
	);
};

export default ItemList;
