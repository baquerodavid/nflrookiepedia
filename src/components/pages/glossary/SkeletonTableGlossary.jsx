import React from "react";
import Skeleton from "@mui/material/Skeleton";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: "0.875rem",
    width: 'auto',
}));

function SkeletonTableGlossary({ columnHeaders }) {
    const repeatCount = 20; // Number of skeleton rows you want

    const renderSkeletonCells = () => {
        return columnHeaders.map((header, index) => (
            <StyledTableCell key={index} align="left">
                <Skeleton animation="wave" variant="text" width="100%" />
            </StyledTableCell>
        ));
    };

    const renderSkeletonRows = () => {
        return Array.from({ length: repeatCount }, (_, index) => (
            <TableRow key={index}>
                {renderSkeletonCells()}
            </TableRow>
        ));
    };

    return (
        <TableBody>
            {renderSkeletonRows()}
        </TableBody>
    );
}

export default SkeletonTableGlossary;
