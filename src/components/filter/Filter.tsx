import React, { useEffect, useState } from 'react';
import Search from '../search/Search';
import "./filter.scss";
import { Launch } from '../../types/launches.types';

interface FilterPropTypes {
    setFilteredLaunches: (filteredLaunches: Launch[]) => void;
    allLaunches: Launch[];
}

export const Filter: React.FC<FilterPropTypes> = ({ setFilteredLaunches, allLaunches }) => {
    // State for search term
    const [search, setSearch] = useState("");
    // State for sorting option
    const [sort, setSort] = useState("latest");

    // Effect to filter and sort launches when search term, sort option, or launches data change
    useEffect(() => {
        // Filter launches based on search term
        let filteredLaunches = allLaunches.filter(
            launch => launch.rocket.rocket_name.toLowerCase().includes(search.toLowerCase())
        );

        // Sort launches based on the selected sort option
        switch (sort) {
            case "latest":
                filteredLaunches = filteredLaunches.sort((a, b) => {
                    return new Date(b.launch_date_local as string | number | Date).getTime() - new Date(a.launch_date_local as string | number | Date).getTime();
                });
                break;
            case "oldest":
                filteredLaunches = filteredLaunches.sort((a, b) => {
                    return new Date(a.launch_date_local as string | number | Date).getTime() - new Date(b.launch_date_local as string | number | Date).getTime();
                });
                break;
            case "a-z":
                filteredLaunches = filteredLaunches.sort((a, b) => {
                    return a.mission_name.localeCompare(b.mission_name);
                });
                break;
            case "z-a":
                filteredLaunches = filteredLaunches.sort((a, b) => {
                    return b.mission_name.localeCompare(a.mission_name);
                });
                break;
            default:
                break;
        }

        // Update state with filtered and sorted launches
        setFilteredLaunches(filteredLaunches);
    }, [search, sort, allLaunches, setFilteredLaunches]);

    return (
        <div className='filter-container'>
            {/* Search component */}
            <Search
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {/* Sort dropdown */}
            <div className="sort">
                <label>Sort by:</label>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                    <option value="a-z">Mission Name (A - Z)</option>
                    <option value="z-a">Mission Name (Z - A)</option>
                </select>
            </div>
        </div>
    );
};
