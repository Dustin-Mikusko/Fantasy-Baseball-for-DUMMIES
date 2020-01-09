export const fetchSingleName = name => {
  const urlName = `'${name}%25`;
  fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${urlName}'`)
    .then(res => {
      if (!res.ok) {
        throw Error('Uh oh! Player not found or player is no longer active')
      }
      return res.json();
    })
}

export const fetchFullName = name => {
  fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part=${name}`)
    .then(res => {
      if (!res.ok) {
        throw Error('Uh Oh! Player not found or player is no longer active')
      }
      return res.json();
    })
}

export const fetchSeasonHittingStats = (year, id) => {
  fetch(`http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season=${year}&player_id=${id}`)
    .then(res => {
      if (!res.ok) {
        throw Error('Uh Oh! Player not found or player is no longer active')
      }
      return res.json();
    })
}

export const fetchTop25 = (year, stat) => {
  fetch(`http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=25&game_type='R'&season=${year}&sort_column=${stat}&leader_hitting_repeater.col_in=rbi&leader_hitting_repeater.col_in=player_id&leader_hitting_repeater.col_in=name_display_first_last&leader_hitting_repeater.col_in=team_name`)
    .then(res => {
        if (!res.ok) {
          throw Error('Opps! There was an error on the play..')
        }
        return res.json();
    })
}


