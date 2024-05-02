import { useDispatch, useSelector } from 'react-redux';
import { Launch, LaunchesTablePropInterface } from '../../types/launches.types'
import { PagenationInterface } from '../../types/types';
import { selectPagination } from '../../redux/paginationSlice';
import { modifyText } from '../../utils/shortText';
import { UPDATE_LAUNCH } from '../../redux/lauchSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { dateFnsFormat } from '../../utils/resolveDate';
import { resolveColor } from '../../utils/resolveColor';
import "./lauches-table.scss"

export const LaunchesTable = ({ launches }: LaunchesTablePropInterface) => {
    const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //pagination state from redux store
    const { page: currentPage, limit }: PagenationInterface = useSelector(selectPagination);

    // //keeping track of device width//listen for width change //clean up event listener
    useEffect(() => {
        const handleEvent = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleEvent);
        return () => window.removeEventListener('resize', handleEvent);

    }, [deviceWidth]);

    //edit an existing document
    const handleEditing = (id: string) => {
        dispatch(UPDATE_LAUNCH({
            launch: launches?.find((l: Launch) => l.id === id) as Launch,
            editingId: 'editing',
        }));
        navigate("/edit");
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Mission Name</th>
                    <th>Rocket Name</th>
                    <th>Launch Date</th>
                    <th>Launch Success</th>
                    <th>Launch Site</th>
                </tr>
            </thead>
            <tbody>

                {launches.map(({ id, mission_name, rocket: { rocket_name }, launch_site, launch_date_local, launch_success }: Launch, i: number) => (
                    <tr key={id}>
                        <td>{((currentPage - 1) * limit) + (i + 1)}</td>
                        <td
                            className='title'
                            onClick={() => handleEditing(id)}
                        >
                            {modifyText(deviceWidth, mission_name)}
                        </td>
                        <td>{modifyText(deviceWidth, rocket_name)}</td>
                        <td>{dateFnsFormat(launch_date_local?.toString() ?? "")}</td>
                        <td style={{
                            color: resolveColor(launch_success)
                        }}>{launch_success ?? "No Info"}</td>
                        <td>{launch_site?.site_name ?? "N/A"}</td>
                    </tr>
                ))}

            </tbody>
            {launches.length === 0 && <p style={{ color: "tomato" }}>Sorry! No lauches match your filter </p>}
        </table>
    )
}
