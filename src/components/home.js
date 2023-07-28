import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Teamcard from "./teamCard";
import LoadingSpinner from "./spinner";

import "./home.css";

function Home() {
  const [teamsList, setTeamsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const api = "https://apis.ccbp.in/ipl";
    const response = await axios.get(api);
    const dataInObject = response.data;

    const apiData = dataInObject.teams.map((each) => ({
      team_name: each.name,
      team_image: each.team_image_url,
      id: each.id,
    }));
    setTeamsList(apiData);
    setIsLoading(false);
  };

  console.log(isLoading);

  function renderTeamList()
  {
    return (
        <ul className="row">
          {teamsList.map((teams) => (
            <div className="col-md-6" key={teams.id}>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                  <Teamcard teamsList={teams} />
                </div>
              </div>
            </div>
          ))}
        </ul>
    )
  }


  return (
    <div className="container mainContainer">
      <div>
      <div className="text-center ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="logo"
         className=""></img>
        <h1>IPL Dashboard</h1>
      </div>
      
      {isLoading? <LoadingSpinner /> : renderTeamList()}
     
      </div>
    </div>
  );
}

export default Home;
