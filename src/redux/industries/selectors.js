import { createSelector } from 'reselect';

const getIndustriesIds = state => state.industries.ids;
export const getIndustriesData = state => state.industries.data;

export const getIndustries = createSelector(
    [getIndustriesIds, getIndustriesData],
    (ids, data) => ids.map(id => data[id]),
);
