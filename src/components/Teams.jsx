import React from "react";
import ARI from "../assets/images/teams/ARI.svg";
import ATL from "../assets/images/teams/ATL.svg";
import BAL from "../assets/images/teams/BAL.svg";
import BUF from "../assets/images/teams/BUF.svg";
import CAR from "../assets/images/teams/CAR.svg";
import CHI from "../assets/images/teams/CHI.svg";
import CIN from "../assets/images/teams/CIN.svg";
import CLE from "../assets/images/teams/CLE.svg";
import DAL from "../assets/images/teams/DAL.svg";
import DEN from "../assets/images/teams/DEN.svg";
import DET from "../assets/images/teams/DET.svg";
import GB from "../assets/images/teams/GB.svg";
import HOU from "../assets/images/teams/HOU.svg";
import IND from "../assets/images/teams/IND.svg";
import JAX from "../assets/images/teams/JAX.svg";
import KC from "../assets/images/teams/KC.svg";
import LA from "../assets/images/teams/LA.svg";
import LAC from "../assets/images/teams/LAC.svg";
import LV from "../assets/images/teams/LV.svg";
import MIA from "../assets/images/teams/MIA.svg";
import MIN from "../assets/images/teams/MIN.svg";
import NE from "../assets/images/teams/NE.svg";
import NO from "../assets/images/teams/NO.svg";
import NYG from "../assets/images/teams/NYG.svg";
import NYJ from "../assets/images/teams/NYJ.svg";
import PHI from "../assets/images/teams/PHI.svg";
import PIT from "../assets/images/teams/PIT.svg";
import SEA from "../assets/images/teams/SEA.svg";
import SF from "../assets/images/teams/SF.svg";
import TB from "../assets/images/teams/TB.svg";
import TEN from "../assets/images/teams/TEN.svg";
import WAS from "../assets/images/teams/WAS.svg";

