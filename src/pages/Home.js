import React from 'react';
import InfoWindow from "../components/InfoWindow/InfoWindow";
import InfoTiles from "../components/InfoTiles";

function Home() {
    return (
        <div className="text-center">
            <InfoWindow />
            <InfoTiles />
        </div>
    );
}

export default Home;