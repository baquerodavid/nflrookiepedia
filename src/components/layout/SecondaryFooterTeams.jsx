import React, { useState, useEffect } from "react";
import Airtable from 'airtable';
import SecFooterTeamColumn from './SecFooterTeamColumn';

function SecondaryFooterTeams() {
    const [teams, setTeams] = useState([]);

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
        <div className="py-5 bg-dark text-white" id="teams">
            <div className="container">
                <div className="row mb-3 mx-0 justify-content-center">
                    {/* Render AFC teams */}
                    {AFC.map((conference) => (
                        <SecFooterTeamColumn key={conference} conference={conference} teams={groupedTeams[conference]} />
                    ))}
                </div>
                <div className="row mb-3 mx-0 justify-content-center">
                    {/* Render NFC teams */}
                    {NFC.map((conference) => (
                        <SecFooterTeamColumn key={conference} conference={conference} teams={groupedTeams[conference]} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SecondaryFooterTeams;