function Teams() {
    return (
        <div className="py-5 bg-dark text-white" id="teams">
            <div className="container">
                {/* AFC Conference */}
                <div className="row mb-5 mx-0 justify-content-center">
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <h3 className="text-center pb-2">AFC NORTE</h3>
                        <ul className="list-unstyled container">
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.baltimoreravens.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={BAL} alt="Logo Baltimore Ravens" width="50" height="50" />
                                    <span className="ms-4">Baltimore Ravens</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.cincinnatibengals.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={CIN} alt="Logo Cincinnati Bengals" width="50" height="50" />
                                    <span className="ms-4">Cincinnati Bengals</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.clevelandbrowns.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={CLE} alt="Logo Cleveland Browns" width="50" height="50" />
                                    <span className="ms-4">Cleveland Browns</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.pittsburghsteelers.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={PIT} alt="Logo Pittsburgh Steelers" width="50" height="50" />
                                    <span className="ms-4">Pittsburgh Steelers</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <h3 className="text-center pb-2">AFC ESTE</h3>
                        <ul className="list-unstyled container">
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.buffalobills.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={BUF} alt="Logo Buffalo Bills" width="50" height="50" />
                                    <span className="ms-4">Buffalo Bills</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.miamidolphins.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={MIA} alt="Logo Miami Dolphins" width="50" height="50" />
                                    <span className="ms-4">Miami Dolphins</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.patriots.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={NE} alt="Logo New England Patriots" width="50" height="50" />
                                    <span className="ms-4">New England Patriots</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.newyorkjets.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={NYJ} alt="Logo New York Jets" width="50" height="50" />
                                    <span className="ms-4">New York Jets</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <h3 className="text-center pb-2">AFC SUR</h3>
                        <ul className="list-unstyled container">
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.houstontexans.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={HOU} alt="Logo Houston Texans" width="50" height="50" />
                                    <span className="ms-4">Houston Texans</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.colts.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={IND} alt="Logo Indianapolis Colts" width="50" height="50" />
                                    <span className="ms-4">Indianapolis Colts</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.jaguars.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={JAX} alt="Logo Jacksonville Jaguars" width="50" height="50" />
                                    <span className="ms-4">Jacksonville Jaguars</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.tennesseetitans.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={TEN} alt="Logo Tennessee Titans" width="50" height="50" />
                                    <span className="ms-4">Tennessee Titans</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <h3 className="text-center pb-2">AFC OESTE</h3>
                        <ul className="list-unstyled container">
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.denverbroncos.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={DEN} alt="Logo Denver Broncos" width="50" height="50" />
                                    <span className="ms-4">Denver Broncos</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.chiefs.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={KC} alt="Logo Kansas City Chiefs" width="50" height="50" />
                                    <span className="ms-4">Kansas City Chiefs</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.raiders.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={LV} alt="Logo Las Vegas Raiders" width="50" height="50" />
                                    <span className="ms-4">Las Vegas Raiders</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="http://www.chargers.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={LAC} alt="Logo Los Angeles Chargers" width="50" height="50" />
                                    <span className="ms-4">Los Angeles Chargers</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* NFC Conference */}
                <div className="row mx-0 justify-content-center">
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <h3 className="text-center pb-2">NFC NORTE</h3>
                        <ul className="list-unstyled container">
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.chicagobears.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={CHI} alt="Logo Chicago Bears" width="50" height="50" />
                                    <span className="ms-4">Chicago Bears</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.detroitlions.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={DET} alt="Logo Detroit Lions" width="50" height="50" />
                                    <span className="ms-4">Detroit Lions</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.packers.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={GB} alt="Logo Green Bay Packers" width="50" height="50" />
                                    <span className="ms-4">Green Bay Packers</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.vikings.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={MIN} alt="Logo Minnesota Vikings" width="50" height="50" />
                                    <span className="ms-4">Minnesota Vikings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <h3 className="text-center pb-2">NFC ESTE</h3>
                        <ul className="list-unstyled container">
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.dallascowboys.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={DAL} alt="Logo Dallas Cowboys" width="50" height="50" />
                                    <span className="ms-4">Dallas Cowboys</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.giants.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={NYG} alt="Logo New York Giants" width="50" height="50" />
                                    <span className="ms-4">New York Giants</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.philadelphiaeagles.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={PHI} alt="Logo Philadelphia Eagles" width="50" height="50" />
                                    <span className="ms-4">Philadelphia Eagles</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.commanders.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={WAS} alt="Logo Washington Commanders" width="50" height="50" />
                                    <span className="ms-4">Washington Commanders</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <h3 className="text-center pb-2">NFC SUR</h3>
                        <ul className="list-unstyled container">
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.atlantafalcons.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={ATL} alt="Logo Atlanta Falcons" width="50" height="50" />
                                    <span className="ms-4">Atlanta Falcons</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.panthers.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={CAR} alt="Logo Carolina Panthers" width="50" height="50" />
                                    <span className="ms-4">Carolina Panthers</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.neworleanssaints.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={NO} alt="Logo New Orleans Saints" width="50" height="50" />
                                    <span className="ms-4">New Orleans Saints</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.buccaneers.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={TB} alt="Logo Tampa Bay Buccaneers" width="50" height="50" />
                                    <span className="ms-4">Tampa Bay Buccaneers</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <h3 className="text-center pb-2">NFC OESTE</h3>
                        <ul className="list-unstyled container">
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.azcardinals.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={ARI} alt="Logo Arizona Cardinals" width="50" height="50" />
                                    <span className="ms-4">Arizona Cardinals</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.therams.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={LA} alt="Logo Los Angeles Rams" width="50" height="50" />
                                    <span className="ms-4">Los Angeles Rams</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.49ers.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={SF} alt="Logo San Francisco 49ers" width="50" height="50" />
                                    <span className="ms-4">San Francisco 49ers</span>
                                </a>
                            </li>
                            <li className="d-flex align-items-center py-2">
                                <a href="https://www.seahawks.com" className="d-flex align-items-center link-light text-decoration-none link-opacity-75-hover" target="_blank">
                                    <img src={SEA} alt="Logo Seattle Seahawks" width="50" height="50" />
                                    <span className="ms-4">Seattle Seahawks</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Teams;
