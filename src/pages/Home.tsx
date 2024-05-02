import './home.scss';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import { CompanyDetails, Filter, LaunchesTable, Pagination, Spinner } from '../components';
import { selectTheme } from '../redux/themeSlice';
import { CompanyAndLaunchesQuery } from '../graphql/query';
import { Launch } from '../types/launches.types';

const Home = () => {
    const theme = useSelector(selectTheme);
    const { data, loading, error } = CompanyAndLaunchesQuery();
    const [filteredLaunches, setFilteredLaunches] = useState<Array<Launch>>([]);

    useEffect(() => {
        if (!loading) {
            setFilteredLaunches(data.launches);
        }
    }, [data, loading]);

    if (error) return <p>{error.message}</p>;

    return (
        loading ? <Spinner /> :
            <section className={`table-container ${theme}-table`}>
                <div className="data-table">
                    <CompanyDetails company={data.company} />
                    <Filter allLaunches={data.launches} setFilteredLaunches={setFilteredLaunches} />
                    <LaunchesTable launches={filteredLaunches} />
                    <Pagination />
                </div>
            </section>

    );
}

export default Home;
