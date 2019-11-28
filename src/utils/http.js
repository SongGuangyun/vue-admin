import axios from "axios";
import qs from "qs";

const Axios = axios.create({
  baseURL: "http://common.work/bapi/",
  timeout: 5000,
  responseType: "json",
  withCredentials: false
});
Axios.defaults.headers.common["Accept"] = "application/json";
Axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";


Axios.interceptors.request.use(
  config => {
    if (
      config.method === "post" ||
      config.method === "put"
      // config.method === "delete"
    ) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */
Axios.interceptors.response.use(result => {
  return result;
}, error => {
  return Promise.reject(error);
});

export default {

  delete: (requestUrl, params, callback) => {
    Axios.delete(requestUrl, {
        params: params
      })
      .then(response => {
        return callback(response.data);
      });
  },

  put: (requestUrl, params, callback) => {
    Axios.put(requestUrl, params)
      .then(response => {
        return callback(response.data);
      });
  },
  post: (requestUrl, params) => {
    return new Promise((resolve, reject) => {
      Axios.post(requestUrl, params)
        .then(response => {
          return resolve(response.data);
        }).catch(error => {
          return reject(error);
        });
    });
  },
  get: (requestUrl, params) => {
    return new Promise((resolve, reject) => {
      Axios.get(requestUrl, {
          params: params
        })
        .then(response => {
          return resolve(response.data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
  Axios
};