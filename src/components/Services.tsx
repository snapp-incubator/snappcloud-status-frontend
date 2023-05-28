import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

const regions = [
    { id: 1, name: "Cab Teh-1" },
    { id: 2, name: "Cab Teh-2" },
    { id: 3, name: "SnappGroup" }
];

type Service = {
    name: string,
    status: any
}

type Props = {
    services: Service[];
};

const Services: React.FC<Props> = ({ services }) => (
    <table className="table">
        <thead>
            <tr className="table-dark">
                <th>Service</th>
                {
                    regions.map(region => <th key={region.id}>{region.name}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                services.map((service, index) => (
                    <tr key={index}>
                        <td>{service.name}</td>
                        {
                            regions.map(region => {
                                const statusId: number = service.status[region.id]

                                if (statusId === 1) {
                                    return <td key={region.id}><CheckCircleIcon className="operational-icon" /></td>;
                                } else if (statusId === 2) {
                                    return <td key={region.id}> <WarningIcon className="warning-icon" /></td>;
                                } else if (statusId === 3) {
                                    return <td key={region.id}> <CancelIcon className="outage-icon" /></td>;
                                }

                                return <td key={region.id}><p>Unknown</p></td>;
                            })
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
);


export default Services;
