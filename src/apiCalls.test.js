import { fetchSingleName, fetchFullName, fetchSeasonHittingStats } from  './apiCalls'; 

describe('apiCalls', () => {

  describe('fetchSingleName', () => {
    let mockResponse, mockOptions;

    beforeEach(() => {
      mockOptions = {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": "1b5b2533a1msh5cb04fc7ae14a5fp1cb4bdjsnca3f21f97e9d"
        }
      };
      mockResponse = {
        "search_player_all": {
          "copyRight": " Copyright 2017 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt  ",
          "queryResults": {
            "created": "2017-12-11T15:11:55",
            "totalSize": "1",
            "row": {
              "position": "LF",
              "birth_country": "Cuba",
              "weight": "220",
              "birth_state": "",
              "name_display_first_last": "Yoenis Cespedes",
              "college": "",
              "height_inches": "10",
              "name_display_roster": "Cespedes, Y",
              "sport_code": "mlb",
              "bats": "R",
              "name_first": "Yoenis",
              "team_code": "nyn",
              "birth_city": "Granma",
              "height_feet": "5",
              "pro_debut_date": "2012-03-28T00:00:00",
              "team_full": "New York Mets",
              "team_abbrev": "NYM",
              "birth_date": "1985-10-18T00:00:00",
              "throws": "R",
              "league": "NL",
              "name_display_last_first": "Cespedes, Yoenis",
              "position_id": "7",
              "high_school": "",
              "name_use": "Yoenis",
              "player_id": "493316",
              "name_last": "Cespedes",
              "team_id": "121",
              "service_years": "",
              "active_sw": "Y"
            }
          }
        }
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    it('should call fetch with the correct URL', () => {
      fetchSingleName('altuve');

      expect(window.fetch).toHaveBeenCalledWith("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='altuve%25'", mockOptions);
    });
    
    it('should return a player object', () => {
      expect(fetchSingleName('cespedes')).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ok: false})
      });

      expect(fetchSingleName()).rejects.toEqual(Error('Uh oh! Player not found or player is no longer active'));
    });
  });

  describe('fetchFullName', () => {
    let mockResponse, mockOptions;

    beforeEach(() => {
      mockResponse = {
        "search_player_all": {
            "copyRight": " Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt  ",
            "queryResults": {
                "created": "2020-01-09T16:16:16",
                "totalSize": "1",
                "row": {
                    "position": "2B",
                    "birth_country": "Venezuela",
                    "weight": "165",
                    "birth_state": "",
                    "name_display_first_last": "Jose Altuve",
                    "college": "",
                    "height_inches": "6",
                    "name_display_roster": "Altuve",
                    "sport_code": "mlb",
                    "bats": "R",
                    "name_first": "Jose",
                    "team_code": "hou",
                    "birth_city": "Maracay",
                    "height_feet": "5",
                    "pro_debut_date": "2011-07-20T00:00:00",
                    "team_full": "Houston Astros",
                    "team_abbrev": "HOU",
                    "birth_date": "1990-05-06T00:00:00",
                    "throws": "R",
                    "league": "AL",
                    "name_display_last_first": "Altuve, Jose",
                    "position_id": "4",
                    "high_school": "",
                    "name_use": "Jose",
                    "player_id": "514888",
                    "name_last": "Altuve",
                    "team_id": "117",
                    "service_years": "",
                    "active_sw": "Y"
                }
            }
        }
    };
    mockOptions =  {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "mlb-data.p.rapidapi.com",
        "x-rapidapi-key": "1b5b2533a1msh5cb04fc7ae14a5fp1cb4bdjsnca3f21f97e9d"
      }
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    });
    });

    it('should call fetch with the correct URL', () => {
      fetchFullName('jose altuve', mockOptions);

      expect(window.fetch).toHaveBeenCalledWith("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='jose altuve'", mockOptions)
    });

    it('should return a player object', () => {
      expect(fetchFullName('jose altuve')).resolves.toEqual(mockResponse);
    });

    it('should return an error message if the Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ok: false});
      });

      expect(fetchFullName('jose altuve')).rejects.toEqual(Error('Uh Oh! Player not found or player is no longer active'))
    })
  })
})
