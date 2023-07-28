import React from "react";
import './matchCard.css'

const MatchCard = (props)=> {
    const {recentMatchesData} = props;
    const {
        team_logo,
        team_name,
        team_result,
        team_status
    } = recentMatchesData

    return (
        <div>
            <div className="container mainDiv">
                <div className="">
                    <div className="">
                        <div className="d-flex flex-column  m-4 text-center justify-content-center align-items-center">
                            <img src={team_logo} alt={team_name} className="logos-card mt-4"></img>
                            <span className="mt-4">{team_name}</span>
                            <span className="mt-4"> {team_result}</span>
                            <span className={`mt-4 ${team_status}`}>{team_status}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MatchCard;