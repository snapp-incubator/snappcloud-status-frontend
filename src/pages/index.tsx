import type { NextPage } from "next";
import React, { useState } from "react";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

import AppHead from "src/components/AppHead";
import AppBar from "src/components/AppBar";

const regions = [
    { id: 1, name: "Cab Teh-1" },
    { id: 2, name: "Cab Teh-2" },
    { id: 3, name: "SnappGroup" }
];

const services = [
    { id: 1, name: "PaaS" },
    { id: 2, name: "IaaS" },
    { id: 3, name: "Object Storage (S3)" },
    { id: 4, name: "Container Registry" },
    { id: 5, name: "Service LoadBalancer (L4)" },
    { id: 6, name: "Ingress (L7)" },
    { id: 7, name: "Proxy" },
    { id: 8, name: "Monitoring" },
    { id: 9, name: "Logging" },
    { id: 10, name: "Traffic observability (Hubble)" },
    { id: 11, name: "ArgoCD" },
    { id: 12, name: "ArgoWF" },

];

const status = [
    { region: 1, service: 1, operational: true },
    { region: 1, service: 2, operational: false },
    { region: 1, service: 3, operational: true },
    { region: 2, service: 1, operational: true },
    { region: 2, service: 2, operational: true },
    { region: 2, service: 3, operational: false },
    { region: 3, service: 1, operational: false },
    { region: 3, service: 2, operational: true },
    { region: 3, service: 3, operational: false }
];

const Home: NextPage = () => {
    const [data, setData] = useState(status);

    return (
        <>
            <AppHead />
            <AppBar />
            <div className="App">
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            {regions.map(region => (
                                <th key={region.id}>{region.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(service => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                {regions.map(region => {
                                    const serviceStatus = data.find(
                                        item => item.region === region.id && item.service === service.id
                                    );

                                    return (
                                        <td key={region.id}>
                                            {serviceStatus && serviceStatus.operational ? (
                                                <span role="img" aria-label="operational">
                                                    <WarningIcon className="warning-icon" />
                                                </span>
                                            ) : (
                                                <CheckCircleIcon className="operational-icon" />
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;
