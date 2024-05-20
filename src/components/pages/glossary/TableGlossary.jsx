import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import SkeletonTableGlossary from './SkeletonTableGlossary';

function descendingComparator(a, b, orderBy) {
    // Check if the properties exist and are not null, if not, treat them as empty strings
    const valueA = a[orderBy] ? a[orderBy].toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : '';
    const valueB = b[orderBy] ? b[orderBy].toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : '';

    // Function to parse height in format X-Y to inches
    const parseHeight = (height) => {
        const [feet, inches] = height.split('-').map(Number);
        return feet * 12 + inches;
    };

    // Extract the first group of digits from the range and convert to inches
    const firstGroupHeightA = parseHeight(valueA.split(' ')[0].trim());
    const firstGroupHeightB = parseHeight(valueB.split(' ')[0].trim());

    // Compare the first group of digits in the Height table
    if (firstGroupHeightA < firstGroupHeightB) {
        return -1;
    }
    if (firstGroupHeightA > firstGroupHeightB) {
        return 1;
    }

    // Extract the first group of digits from the range in the Weight table
    const firstGroupWeightA = parseInt(valueA.split('-')[0].trim(), 10);
    const firstGroupWeightB = parseInt(valueB.split('-')[0].trim(), 10);

    // Compare the first group of digits in the Weight table
    if (firstGroupWeightA < firstGroupWeightB) {
        return -1;
    }
    if (firstGroupWeightA > firstGroupWeightB) {
        return 1;
    }

    // If the first group of digits are equal, compare the entire string
    return valueA.localeCompare(valueB, ['en', 'es'], { sensitivity: 'base' });
}

function getComparator(order, orderBy) {
    return order === 'asc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function TableGlossary({ columnHeaders, dataRows, headerKeyMap, isLoading }) {
    const defaultOrderBy = headerKeyMap[columnHeaders[0]] || Object.keys(headerKeyMap)[0];
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState(defaultOrderBy);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === headerKeyMap[property] && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(headerKeyMap[property]);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontWeight: 'bold',
            fontSize: "1.125rem",
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: ".875rem",
        },
        width: 'auto',
    }));

    return (
        <Paper elevation={16} sx={{ maxWidth: "90%" }} square={false} className="mx-auto my-5">
            <TableContainer sx={{ maxHeight: 1024 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columnHeaders.map((header) => (
                                <StyledTableCell
                                    key={header}
                                    align="left"
                                    sortDirection={orderBy === headerKeyMap[header] ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === headerKeyMap[header]}
                                        direction={order}
                                        onClick={(event) => handleRequestSort(event, header)}
                                    >
                                        {header}
                                    </TableSortLabel>
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {isLoading ? (
                        <SkeletonTableGlossary columnHeaders={columnHeaders} />
                    ) : (
                        <TableBody>
                            {stableSort(dataRows, getComparator(order, orderBy)).map((row, index) => (
                                <TableRow key={index} hover>
                                    {Object.keys(row).map((key, cellIndex) => {
                                        const cell = row[key];
                                        if (!cell) return null; // Check if cell is undefined or null
                                        return (
                                            <StyledTableCell key={cellIndex} align="left">
                                                {typeof cell === 'string' && cell.startsWith('http') ?
                                                    <img src={cell} alt="logo" style={{ width: '40px', height: '40px' }} />
                                                    : cell}
                                            </StyledTableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableGlossary;
