import React from "react";
import Skeleton from "@mui/material/Skeleton";
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from "@mui/material/styles";

function SkeletonSuperbowls() {
    const repeatCount = 25;
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
            width: "11%",// Set width for 3rd column (Equipo)
        },
        "&:nth-of-type(4)": {
            width: "5%" // Set width for 4th column (Resultado)
        },
        "&:nth-of-type(5)": {
            width: "11%", // Set width for 5th column (Equipo)
        },
        // Repeat the pattern for other columns as needed
    }));

    const renderSkeletonRows = () => {
        return Array.from({ length: repeatCount }, (_, index) => (
            <TableRow key={index}>
                <StyledTableCell align="center"><Skeleton animation="wave" variant="text" /></StyledTableCell>
                <StyledTableCell align="center"><Skeleton animation="wave" variant="text"  /></StyledTableCell>
                <StyledTableCell align="right"><Skeleton animation="wave" variant="text" /></StyledTableCell>
                <StyledTableCell align="center"><Skeleton animation="wave" variant="text" /></StyledTableCell>
                <StyledTableCell><Skeleton animation="wave" variant="text"/></StyledTableCell>
                <StyledTableCell><Skeleton animation="wave" variant="text" /></StyledTableCell>
                <StyledTableCell><Skeleton animation="wave" variant="text" /></StyledTableCell>
                <StyledTableCell><Skeleton animation="wave" variant="text" /></StyledTableCell>
            </TableRow>
        ));
    };

    return (
        <TableBody>
            {renderSkeletonRows()}
        </TableBody>
    );
}

export default SkeletonSuperbowls;
