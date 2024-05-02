import React, { ChangeEvent } from 'react';
import styles from "./search.module.scss";
import { BiSearch } from "react-icons/bi";

interface SearchPropTypes {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchPropTypes> = ({ value, onChange }) => {
    return (
        <div className={styles.search}>
            <BiSearch size={18} className={styles.icon} />

            <input
                type="text"
                placeholder="Filter by Rocket Name"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Search;
