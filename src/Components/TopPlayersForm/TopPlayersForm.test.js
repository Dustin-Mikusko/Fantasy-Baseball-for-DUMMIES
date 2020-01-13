import React from 'react';
import TopPlayersForm from './TopPlayersForm';
import { shallow } from 'enzyme';
import { fetchTop25 } from '../../apiCalls';


jest.mock('../../apiCalls.js');

describe('TopPlayersForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TopPlayersForm
      
    />);
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should update state when handleChange is called', () => {
      const mockState = {
        stat: '',
        season: ''
      };
      const mockEvent = {
        target: {
          name: 'stat',
          value: 'bb'
        }
      };

      wrapper.find('.stat-select').simulate('change', mockEvent);

      expect(wrapper.state('stat')).toEqual('bb');
    });
  })

  describe('getTopPlayers', () => {
    beforeEach(() => {
      fetchTop25.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            "leader_hitting_repeater": {
              "copyRight": " Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt  ",
              "leader_hitting_mux": {
                  "sort_column": "'hr'",
                  "queryResults": {
                      "created": "2020-01-13T03:02:17",
                      "totalSize": "28",
                      "row": [
                          {
                              "hr": "53",
                              "team_name": "New York Mets",
                              "name_display_first_last": "Pete Alonso",
                              "player_id": "624413"
                          }
                      ]
                    }
                  }
                }
            })
          })
      });
    });
    it('should invoke getTopPlayers on button click', () => {
      wrapper.instance().getTopPlayers = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.find('.top-players-btn').simulate('click');

      expect(wrapper.instance().getTopPlayers).toHaveBeenCalled()
    });

    it('should invoke fetchTop25 when getTopPlayers is fired', () => {
      const mockState = {
        season: '2019',
        stat: 'hr'
      }
      wrapper.setState(mockState);
      wrapper.instance().getTopPlayers();
      expect(fetchTop25).toHaveBeenCalledWith('2019', 'hr');
    });

    it('should set players state with ')
  })
})
