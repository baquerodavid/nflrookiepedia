import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function SkeletonFormationCard() {
    const repeatCount = 7;

    const renderSkeletonStack = () => {
        return Array.from({ length: repeatCount }, (_, index) => (
            <Stack key={index} spacing={1.5} alignItems="left" width="100%">
                <Card variant="outlined" className="mx-auto my-3" sx={{ width: '75%' }}>
                    <CardHeader
                        title={<Skeleton animation="wave" height={30} width="80%" />}
                        subheader={<Skeleton animation="wave" height={20} width="40%" />}
                    />
                    <Skeleton height={280} animation="wave" variant="rectangular" />
                    <CardContent>
                        <Skeleton animation="wave" height={10} width="80%" />
                    </CardContent>
                    <CardActions disableSpacing>
                        <Skeleton variant="rounded" height={35} width={35} />
                        <Skeleton variant="rounded" height={35} width={35} sx={{ marginLeft: 'auto' }} />
                    </CardActions>
                </Card>
            </Stack>
        ));
    };

    return (
        <Stack width="100%">
            {renderSkeletonStack()}
        </Stack>
    );
}

export default SkeletonFormationCard;
