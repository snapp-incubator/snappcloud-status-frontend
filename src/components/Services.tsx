import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

const regions = [
    { id: 1, name: "Cab Teh-1" },
    { id: 2, name: "Cab Teh-2" },
    { id: 3, name: "SnappGroup" }
];

const statuses = new Map<number, any>([
    [1, <CheckCircleIcon className="operational-icon" />],
    [2, <WarningIcon className="warning-icon" />],
    [3, <CancelIcon className="outage-icon" />],
    [4, "Unknown"],
])

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
                                const statusIcon = statuses.get(statusId)
                                return <td key={region.id}>{statusIcon}</td>;
                            })
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
);


export default Services;
