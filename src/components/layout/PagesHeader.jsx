import React from "react";
import Divider from '@mui/material/Divider';
import ScrollToTopButton from "../ScrollToTopButton";

function PagesHeader() {
    return (
        <div>
            <ScrollToTopButton />
            <div className="container my-3">
                <h2>Equipos</h2>
                <Divider className="my-3"
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
