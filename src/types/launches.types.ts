export interface Launch {
    id: string;
    mission_name: string;
    rocket: {
        rocket_name: string;
    };
    launch_site: {
        site_name?: string;
    };
    launch_success?: boolean;
    launch_date_local?: Date;
}
export interface LaunchStateInterface {
    launch: Launch;
    editingId: string;
}

export interface LaunchesTablePropInterface {
    launches: Launch[];
}

export interface Company {
    ceo: string;
    coo: string;
    cto: string;
    name: string;
    summary: string;
    headquarters: {
        city: string;
    };
    test_sites: number;
    vehicles: number;
    launch_sites?: number;
}

export interface CompanyDeatilsProps {
    company: Company
}

interface Data {
    company: Company;
    launches: Launch[];
}

export interface SpaceXDataTypes {
    data: Data;
}


