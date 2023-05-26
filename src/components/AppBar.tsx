import Link from 'next/link';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

import Logo from "./Logo";

type Props = {
    onClick: (event: any) => void;
};

const AppBar: React.FC<Props> = ({ onClick }) => {
    return (
        <>
            <div style={{ backgroundColor: "black" }}>
                <Logo />
            </div>

            <div style={{ padding: "15px" }}>
                <h1>Service Health</h1>
                <p>This page provides status information on the services that are part of SnappCloud. Check back here to view the current status of the services listed below. If you are experiencing an issue not listed here, please contact Support. For additional information on these services, please visit <Link style={{ color: "white" }} href="https://docs.snappcloud.io/"> https://docs.snappcloud.io/</Link>. </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: "flex" }} >
                        <div className="status-icon">
                            <CheckCircleIcon className="operational-icon transform-icon" />
                            <p>Available</p>
                        </div>
                        <div className="status-icon">
                            <WarningIcon className="warning-icon transform-icon" />
                            <p>Disruption</p>
                        </div>
                        <div className="status-icon">
                            <CancelIcon className="outage-icon transform-icon" />
                            <p>Service Outage</p>
                        </div>
                    </div>
                    <button onClick={onClick}>REFETCH SERVICES</button>
                </div>
            </div>
        </>
    );
};

export default AppBar;
