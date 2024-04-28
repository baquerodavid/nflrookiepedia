import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function SkeletonTeamCard() {
    const repeatCount = 16;

    const renderSkeletonStack = () => {
        return Array.from({ length: repeatCount }, (_, index) => (
            <Stack key={index}>
                <Card
                    sx={{
                        border: 1,
                        borderColor: "#D9D9D9"
                    }}
                    className="text-white my-4">
                    <CardHeader
                        avatar={
                            <Skeleton animation="wave" variant="circular" width={96} height={96} sx={{ margin: 2 }} />
                        }
                        title={
                            <Skeleton animation="wave" variant="rounded" height={45} width="90%" />
                        }
                        className="py-0"
                    />
                    <CardContent className="row align-items-center text-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 gy-3">
                        <div className="col">
                            <Skeleton animation="wave" variant="rounded" height={50} width={50} className="mx-auto" />
                        </div>
                        <div className="col">
                            <Skeleton animation="wave" variant="rounded" height={50} width={50} className="mx-auto" />
                        </div>
                        <div className="col">
                            <Skeleton animation="wave" variant="rounded" height={50} width={50} className="mx-auto" />
                        </div>
                    </CardContent>
                    <CardActions className="px-3 justify-content-between">
                        <Skeleton animation="wave" variant="rounded" height={10} width="20%" className="text-center" />
                        <div className="d-flex">
                            <Skeleton animation="wave" variant="rounded" height={20} width={20} className="mx-3" />
                            <Skeleton animation="wave" variant="rounded" height={20} width={20} />
                        </div>
                    </CardActions>
                </Card>
            </Stack>
        ));
    };

    return (
        <Stack>
            {renderSkeletonStack()}
        </Stack>
    );
}

export default SkeletonTeamCard;
