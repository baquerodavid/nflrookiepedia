import React, { useState, useEffect } from "react";
import TableGlossary from "./TableGlossary";
import PagesHeader from "../../layout/PagesHeader";
import { Button } from '@mui/material';
import Airtable from "airtable";

function Glossary() {
    const [teamRecords, setTeamRecords] = useState([]);
    const [positionRecords, setPositionRecords] = useState([]);
    const [statsRecords, setStatsRecords] = useState([]);
    const [heightRecords, setHeightRecords] = useState([]);
    const [weightRecords, setWeightRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const headerKeyMap = {
        // Teams table
        "División": "Division",
        "Abreviatura": "Abbreviation",
        "Equipo": "Team",
        "Logo": "Logo",
        // Positions table
        "Posición": "Position",
        "En Inglés": "PositionEN",
        "En Español": "PositionES",
        "Unidad": "Unit",
        // Stats table
        "Estadística": "Stat",
        "En Inglés": "StatEN",
        "En Español": "StatES",
        // Measures table
        "Pies-Pulgadas (X' Y\")": "FeetInches",
        "Centímetros (cm)": "Centimeters",
        "Libras (lbs)": "Pounds",
        "Kilos (kg)": "Kilograms"
    };

    useEffect(() => {
        const baseTeams = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_NFLTEAMS_BASEID);

        baseTeams(process.env.REACT_APP_NFLTEAMS_TABLEID)
            .select({
                sort: [{ field: "conference", direction: "asc" },
                    { field: "name", direction: "asc" }]
            })
            .eachPage((newRecords, fetchNextPage) => {
                const formattedRecords = newRecords.map(record => ({
                    Division: record.fields.conference,
                    Abbreviation: record.fields.shortName,
                    Team: record.fields.name,
                    Logo: record.fields.logo[0].url
                }));
                setTeamRecords(prevRecords => [...prevRecords, ...formattedRecords]);
                setIsLoading(false);
                fetchNextPage();
            }, (err) => {
                if (err) {
                    console.error('Error retrieving records:', err);
                }
            });
    }, []);

    useEffect(() => {
        const basePositions = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_ROOKIEPEDIA_BASEID);

        basePositions(process.env.REACT_APP_ROOKIEPEDIA_POSITIONSABBR_TABLEID)
            .select({
                sort: [{ field: "position", direction: "asc" }]
            })
            .eachPage((newRecords, fetchNextPage) => {
                const formattedRecords = newRecords.map(record => ({
                    Position: record.fields.position,
                    PositionEN: record.fields.nameEN,
                    PositionES: record.fields.nameES,
                    Unit: record.fields.teamUnit
                }));
                setPositionRecords(prevRecords => [...prevRecords, ...formattedRecords]);
                setIsLoading(false);
                fetchNextPage();
            }, (err) => {
                if (err) {
                    console.error('Error retrieving records:', err);
                }
            });
    }, []);

    useEffect(() => {
        const baseStats = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_ROOKIEPEDIA_BASEID);

        baseStats(process.env.REACT_APP_ROOKIEPEDIA_STATSABBR_TABLEID)
            .select({
                sort: [{ field: "stat", direction: "asc" }]
            })
            .eachPage((newRecords, fetchNextPage) => {
                const formattedRecords = newRecords.map(record => ({
                    Stat: record.fields.stat,
                    StatEN: record.fields.nameEN,
                    StatES: record.fields.nameES
                }));
                setStatsRecords(prevRecords => [...prevRecords, ...formattedRecords]);
                setIsLoading(false);
                fetchNextPage();
            }, (err) => {
                if (err) {
                    console.error('Error retrieving records:', err);
                }
            });
    }, []);

    useEffect(() => {
        const baseHeight = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_ROOKIEPEDIA_BASEID);

        baseHeight(process.env.REACT_APP_ROOKIEPEDIA_HEIGHT_TABLEID)
            .select({
                sort: [{ field: "foot", direction: "asc" }]
            })
            .eachPage((newRecords, fetchNextPage) => {
                const formattedRecords = newRecords.map(record => ({
                    FeetInches: record.fields.foot,
                    Centimeters: record.fields.centimeter
                }));
                setHeightRecords(prevRecords => [...prevRecords, ...formattedRecords]);
                setIsLoading(false);
                fetchNextPage();
            }, (err) => {
                if (err) {
                    console.error('Error retrieving records:', err);
                }
            });
    }, []);

    useEffect(() => {
        const baseWeight = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_ROOKIEPEDIA_BASEID);

        baseWeight(process.env.REACT_APP_ROOKIEPEDIA_WEIGHT_TABLEID)
            .select({
                sort: [{ field: "pounds", direction: "asc" }]
            })
            .eachPage((newRecords, fetchNextPage) => {
                const formattedRecords = newRecords.map(record => ({
                    Pounds: record.fields.pounds,
                    Kilograms: record.fields.kg
                }));
                setWeightRecords(prevRecords => [...prevRecords, ...formattedRecords]);
                setIsLoading(false);
                fetchNextPage();
            }, (err) => {
                if (err) {
                    console.error('Error retrieving records:', err);
                }
            });
    }, []);

    // Group teams by conference using startsWith
    const groupedTeams = teamRecords.reduce((acc, team) => {
        if (team.Division) {
            const conferenceKey = team.Division.startsWith('AFC') ? 'AFC' : 'NFC';
            acc[conferenceKey] = acc[conferenceKey] || [];
            acc[conferenceKey].push({
                Division: team.Division,
                Abbreviation: team.Abbreviation,
                Team: team.Team,
                Logo: team.Logo
            });
        }
        return acc;
    }, {});

    const AFC = groupedTeams['AFC'] || [];
    const NFC = groupedTeams['NFC'] || [];

    return (
        <div>
            <PagesHeader />
            <div className="container-fluid">
                <div className="container-fluid my-5 pages-header">
                    <p className="lead">Aquí podrás encontrar desde la abreviatura del nombre de los equipos hasta detalles específicos como la altura en pies y centímetros, y el peso en libras y kilogramos. Utiliza este recurso para familiarizarte con los términos más comunes y las abreviaturas más utilizadas en el football 🏈.</p>
                    <div className="container text-center justify-content-center my-5">
                        <Button onClick={() => document.getElementById('teams-section').scrollIntoView({ behavior: 'smooth' })} className="mx-3 mb-3 mb-md-0" sx={{ fontSize: '1.125rem' }} color="inherit">
                            Equipos
                        </Button>
                        <Button onClick={() => document.getElementById('positions-stats-section').scrollIntoView({ behavior: 'smooth' })} className="mx-3 mb-3 mb-md-0" sx={{ fontSize: '1.125rem' }} color="inherit">
                            Posiciones y Estadísticas
                        </Button>
                        <Button onClick={() => document.getElementById('measures-section').scrollIntoView({ behavior: 'smooth' })} className="mx-3" sx={{ fontSize: '1.125rem' }} color="inherit">
                            Medidas
                        </Button>
                    </div>
                </div>
                <div className="row p-5 background-glossary" id="teams-section">
                    <h2 className="text-center fw-bold pb-3">Equipos</h2>
                    <div className="col py-3">
                        <h4 className="text-center fw-bold">AFC</h4>
                        <TableGlossary
                            columnHeaders={["División", "Abreviatura", "Equipo", "Logo"]}
                            dataRows={AFC}
                            headerKeyMap={headerKeyMap}
                            isLoading={isLoading} />
                    </div>
                    <div className="col py-3">
                        <h4 className="text-center fw-bold">NFC</h4>
                        <TableGlossary
                            columnHeaders={["División", "Abreviatura", "Equipo", "Logo"]}
                            dataRows={NFC}
                            headerKeyMap={headerKeyMap}
                            isLoading={isLoading} />
                    </div>
                </div>
                <div className="row p-5" id="positions-stats-section">
                    <h2 className="text-center fw-bold pb-3">Posiciones y Estadísticas</h2>
                    <div className="col py-3">
                        <h4 className="text-center fw-bold">POSICIONES</h4>
                        <TableGlossary
                            columnHeaders={["Posición", "En Inglés", "En Español", "Unidad"]}
                            dataRows={positionRecords}
                            headerKeyMap={headerKeyMap}
                            isLoading={isLoading} />
                    </div>
                    <div className="col py-3">
                        <h4 className="text-center fw-bold">ESTADÍSTICAS</h4>
                        <TableGlossary
                            columnHeaders={["Estadística", "En Inglés", "En Español"]}
                            dataRows={statsRecords}
                            headerKeyMap={headerKeyMap}
                            isLoading={isLoading} />
                    </div>
                </div>
                <div className="row p-5 background-glossary justify-content-center" id="measures-section">
                    <h2 className="text-center fw-bold pb-3">Medidas</h2>
                    <div className="col py-3 table-measure">
                        <h4 className="text-center fw-bold">ALTURA</h4>
                        <TableGlossary
                            columnHeaders={["Pies-Pulgadas (X' Y\")", "Centímetros (cm)"]}
                            dataRows={heightRecords}
                            headerKeyMap={headerKeyMap}
                            isLoading={isLoading} />
                    </div>
                    <div className="col py-3 table-measure">
                        <h4 className="text-center fw-bold">PESO</h4>
                        <TableGlossary
                            columnHeaders={["Libras (lbs)", "Kilos (kg)"]}
                            dataRows={weightRecords}
                            headerKeyMap={headerKeyMap}
                            isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Glossary;
