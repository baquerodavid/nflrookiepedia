import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import Link from "@mui/material/Link";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '@mui/material/Avatar';

function TeamCard({ teams }) {
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

    return (
        <div className="col my-3">
            {teams.map((team) => (
                <Card
                    key={team.id}
                    sx={{ backgroundColor: `${team.fields.color1}`, backgroundImage: `url(${team.fields.logoOpacity[0].url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "cover", }}
                    className="text-white my-4">
                    <CardHeader
                        avatar={
                            <Avatar alt={`Logo ${team.fields.name}`} src={team.fields.logo[0].url} sx={{ width: "96px", height: "96px" }} />
                        }
                        title={
                            <ThemeProvider theme={theme}>
                                <Typography variant="h4" className="ms-3">{team.fields.name}</Typography>
                            </ThemeProvider>
                        }
                        className="py-0"
                    />
                    <CardContent className="row align-items-center text-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 gy-3">
                        <div className="col">
                            <Typography variant="h5">{team.fields.superBowlChampions}</Typography>
                            <Typography variant="body1">Super Bowl</Typography>
                        </div>
                        <div className="col">
                            <Typography variant="h5">{team.fields.conferenceChampions}</Typography>
                            <Typography variant="body1">Títulos conferencia</Typography>
                        </div>
                        <div className="col">
                            <Typography variant="h5">{team.fields.divisionChampions}</Typography>
                            <Typography variant="body1">Títulos división</Typography>
                        </div>
                    </CardContent>
                    <CardActions className="px-3 justify-content-between">
                        <Link href={team.fields.url} underline="none" color={"#D9D9D9"} fontSize={"12px"} className="text-center footer-card-teams" target="_blank">Ir al sitio web
                            <OpenInNewIcon fontSize="12px" className="ms-2" />
                        </Link>
                        <div className="d-flex">
                            <a href={team.fields.twitter} className="text-white" target="_blank"><XIcon className="mx-3 footer-card-teams" fontSize="small" /></a>
                            <a href={team.fields.instagram} className="text-white" target="_blank"><InstagramIcon className="footer-card-teams" fontSize="small" /></a>
                        </div>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default TeamCard;
