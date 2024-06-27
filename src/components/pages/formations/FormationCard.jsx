import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import { marked } from 'marked';

function FormationCard( {formations} ) {
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            {formations.map((formation) => (
                <Card key={formation.id} sx={{ maxWidth: '75%' }} variant="outlined" orientation="horizontal" className="mx-auto my-3">
                    <CardHeader
                        title={formation.fields.name}
                        subheader={formation.fields.type === 'Offense' ? 'Ataque' : 'Defensa'}
                    />
                    <CardMedia
                        component="img"
                        height="280"
                        image={formation.fields.img[0].url}
                        alt={`Formación ${formation.fields.name}`}
                        sx={{ objectFit: "contain", backgroundColor: "#115F18" }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {formation.fields.summary}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="feedback">
                            <a href="https://forms.gle/ugVTiYBMzhBx3vio8" aria-label="feedback" target="_blank">
                                <FeedbackIcon color="action" />
                            </a>
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="mostrar más"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography align='justify'>
                                <div dangerouslySetInnerHTML={{ __html: marked(formation.fields.description) }}></div>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </div>
    );
}

export default FormationCard;
