import React from "react";

function TeamColumn({ conference, teams }) {
    return (
        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <h3 className="text-center pb-2">{conference}</h3>
            <ul className="list-unstyled container">
                {teams.map((team) => (
                    <li key={team.id} className="d-flex align-items-center py-2">
                        <a href={team.fields.url} className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                            <img src={team.fields.logo[0].url} alt={`Logo ${team.fields.name}`} width="50" height="50" />
                            <span className="ms-4">{team.fields.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeamColumn;
