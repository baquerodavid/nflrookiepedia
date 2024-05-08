import React from "react";
import { useLocation } from "react-router-dom";
import Divider from '@mui/material/Divider';
import ScrollToTopButton from "../ScrollToTopButton";
import routeConfig from "../routeConfig";

function PagesHeader() {
    const location = useLocation();
    const path = location.pathname;

    // Find the title based on the current path
    const getTitle = (path) => {
        const route = routeConfig.find(route => route.path === path);
        return route ? route.title : "";
    };

    return (
        <div>
            <ScrollToTopButton />
            <div className="container-fluid pages-header">
                <h2 className="py-4 my-0">{getTitle(path)}</h2>
                <Divider
                    sx={{
                        width: '100%',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: '#FFC007',
                    }}
                />
            </div>
        </div>
    );
}

export default PagesHeader;
