export const getTestingApi = async() => {

    const headers = new Headers({
        "x-rapidapi-host": "v3.football.api-sports.io",
        'x-rapidapi-key':'9bb6ee06e7f8b79d8b8f8eb776ae147c'
    });
    
    const resp = await fetch(`https://v3.football.api-sports.io/players/topassists?season=2024&league=140`, {
        method:'GET',
        headers: headers
    })

    const { response } = await resp.json();
    
    const playerStats = response.map( ( player ) => ({
            firstname: player.player.name,
            lastname: player.player.lastname,
            goals: player.statistics[0].goals.total,
            assists: player.statistics[0].goals.assists,
            team: player.statistics[0].team.name,
            drible: player.statistics[0].dribbles.success,
            dribnleAttempts: player.statistics[0].dribbles.attempts  
        })
    )

    //console.log(response);
    console.log(playerStats);



}