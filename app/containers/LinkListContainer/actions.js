/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
  TOGGLE_DRAWER
} from './constants';


export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links
  }
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message
  }
}
