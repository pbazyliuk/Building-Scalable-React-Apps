/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'libraries',
      description: 'links to useful open source libraries',
    },
    {
      name: 'apss',
      description: 'links to new adn exciting apps',
    },
    {
      name: 'libraries',
      description: 'links to programming related news articles',
    }
  ]
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    default:
      return state;
  }
}

export default navigationContainerReducer;
