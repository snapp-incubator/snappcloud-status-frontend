import Link from 'next/link';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

import Logo from "./Logo";

const AppHead: React.FC = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Logo />
                </div>
            </div>

            <div>
                <h1>Service Health</h1>
                <p>This page provides status information on the services that are part of SnappCloud. Check back here to view the current status of the services listed below. If you are experiencing an issue not listed here, please contact Support. For additional information on these services, please visit <Link style={{ color: "blue" }} href="https://docs.snappcloud.io/"> https://docs.snappcloud.io/</Link>. </p>
                <div className="status-guide" >
                    <div className="status-guide-item">
                        <CheckCircleIcon className="operational-icon transform-icon" />
                        <p>Available</p>
                    </div>
                    <div className="status-guide-item">
                        <WarningIcon className="warning-icon transform-icon" />
                        <p>Disruption</p>
                    </div>
                    <div className="status-guide-item">
                        <CancelIcon className="outage-icon transform-icon" />
                        <p>Service Outage</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppHead;
