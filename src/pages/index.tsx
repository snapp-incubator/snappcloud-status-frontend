import React, { useState, useEffect } from "react";

import AppBar from "src/components/AppBar";
import Services from "src/components/Services";

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    FAILURE = 'failure',
}

const Home = () => {
    const [status, setStatus] = useState<Status>(Status.LOADING);
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        try {
            setStatus(Status.LOADING)

            const req = await fetch('http://127.0.0.1:8080/api/v1/services');
            if (req.status != 200) {
                setStatus(Status.FAILURE)
                return setServices([]);
            }

            setStatus(Status.SUCCESS)
            const data = await req.json();
            return setServices(data.services);
        } catch (err) {
            setStatus(Status.FAILURE)
            console.log(err)
        }
    };

    useEffect(() => { fetchServices() }, [])

    const handleClick = (event: any) => {
        event.preventDefault();
        fetchServices();
    };

    return (
        <>
            <AppBar onClick={handleClick} />
            {status === Status.LOADING && (
                <p style={{ textAlign: "center" }}>Loading...</p>
            )}
            {status === Status.SUCCESS &&
                <div style={{ padding: "15px" }}>
                    <Services services={services} />
                </div>
            }
            {status === Status.FAILURE && (
                <p style={{ textAlign: "center" }}>FAILURE</p>
            )}
        </>
    );
}

export default Home;
