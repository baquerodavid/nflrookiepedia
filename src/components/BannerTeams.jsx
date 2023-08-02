import React from "react";
import backgroundBannerTeams from "../assets/images/stadium3backgrounddark2.png";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function BannerTeams() {
    return (
        <div style={{
                background: `url(${backgroundBannerTeams}) 100%/cover no-repeat`,
            }}>
            <div className="p-5 text-center">
                <div className="container">
                    <p className="col-lg-8 mx-auto mb-5 lead text-white fw-medium">
                        ¿No conoces a los equipos, conferencias y divisiones? Haz clic en el botón de abajo y... ¡touchdown! Te llevaremos directo a la zona de los equipos. ¡Que empiece el espectáculo!
                    </p>
                    <div className="d-flex justify-content-center">
                        <a href="#teams" className="d-flex align-items-center link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover btn-gototeams">
                            <h4 className="mx-3 btnanchorteams">Ir a equipos y conferencias</h4>
                            <ArrowDownwardIcon id="btn-arrowgototeams" fontSize="large" sx={{ color: "#FFD558" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerTeams;