import React, { useState, useEffect } from "react";
import { postData } from "seed/api";
import { API_URL } from "settings";
import View from "../../views/Roman/FormRoman";


function CharactersRoman({ processId }) {

    const [state, setState] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/processes/${processId}/characters`).then(data => data.json()).then(response => {
            return setState(response.characters)
        })
    }, [])

    return (
        <div className="card">
            <div className="card-header justify-content-center">
                <h3 className="card-header-title">Proceso {processId}</h3>
            </div>
            <div className="card-body justify-content-center">
                <h3 className="justify-content-center">Caracteres únicos</h3>
                <br/>
                <input type="text" readonly value={state.slice(0).reverse().join().replace(/,/g, "")} 
                    className="form-control" style={{textAlign:"center", height: "5rem"}}/>
            </div>
        </div>     
    )

}

export default CharactersRoman;