export const loadingStatus = {
  UNINITIALIZED: 'uninitialized',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
};

export const isLoading = (status) => status === loadingStatus.UNINITIALIZED || status === loadingStatus.LOADING;
export const isLoaded = (status) => status === loadingStatus.LOADED;
export const isFailed = (status) => status === loadingStatus.FAILED;

export default loadingStatus;
