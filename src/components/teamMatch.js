import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LatestMatch from "./latestMatch";
import MatchCard from "./matchCard";
import LoadingSpinner from "./spinner";
import "./teamMatch.css"

const Teammatch = () => {
    const { id } = useParams();
    const [matchesData, setMatchesData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [latestMatchdata, setLatestMatchdata] = useState([]);
    const [recentMatchesData, setRecentMatchesData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`https://apis.ccbp.in/ipl/${id}`)
        const fetchedData = response.data;
        const teamsData = {
            teamBannerUrl: fetchedData.team_banner_url,
            latestMatchDetails: {
                id: fetchedData.latest_match_details.id,
                competingTeam: fetchedData.latest_match_details.competing_team,
                competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
                date: fetchedData.latest_match_details.date,
                firstInnings: fetchedData.latest_match_details.first_innings,
                manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
                matchStatus: fetchedData.latest_match_details.match_status,
                result: fetchedData.latest_match_details.result,
                secondInnings: fetchedData.latest_match_details.second_innings,
                umpires: fetchedData.latest_match_details.umpires,
                venue: fetchedData.latest_match_details.venue,
            }

        }

        console.log(teamsData.latestMatchDetails);
        const latestData = teamsData.latestMatchDetails;
        const latestMatchesarray = [latestData]

        setMatchesData(teamsData);
        setLatestMatchdata(latestMatchesarray);
        setIsLoading(false)

    }

    const fetchRecent = async () => {
        const response = await axios.get(`https://apis.ccbp.in/ipl/${id}`)
        const fetchedData = response.data;
        const recentMatchee = fetchedData.recent_matches;
        console.log(recentMatchee);
        const finalrecentData = recentMatchee.map(each => ({
            team_logo: each.competing_team_logo,
            team_name: each.competing_team,
            team_result: each.result,
            team_status: each.match_status

        }));
        console.log(finalrecentData);
        setRecentMatchesData(finalrecentData);

    }

    useEffect(() => {
        fetchData();
        fetchRecent();
    }, [])


    const { teamBannerUrl } = matchesData;
    console.log(recentMatchesData);


    function renderTeamMatches()
    {
        return(
            <div className={`container ${id}`}>
            <div className="banner ">
                <img src={teamBannerUrl} alt="" className="imageSetting"></img>


                <ul className="">
                    {latestMatchdata.map((teams) =>
                    (
                        <div className="">
                            <LatestMatch
                                latestMatchdata={teams}
                                key={teams.id} />

                        </div>

                    )
                    )}


                </ul>
                <ul className="row " >
                    {recentMatchesData.map((teams) =>
                    (
                        <div className="col-md-4 ">
                            <MatchCard
                                recentMatchesData={teams}
                                key={teams.id} />

                        </div>

                    )
                    )}
                </ul>
            </div>
        </div>
        )
    }

    return (
        <div>

{isLoading? <LoadingSpinner /> : renderTeamMatches()}
       


        </div>
    )
}

export default Teammatch;
