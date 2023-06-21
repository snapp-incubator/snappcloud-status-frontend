import AppBar from "src/components/AppBar";
import Services from "src/components/Services";

// process.env.BACKEND_URL
const regions = [
    { name: "Cab Teh-1", url: "http://127.0.0.1:8080" },
    { name: "Cab Teh-2", url: "http://127.0.0.1:8080" },
    { name: "SnappGroup", url: "http://127.0.0.1:8080" }
];

const Home = () => {
    return (
        <>
            <AppBar />
            <div className="container">
                {
                    regions.map((service) =>
                        <div style={{ padding: "15px" }}>
                            <Services title={service.name} backend={service.url} />
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Home;
