import { createSelector } from 'reselect';

const getUsersIds = state => state.users.ids;
const getUsersData = state => state.users.data;

export const getUsers = createSelector(
    [getUsersIds, getUsersData],
    (ids, data) => ids.map(id => data[id]),
);
