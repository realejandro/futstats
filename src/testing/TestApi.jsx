import React, { useEffect } from 'react'
import { getLeagueNumber } from '../helpers/getLeagueNumber'
import { getTestingApi } from '../helpers/getTestingApi'

export const TestApi = () => {

  useEffect(() => {
    getTestingApi().then( (data) => data);
  }, [])
  
    
    
  return (
    
    <div style={{backgroundColor:"white"}}>
      TestApi
    </div>
  )
}
