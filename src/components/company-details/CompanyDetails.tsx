import './CompanyDetails.css'; // Import your CSS file
import { CompanyDeatilsProps } from '../../types/launches.types';

const CompanyDetails = ({ company: { name, summary, headquarters, ceo, coo, cto, launch_sites, vehicles, test_sites } }: CompanyDeatilsProps) => {
    return (
        <div className="company-details-container">
            <div className="company-details">
                <div className="company-info">
                    <h2>{name}</h2>
                    <p>{summary}</p>
                    <p>Headquarters: {headquarters.city}</p>
                </div>
                <div className="company-management">
                    <h3>Management</h3>
                    <p>CEO: {ceo}</p>
                    <p>COO: {coo}</p>
                    <p>CTO: {cto}</p>
                </div>

                <div className="extra-info">
                    <h3>Extra Info</h3>
                    <p>Launch Sites: {launch_sites}</p>
                    <p>Vehicles: {vehicles}</p>
                    <p>Test Sites: {test_sites}</p>
                </div>
            </div>

        </div>
    );
};

export default CompanyDetails;
