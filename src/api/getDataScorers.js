import { getLeagueNumber } from "../helpers/getLeagueNumber";

export const getSpainPlayerScorers = async() => {

    const headers = new Headers({
        "x-rapidapi-host": "v3.football.api-sports.io",
        'x-rapidapi-key':'9bb6ee06e7f8b79d8b8f8eb776ae147c'
    });
    
    const resp = await fetch('https://v3.football.api-sports.io/players/topscorers?league=140&season=2023', {
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

export const getBundesligaPlayerScorers = async() => {

    const headers = new Headers({
        "x-rapidapi-host": "v3.football.api-sports.io",
        'x-rapidapi-key':'9bb6ee06e7f8b79d8b8f8eb776ae147c'
    });
    
    const resp = await fetch('https://v3.football.api-sports.io/players/topscorers?league=78&season=2023', {
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


//TODO
// Hacer que este component me mande el solo las 5 ligas
export const getDataFromLeague = async( league ) => {
    
    const numLeague = getLeagueNumber(league);

    const headers = new Headers({
        "x-rapidapi-host": "v3.football.api-sports.io",
        'x-rapidapi-key':'9bb6ee06e7f8b79d8b8f8eb776ae147c'
    });
    
    const resp = await fetch(`https://v3.football.api-sports.io/players/topscorers?league=${ numLeague }&season=2024`, {
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


