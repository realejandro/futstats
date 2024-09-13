import React from 'react'

const DataPlayers = ( props ) => {
  

    /*
        const limitedScore = props.listOfPlayers.slice(0, 6);
        console.log(limitedScore);
    */

  return (
    <div className='container'>
        <div className='row'>
            <h2>League logo & League Name</h2>
            <div className='col-6'>
                <h1>Top Scorers</h1>
                <table className='table table-dark table-hover table-borderless'>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Goals</th>
                            <th scope="col">Assists</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.listOfPlayers.map( player => (
                            <tr key={ player.id }>
                                <td>{ player.compname }</td>
                                <td>{ player.goals }</td>
                                <td>{ player.assists }</td>
                            </tr>
                        )).slice(0, 10)
                    }
                    </tbody>
                </table>
            </div>

            <div className='col-6'>
                <h1>Top Assists</h1>
                <table className='table table-dark table-hover table-borderless'>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Goals</th>
                            <th scope="col">Assists</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.listOfAssists.map( player => (
                            <tr key={ player.id }>
                                <td>{ player.compname }</td>
                                <td>{ player.goals }</td>
                                <td>{ player.assists }</td>
                            </tr>
                        )).slice(0, 10)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}



 

export default DataPlayers;
