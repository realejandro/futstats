import React, { useState } from 'react'
import { Navbar } from '../playerapp/components'
import { useDispatch, useSelector } from 'react-redux'
import { addLeagueToList, setLastName } from '../store/players';

export const TestComponent = () => {
  

  const { name, lastName } = useSelector( state => state.players);
  
  const dispatch = useDispatch();
  

  
  
  return (
    <>
        <Navbar/>
        <p>{"Testing...."}</p>
          <div>
            <p>Testing redux</p>
            <p>{ name }</p>
          <div>
            <p>Change Lastname</p>
            <p>{ lastName }</p>
            <button onClick={ () => dispatch( setLastName("Charizard") ) }> Change </button>
          </div>
          <div>
            <button onClick={() => dispatch( addLeagueToList("Española"))}> AddLeague </button>
          </div>

        </div>
        
    </>
  )
}
