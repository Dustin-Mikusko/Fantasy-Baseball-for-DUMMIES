export const fetchSingleName = name => {
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mlb-data.p.rapidapi.com",
      "x-rapidapi-key": "1b5b2533a1msh5cb04fc7ae14a5fp1cb4bdjsnca3f21f97e9d"
    }
  };
  const urlName = `${name}%25`;
  return fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${urlName}'`, options)
    .then(res => {
      if (!res.ok) {
        console.log('oh hi')
        throw Error('Uh oh! Player not found or player is no longer active')
      }
      console.log('oh hello')
      return res.json();
    })
}

export const fetchFullName = name => {
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mlb-data.p.rapidapi.com",
      "x-rapidapi-key": "1b5b2533a1msh5cb04fc7ae14a5fp1cb4bdjsnca3f21f97e9d"
    }
  };
  return fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${name}'`, options)
    .then(res => {
      if (!res.ok) {
        throw Error('Uh Oh! Player not found or player is no longer active')
      }
      return res.json();
    })
}

export const fetchSeasonHittingStats = (year, id) => {
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mlb-data.p.rapidapi.com",
      "x-rapidapi-key": "1b5b2533a1msh5cb04fc7ae14a5fp1cb4bdjsnca3f21f97e9d"
    }
  };
  return fetch(`http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season=${year}&player_id=${id}`, options)
    .then(res => {
      if (!res.ok) {
        throw Error('Uh Oh! Player not found or player is no longer active')
      }
      return res.json();
    })
}

export const fetchTop25 = (year, stat) => {
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mlb-data.p.rapidapi.com",
      "x-rapidapi-key": "1b5b2533a1msh5cb04fc7ae14a5fp1cb4bdjsnca3f21f97e9d"
    }
  };
  return fetch(`http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=25&game_type='R'&season=${year}&sort_column=${stat}&leader_hitting_repeater.col_in=rbi&leader_hitting_repeater.col_in=player_id&leader_hitting_repeater.col_in=name_display_first_last&leader_hitting_repeater.col_in=team_name`, options)
    .then(res => {
        if (!res.ok) {
          throw Error('Opps! There was an error on the play..')
        }
        return res.json();
    })
}


