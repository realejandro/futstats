import React, { useState, useEffect } from 'react'
import { getDataFromLeague } from '../api/getDataScorers';
import DataPlayers from './DataPlayers';
import { useDispatch, useSelector } from 'react-redux';
import { isSelectedLeague } from '../store/players';
import { NotSelectedLeague } from '../playerapp/views/NotSelectedLeague';
import { getDataAssistsFromLeague } from '../api/getDataAssists';



const PlayersList = () => {
    //9bb6ee06e7f8b79d8b8f8eb776ae147c football API
  const { isSelected } = useSelector( ( state ) => state.players )
  const dispatch = useDispatch();
  const [league, setLeague] = useState("");
  const [playersList, setPlayersList] = useState([]);
  const [assistList, setAssistList ] = useState([]);

  useEffect( () => {
    getDataFromLeague( league ).then( (data) => { 
      setPlayersList(data)
    } );
    getDataAssistsFromLeague( league ).then( (data) => { 
      setAssistList( data ) 
    } );
  }, [league])

  
  


  return (
    
    <div className='container'>
      <div className='row p-4'>
        <h1>Players Stats App</h1>
        <div>Select league:</div>
        <select  
          className='form-select border-dark'
          value={ league }
          onChange={ (e) => setLeague( e.target.value ) }
        >
          <option value="">Select a league</option>
          <option value="Spain">Liga BBVA</option>
          <option value="Italy">Serie A</option>
          <option value="England">Pemiere League</option>
          <option value="France">Ligue 1</option>
          <option value="Bundesliga"> Bundesliga </option>
        </select>
      </div>

      <>
        { 
          ( league === "" ) 
          ? <NotSelectedLeague/> 
          : <DataPlayers listOfPlayers={ playersList } listOfAssists = { assistList } /> 
        }
      </>
    </div>
  )
}

export default PlayersList
/* <DataPlayers listOfPlayers={ playersList } listOfAssists = { assistList } /> */
