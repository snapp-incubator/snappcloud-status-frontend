import AppBar from "src/components/AppBar";
import Services from "src/components/Services";

const regions = [
    { name: "Cab Teh-1", url: process.env.TEH1_BACKEND_URL! },
    { name: "Cab Teh-2", url: process.env.TEH2_BACKEND_URL! },
    { name: "SnappGroup", url: process.env.SNAPPGROUP_BACKEND_URL! }
];

const Home = () => {
    return (
        <>
            <AppBar />
            <div className="container">
                {
                    regions.map((service, index) =>
                        <div key={index} style={{ padding: "15px" }}>
                            <Services title={service.name} backend={service.url} />
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Home;
