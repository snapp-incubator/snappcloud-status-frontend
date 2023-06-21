import React, { useState, useEffect } from "react";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    FAILURE = 'failure',
}

type Service = {
    name: string,
    status: string
}

const Services = ({ title, backend }: { title: string, backend: string }) => {
    const [status, setStatus] = useState<Status>(Status.LOADING);
    const [services, setServices] = useState<Array<Service>>([]);

    useEffect(() => {
        async function getServices() {
            try {
                const req = await fetch(backend + '/api/v1/services');
                if (req.status != 200) {
                    setStatus(Status.FAILURE);
                    setServices([]);
                    return;
                }

                const data = await req.json();
                setStatus(Status.SUCCESS);
                setServices(data.services);
                return;
            } catch (e) {
                setStatus(Status.FAILURE);
                setServices([]);
                return;
            }
        }

        getServices()
    }, []);

    return <>
        <h3 className="service-head">{title}</h3>
        {status === Status.LOADING && (
            <p style={{ textAlign: "center" }}>Loading...</p>
        )}
        {status === Status.SUCCESS &&
            <table className="table">
                <tbody>
                    {
                        services.map((service, index) => {
                            const status: string = service.status
                            var result // TODO: add result type

                            if (status === "operational") {
                                result = <td><CheckCircleIcon className="operational-icon" /></td>;
                            } else if (status === "disruption") {
                                result = <td> <WarningIcon className="warning-icon" /></td>;
                            } else if (status === "outage") {
                                result = <td><CancelIcon className="outage-icon" /></td>;
                            } else {
                                result = <td><p>Unknown</p></td>
                            }

                            return <tr key={index}>
                                <td>{service.name}</td>
                                {result}
                            </tr>
                        }
                        )
                    }
                </tbody>
            </table>
        }
        {status === Status.FAILURE && (
            <p style={{ textAlign: "center" }}>FAILURE</p>
        )}
    </>
};

export default Services;
