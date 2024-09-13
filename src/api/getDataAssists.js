import { getLeagueNumber } from "../helpers/getLeagueNumber";

export const getDataAssistsFromLeague = async( league ) => {
    
    const numLeague = getLeagueNumber(league);

    const headers = new Headers({
        "x-rapidapi-host": "v3.football.api-sports.io",
        'x-rapidapi-key':'9bb6ee06e7f8b79d8b8f8eb776ae147c'
    });
    
    const resp = await fetch(`https://v3.football.api-sports.io/players/topassists?season=2024&league=${ numLeague }`, {
        method:'GET',
        headers: headers
    })

    const { response } = await resp.json();
    
    const playersData = response.map( data => ({
        id: data.player.id,
        compname : data.player.name,
        goals : data.statistics[0].goals.total,
        assists : data.statistics[0].goals.assists
    }))

    
    return playersData;

}