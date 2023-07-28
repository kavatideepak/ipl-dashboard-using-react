import React from "react";
import './latestMatch.css';

const LatestMatch =  (props)=> {

    const {latestMatchdata}=props;
    const {
        competingTeam,
        competingTeamLogo,
        date,
        firstInnings,
        manOfTheMatch,
        secondInnings,
        umpires,
        venue,
        result,
      } = latestMatchdata;

    return (
        <div className="container ">
            <h6 className="latest">Latest Matches</h6>
            <div className="row bigContainer">
                
                <div className="col-md-5">
                    <div className="leftCont">
                    <h4 className="mt-4">{competingTeam}</h4>
                    <h5 className="mt-4">{date}</h5>
                    <h6 className="mt-3">{venue}</h6>
                    <h6 className="mt-3">{result}</h6>
                    </div>
                    
                </div>
                <div className="col-md-3  align-self-center">
                    <img src={competingTeamLogo} alt={competingTeam} className="logos-latest align-self-center">
                    </img>
                </div>
                <div className="col-md-4">

                    <div className=" text-end m-5">
                    <h4 className="mt-2">First Innings</h4>
                    <span className="mt-5"> {firstInnings}</span>
                    <h4 className="mt-2">Second Innings</h4>
                    <span>{secondInnings}</span>
                    <h4>Man of the match</h4>
                    <span>{manOfTheMatch}</span>
                    <h4>Umpires</h4>
                    <span className="mt-5">{umpires}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default LatestMatch;