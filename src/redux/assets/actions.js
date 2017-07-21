import * as c from './constants';

const endpoint = 'assets/';

export const createAsset = file => ({
  types: [c.CREATE_ASSET, c.CREATE_ASSET_SUCCESS, c.CREATE_ASSET_FAIL],
  api: ({ post }) => post(endpoint, { file }),
});
