//const league = ['española', 'italiana', 'germana', 'francesa', 'inglesa'];

export const getLeagueNumber = (league) => {
    
    const leagueMap = {
        Spain:140,
        Italy: 135,
        Germany: 78,
        France: 61,
        England: 39
    }

    return leagueMap[league]

}