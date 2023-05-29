import AppBar from "src/components/AppBar";
import Services from "src/components/Services";

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    FAILURE = 'failure',
}

const Home = ({ status, services }: { status: Status, services: Array<any> }) => {
    return (
        <>
            <AppBar />
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

export const getServerSideProps = async () => {
    const failure = { status: Status.FAILURE, services: [] }

    try {
        const req = await fetch(process.env.BACKEND_URL + '/api/v1/services');
        if (req.status != 200) {
            return { props: failure };
        }

        const data = await req.json();
        return {
            props: {
                status: Status.SUCCESS,
                services: data.services,
            }
        };
    } catch (_) {
        return { props: failure };
    }
}

export default Home;
