import React, { useState, useEffect } from "react";
import PagesHeader from "../../layout/PagesHeader";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import Airtable from "airtable";
import SkeletonSuperbowls from "./SkeletonSuperbowls";

function Superbowls() {
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontWeight: 'bold',
            fontSize: "1.125rem",
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: ".875rem",
        },
        width: 'auto', // Set a default width for all columns
        "&:nth-of-type(2)": {
            width: "6%", // Set width for 2nd column (Fecha)
        },
        "&:nth-of-type(3)": {
            width: "11%" ,// Set width for 3rd column (Equipo)
        },
        "&:nth-of-type(4)": {
            width: "5%" // Set width for 4th column (Resultado)
        },
        "&:nth-of-type(5)": {
            width: "11%", // Set width for 5th column (Equipo)
        },
        // Repeat the pattern for other columns as needed
    }));

    useEffect(() => {
        const base = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_NFLTEAMS_BASEID);

        base(process.env.REACT_APP_NFLTEAMS_SUPERBOWLS_TABLEID)
            .select({
                // Add any necessary filters, sorting options, or other parameters here
                sort: [{ field: "date", direction: "asc" }]
            })
            .eachPage((records, fetchNextPage) => {
                setRecords(records);
                setIsLoading(false); // Set isLoading to false when data fetching is completed
                fetchNextPage();
            }, (err) => {
                if (err) {
                    console.error('Error retrieving records:', err);
                }
            });
    }, []);

    return (
        <div>
            <PagesHeader />
            <Paper elevation={3} sx={{ maxWidth: "80%" }} className="mx-auto">
                <TableContainer className="my-5" sx={{ maxHeight: 1024 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">SB</StyledTableCell>
                                <StyledTableCell align="center">Fecha</StyledTableCell>
                                <StyledTableCell align="right">Campeón</StyledTableCell>
                                <StyledTableCell align="center">Resultado</StyledTableCell>
                                <StyledTableCell>Subcampeón</StyledTableCell>
                                <StyledTableCell>Estadio</StyledTableCell>
                                <StyledTableCell>MVP</StyledTableCell>
                                <StyledTableCell>Jugadas destacadas</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {isLoading ? (
                            <>
                                <SkeletonSuperbowls />
                            </>
                        ) : (
                            <TableBody>
                                {records.map((record) => (
                                    <TableRow key={record.id} hover>
                                        <StyledTableCell align="center">{record.fields.superBowl}</StyledTableCell>
                                        <StyledTableCell align="center">{record.fields.fechaES}</StyledTableCell>
                                        <StyledTableCell align="right">{record.fields.teamWinner}</StyledTableCell>
                                        <StyledTableCell align="center">{record.fields.result}</StyledTableCell>
                                        <StyledTableCell>{record.fields.teamLoser}</StyledTableCell>
                                        <StyledTableCell>{record.fields.venue}</StyledTableCell>
                                        <StyledTableCell>{record.fields.MVP}</StyledTableCell>
                                        <StyledTableCell>{record.fields.highlights}</StyledTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            )}
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default Superbowls;
