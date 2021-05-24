import React from 'react';
import PlayerStats from "./PlayerStats";
import PlayerTable from "./PlayerTable";
import Combobox from "./Combobox";

const Home = () => {
    const teamName = 'Merica';
    return (
        <div className="home">
            <h1>{teamName}'s Dashboard</h1>
            <PlayerStats />
            <Combobox />
            <PlayerTable />
        </div>
    );
};

export default Home;
