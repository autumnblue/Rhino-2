import { createSelector } from 'reselect';

const getUsersIds = state => state.users.ids;
const getMeId = state => state.users.me;
const getUsersData = state => state.users.data;

export const getUsers = createSelector(
    [getUsersIds, getUsersData],
    (ids, data) => ids.map(id => data[id]),
);

export const getSessionUser = createSelector(
    [getMeId, getUsersData],
    (me, data) => data[me],
);
