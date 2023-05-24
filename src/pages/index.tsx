import type { NextPage } from "next";

import AppHead from "src/components/AppHead";
import AppBar from "src/components/AppBar";

const Home: NextPage = () => {
    return (
        <>
            <AppHead />
            <AppBar />
        </>
    );
}

export default Home;
