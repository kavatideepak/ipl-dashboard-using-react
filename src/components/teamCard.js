import React from "react";
import './teamCard.css'
import { useNavigate } from "react-router-dom";
const Teamcard = (props)=> 
{
    const {teamsList}= props;
    const {id, team_image,team_name} = teamsList;



    const navigate = useNavigate();
    const handleTeamClick = (id) => {
        navigate(`/teammatch/${id}`)
    }

    return(
        <div className="d-flex innerDiv p-2" onClick={((e)=>handleTeamClick(id))}>
            <div>
                <img src={team_image} alt="img" className="logos"></img>

            </div>
            <div>
                <span> {team_name}</span>
            </div>
          
        </div>
    )
}

export default Teamcard;