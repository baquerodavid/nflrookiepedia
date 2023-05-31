import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function SkeletonCard() {
  const repeatCount = 9;

  const renderSkeletonStack = () => {
    return Array.from({ length: repeatCount }, (_, index) => (
      <Stack key={index} spacing={1.5} alignItems="left" width={400}>
        <Skeleton variant="rounded" height={35} />
        <Skeleton height={40} width="80%" />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton variant="rounded" height={25} width={60} />
      </Stack>
    ));
  };

  return (
      <Stack
        width="100%"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 6 }}
        useFlexGap
        flexWrap="wrap"
    >
      {renderSkeletonStack()}
      </Stack>
  );
}

export default SkeletonCard;
