import { createSelector } from 'reselect';

import { getProfileData } from 'src/redux/profiles/selectors';

const getUsersIds = state => state.users.ids;
const getCurrentUserId = state => state.users.id;
const getMeId = state => state.users.me;
const getUsersData = state => state.users.data;

export const getUsers = createSelector(
    [getUsersIds, getUsersData, getProfileData],
    (ids, data, profileData) => ids.map(id => ({
      ...data[id],
      profile: data[id].profile ? profileData[data[id].profile] : {},
    })),
);

export const getSessionUser = createSelector(
    [getMeId, getUsersData],
    (me, data) => data[me],
);

export const getCurrentUser = createSelector(
  [getCurrentUserId, getUsersData],
  (id, data) => data[id],
);
