import React, { useState, useEffect } from "react";
import PagesHeader from "../../layout/PagesHeader";
import TeamCard from "./TeamCard";
import Airtable from 'airtable';
import AFClogo from "../../../assets/images/AFC.svg";
import NFClogo from "../../../assets/images/NFC.svg";
import SkeletonTeamCard from "./SkeletonTeamCard";

function Teams() {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const base = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_NFLTEAMS_BASEID);

        base(process.env.REACT_APP_NFLTEAMS_TABLEID)
            .select({
                // Add any necessary filters, sorting options, or other parameters here
                sort: [
                    { field: "conference", direction: "asc" },
                    { field: "name", direction: "asc" }]
            })
            .eachPage((records, fetchNextPage) => {
                setTeams((prevTeams) => [...prevTeams, ...records]);
                setIsLoading(false);
                fetchNextPage();
            }, (err) => {
                if (err) {
                    console.error('Error retrieving records:', err);
                }
            });
    }, []);

    // Group teams by conference
    const groupedTeams = teams.reduce((acc, team) => {
        const conference = team.fields.conference;
        acc[conference] = acc[conference] || [];
        acc[conference].push(team);
        return acc;
    }, {});

    // Split the conferences into AFC and NFC arrays
    const AFC = Object.keys(groupedTeams).filter(conference => conference.startsWith('AFC'));
    const NFC = Object.keys(groupedTeams).filter(conference => conference.startsWith('NFC'));

    return (
        <div>
            <PagesHeader />
            <div className="container">
                <div className="row gx-5 mx-auto">
                    <div className="col my-3 mb-5">
                        <div className="col text-center d-flex justify-content-center align-items-center">
                            <img src={AFClogo} width="96" height="96" className="mx-3"></img>
                            <h2 className="display-5 fw-bold mx-3 my-0">AFC</h2>
                        </div>
                        {isLoading ? (
                            <>
                                <SkeletonTeamCard />
                            </>
                        ) : (
                            AFC.map((conference) => (
                                <TeamCard key={conference} conference={conference} teams={groupedTeams[conference]} />
                        )))}
                    </div>
                    <div className="col my-3 mb-5">
                        <div className="col text-center d-flex justify-content-center align-items-center">
                            <img src={NFClogo} width="96" height="96" className="mx-3"></img>
                            <h2 className="display-5 fw-bold mx-3 my-0">NFC</h2>
                        </div>
                        {isLoading ? (
                            <>
                                <SkeletonTeamCard />
                            </>
                        ) : (
                            NFC.map((conference) => (
                                <TeamCard key={conference} conference={conference} teams={groupedTeams[conference]} />
                        )))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;
