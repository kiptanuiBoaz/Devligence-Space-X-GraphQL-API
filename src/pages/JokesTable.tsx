import './jokes-table.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Pagination, Spinner } from '../components';
import { JokeInterface, PagenationInterface } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { selectTheme } from '../redux/themeSlice';
import { selectPagination } from '../redux/paginationSlice';
import { UPDATE_JOKE } from '../redux/dataSlice';
import { modifyText } from '../utils/shortText';
import { dateFnsFormat } from '../utils/resolveDate';
import { resolveColor } from '../utils/resolveColor';
import { useQuery } from '@apollo/client';
import { Company_And_Launches_Query } from '../graphql/query';
import { Launch } from '../types/launches.types';
import CompanyDetails from '../components/company-details/CompanyDetails';

//feth data as soon as component mounts
const JokesTable = () => {
    const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [allJokes, setAllJokes] = useState<JokeInterface[]>([]);
    //pagination state from redux store
    const { page, limit }: PagenationInterface = useSelector(selectPagination);
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // //keeping track of device width//listen for width change //clean up event listener
    useEffect(() => {
        const handleEvent = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleEvent);
        return () => window.removeEventListener('resize', handleEvent);

    }, [deviceWidth]);

    const { data, loading, error } = useQuery(Company_And_Launches_Query);
    //   useEffect(() => {
    //     //get all posts from API
    //     const fetchPosts = async () => {
    //       setIsLoading(true);
    //       try {

    //         // setAllJokes(jokes.data)
    //         // console.log(jokes.data)
    //         setIsLoading(false);
    //       } catch (error) {
    //         console.log(error);
    //         setIsLoading(false);
    //       }
    //     };
    //     fetchPosts();

    //   }, [limit, page]);

    //edit an existing document
    // const handleEditing = ({ id, title, author, body, createdAt, views }: JokeInterface) => {
    //     dispatch(UPDATE_JOKE({
    //         joke: { id, title, author, body, createdAt, views },
    //         editingId: 'editing',
    //     }));
    //     navigate("/edit");
    // }

    console.log(data)
    return (loading
        ? <Spinner />
        :
        <section className={`table-container ${theme}-table`}>


            <div className="data-table">
                <CompanyDetails company={data.company} />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Mission Name</th>
                            <th>Rocket Name</th>
                            <th>Launch Date</th>
                            <th>Launch Success</th>
                            <th>Launch Site</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.launches.map(({ id, mission_name, rocket: { rocket_name }, launch_site, launch_date_local, launch_success }: Launch, i) => (
                            <tr key={id}>
                                <td>{i + 1}</td>
                                <td
                                    className='title'
                                // onClick={() => handleEditing({
                                //   id, title, author, body, createdAt, views
                                // })}
                                >
                                    {modifyText(deviceWidth, mission_name)}
                                </td>
                                <td>{modifyText(deviceWidth, rocket_name)}</td>
                                <td>{dateFnsFormat(launch_date_local.toString())}</td>
                                <td style={{
                                    color: resolveColor(launch_success)
                                }}>{launch_success ?? "No Info"}</td>
                                <td>{launch_site?.site_name ?? "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination />
            </div>

        </section>
    )
}

export default JokesTable