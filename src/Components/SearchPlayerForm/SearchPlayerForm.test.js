import React from 'react';
import { SearchPlayerForm } from './SearchPlayerForm';
import { shallow } from 'enzyme';
import { fetchFullName, fetchSingleName } from '../../apiCalls';

jest.mock('../../apiCalls.js');

describe('SearchPlayerForm', () => {
  let wrapper;

  beforeEach(() => {
    fetchFullName.mockImplementation(() => {
      return Promise.resolve({
        "search_player_all": {
            "copyRight": " Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt  ",
            "queryResults": {
                "created": "2020-01-12T21:44:24",
                "totalSize": "1",
                "row": {
                    "position": "3B",
                    "birth_country": "USA",
                    "weight": "180",
                    "birth_state": "NM",
                    "name_display_first_last": "Alex Bregman",
                    "college": "Louisiana State",
                    "height_inches": "0",
                    "name_display_roster": "Bregman",
                    "sport_code": "mlb",
                    "bats": "R",
                    "name_first": "Alex",
                    "team_code": "hou",
                    "birth_city": "Albuquerque",
                    "height_feet": "6",
                    "pro_debut_date": "2016-07-25T00:00:00",
                    "team_full": "Houston Astros",
                    "team_abbrev": "HOU",
                    "birth_date": "1994-03-30T00:00:00",
                    "throws": "R",
                    "league": "AL",
                    "name_display_last_first": "Bregman, Alex",
                    "position_id": "5",
                    "high_school": "Albuquerque Academy, Albuquerque, NM",
                    "name_use": "Alex",
                    "player_id": "608324",
                    "name_last": "Bregman",
                    "team_id": "117",
                    "service_years": "",
                    "active_sw": "Y"
                  }
              }
          }
      })
    });
    fetchSingleName.mockImplementation(() => {
      return Promise.resolve([
        {
          "position": "3B",
          "birth_country": "USA",
          "weight": "180",
          "birth_state": "NM",
          "name_display_first_last": "Alex Bregman",
          "college": "Louisiana State",
          "height_inches": "0",
          "name_display_roster": "Bregman",
          "sport_code": "mlb",
          "bats": "R",
          "name_first": "Alex",
          "team_code": "hou",
          "birth_city": "Albuquerque",
          "height_feet": "6",
          "pro_debut_date": "2016-07-25T00:00:00",
          "team_full": "Houston Astros",
          "team_abbrev": "HOU",
          "birth_date": "1994-03-30T00:00:00",
          "throws": "R",
          "league": "AL",
          "name_display_last_first": "Bregman, Alex",
          "position_id": "5",
          "high_school": "Albuquerque Academy, Albuquerque, NM",
          "name_use": "Alex",
          "player_id": "608324",
          "name_last": "Bregman",
          "team_id": "117",
          "service_years": "",
          "active_sw": "Y"
        }
      ])
    })
    wrapper = shallow(<SearchPlayerForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should change name state when handleChange is called', () => {
      const mockEvent = {
        target: {
          value: 'jose altuve'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual('jose altuve');
    });
  });

  describe('cleanSinglePlayer', () => {
    it('should return a player object', () => {
      const mockData = {
        "search_player_all": {
            "copyRight": " Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt  ",
            "queryResults": {
                "created": "2020-01-12T21:44:24",
                "totalSize": "1",
                "row": {
                    "position": "3B",
                    "birth_country": "USA",
                    "weight": "180",
                    "birth_state": "NM",
                    "name_display_first_last": "Alex Bregman",
                    "college": "Louisiana State",
                    "height_inches": "0",
                    "name_display_roster": "Bregman",
                    "sport_code": "mlb",
                    "bats": "R",
                    "name_first": "Alex",
                    "team_code": "hou",
                    "birth_city": "Albuquerque",
                    "height_feet": "6",
                    "pro_debut_date": "2016-07-25T00:00:00",
                    "team_full": "Houston Astros",
                    "team_abbrev": "HOU",
                    "birth_date": "1994-03-30T00:00:00",
                    "throws": "R",
                    "league": "AL",
                    "name_display_last_first": "Bregman, Alex",
                    "position_id": "5",
                    "high_school": "Albuquerque Academy, Albuquerque, NM",
                    "name_use": "Alex",
                    "player_id": "608324",
                    "name_last": "Bregman",
                    "team_id": "117",
                    "service_years": "",
                    "active_sw": "Y"
                  }
              }
          }
      };
      const expected = {
        id: '608324',
        name: 'Alex Bregman',
        team: 'Houston Astros',
        position: '3B',
        inches: '0',
        feet: '6',
        weight: '180',
        bats: 'R',
        throws: 'R'
      };
      expect(wrapper.instance().cleanSinglePlayer(mockData)).toEqual(expected);
    });
  });

  describe('cleanListOfPlayers', () => {
    it('should take an array of players and return an array of player objects', () => {
      const mockData = [{
        "position": "3B",
        "birth_country": "USA",
        "weight": "180",
        "birth_state": "NM",
        "name_display_first_last": "Alex Bregman",
        "college": "Louisiana State",
        "height_inches": "0",
        "name_display_roster": "Bregman",
        "sport_code": "mlb",
        "bats": "R",
        "name_first": "Alex",
        "team_code": "hou",
        "birth_city": "Albuquerque",
        "height_feet": "6",
        "pro_debut_date": "2016-07-25T00:00:00",
        "team_full": "Houston Astros",
        "team_abbrev": "HOU",
        "birth_date": "1994-03-30T00:00:00",
        "throws": "R",
        "league": "AL",
        "name_display_last_first": "Bregman, Alex",
        "position_id": "5",
        "high_school": "Albuquerque Academy, Albuquerque, NM",
        "name_use": "Alex",
        "player_id": "608324",
        "name_last": "Bregman",
        "team_id": "117",
        "service_years": "",
        "active_sw": "Y"
    }];
      const expected = [{
        id: '608324',
        name: 'Alex Bregman',
        team: 'Houston Astros',
        position: '3B',
        inches: '0',
        feet: '6',
        weight: '180',
        bats: 'R',
        throws: 'R'
      }];
      expect(wrapper.instance().cleanListOfPlayers(mockData)).toEqual(expected);
    });
  });

  describe('findPlayers', () => {
    let mockState;
    beforeEach(() => {
      mockState = {
        name: 'jose altuve'
      };
    });

    it('should invoke fetchFullName if the name state has two names', () => {
      wrapper.setState(mockState);
      wrapper.instance().findPlayers();
      expect(fetchFullName).toHaveBeenCalled();
    });

    it('should set searchedPlayerList to empty array', async () => {
      wrapper.setState(mockState);
      await wrapper.instance().findPlayers();

      expect(wrapper.state('searchedPlayerList')).toEqual([])
    });

    it('should set ErrorMessage state to empty string', async () => {
      wrapper.setState(mockState);
      await wrapper.instance().findPlayers();
      wrapper.instance().forceUpdate();

      expect(wrapper.state('errorMessage')).toEqual('')
    });

    it('should set the searchPlayer to a player object', async () => {
      const mockPlayer = {
        id: '608324',
        name: 'Alex Bregman',
        team: 'Houston Astros',
        position: '3B',
        inches: '0',
        feet: '6',
        weight: '180',
        bats: 'R',
        throws: 'R'
      }
      wrapper.setState(mockState);
      await wrapper.instance().findPlayers();

      expect(wrapper.state('searchedPlayer')).toEqual(mockPlayer)
    })

    it('should set the errorMessage state if searched player is not found', async () => {
      fetchFullName.mockImplementation(() => {
        return Promise.resolve({
          "search_player_all": {
              "copyRight": " Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt  ",
              "queryResults": {
                  "created": "2020-01-13T21:40:03",
                  "totalSize": "0"
              }
          }
      })
      });
      wrapper.setState(mockState);
      await wrapper.instance().findPlayers();
      expect(wrapper.state('errorMessage')).toEqual("Oops! Player not found or is no longer active..")
    });

    it('should invoke fetchSingleName if only one name is typed into the form', () => {
      const mockState = {
        name: 'jose'
      }
      wrapper.setState(mockState);
      wrapper.instance().findPlayers();
      expect(fetchSingleName).toHaveBeenCalled();
    });

    it('should set errorMessage state to empty string', async () => {
      const mockState = {
        name: 'jose'
      };

      wrapper.setState(mockState);
      await wrapper.instance().findPlayers();

      expect(wrapper.state('errorMessage')).toEqual('');
    });

    it('should set searchedPlayer state to null', async () => {
      const mockState = {
        name: 'jose'
      };

      wrapper.setState(mockState);
      await wrapper.instance().findPlayers();

      expect(wrapper.state('searchedPlayer')).toEqual(null);
    });

    it('should set the searchedPlayerList to an array of players',async () => {
      const mockState = {
        name: 'jose'
      };
      const expected = [
        {
          id: '608324',
          name: 'Alex Bregman',
          team: 'Houston Astros',
          position: '3B',
          inches: '0',
          feet: '6',
          weight: '180',
          bats: 'R',
          throws: 'R'
        }
      ]
      wrapper.setState(mockState);
      await wrapper.instance().findPlayers();

      expect(wrapper.state('searchedPlayerList')).toEqual(null);
    })
  });
})
