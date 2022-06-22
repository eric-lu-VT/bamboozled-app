import axios from 'axios';
import Constants from 'expo-constants';

import { requestTimeout } from '../../utils/constants';

export const createBackendAxiosRequest = async (config) => axios({
  baseURL: `${Constants.manifest.extra.BACKEND_URL}`,
  timeout: requestTimeout,
  withCredentials: true,
  ...config
});