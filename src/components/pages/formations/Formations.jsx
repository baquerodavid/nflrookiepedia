import React, { useState, useEffect } from "react";
import PagesHeader from "../../layout/PagesHeader";
import Airtable from 'airtable';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormationCard from './FormationCard';
import SkeletonFormationCard from './SkeletonFormationCard';
import { createTheme } from '@mui/material/styles';

function Formations() {
    const theme = createTheme();

    theme.typography.h4 = {
        fontSize: '1.5rem',
        '@media (max-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.125rem',
        },
    };

    const [formations, setFormations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const base = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_ROOKIEPEDIA_BASEID);

        base(process.env.REACT_APP_ROOKIEPEDIA_FORMATIONS_TABLEID)
            .select({
                // Add any necessary filters, sorting options, or other parameters here
                sort: [
                    { field: "type", direction: "asc" },
                    { field: "name", direction: "asc" }]
            })
            .eachPage((records, fetchNextPage) => {
                setFormations((prevFormations) => [...prevFormations, ...records]);
                setIsLoading(false);
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
            <div className="container-fluid">
                <div className="container-fluid custom-pages-header">
                    <p className="lead text-center">¡Bienvenidos a la sección más estratégica de la web! Aquí podrás sumergirte en las formaciones más populares del football, tanto ofensivas como defensivas. Cada formación viene acompañada de su título, una imagen y una descripción detallada. Aprovecha este recurso para dominar las estrategias clave de la NFL y llevar tu conocimiento al siguiente nivel.</p>
                </div>
            </div>
            <Grid container spacing={4}  className="mx-auto mb-5" sx={{ width: "90%"}} >
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" component="h2" className="mb-5 text-center">Formaciones Defensivas</Typography>
                    {isLoading ? (
                        <SkeletonFormationCard />
                    ) : (
                        <FormationCard formations={formations.filter(f => f.fields.type === 'Defense')} />
                    )}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" component="h2" className="mb-5 text-center">Formaciones Ofensivas</Typography>
                    {isLoading ? (
                        <SkeletonFormationCard />
                    ) : (
                        <FormationCard formations={formations.filter(f => f.fields.type === 'Offense')} />
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default Formations;
