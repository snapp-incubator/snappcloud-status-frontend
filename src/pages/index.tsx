import AppBar from "src/components/AppBar";
import Services from "src/components/Services";

// const regions = [
//     { id: "teh1", name: "Cab Teh-1" },
//     { id: "teh2", name: "Cab Teh-2" },
//     { id: "snappgroup", name: "SnappGroup" }
// ];

const Home = () => {
    return (
        <>
            <AppBar />
            <div style={{ padding: "15px" }}>
                {/* process.env.BACKEND_URL */}
                <Services title="Cab Teh-1" backend="localhost:8080" />
            </div>
            <div style={{ padding: "15px" }}>
                <Services title="Cab Teh-2" backend="localhost:8080" />
            </div>
            <div style={{ padding: "15px" }}>
                <Services title="SnappGroup" backend="localhost:8080" />
            </div>
        </>
    );
}

export default Home;
