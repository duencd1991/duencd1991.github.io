import axios from "axios";
import { history } from '../../src/helper';

const SERVER = "http://207.148.122.234:3300";

export function makeGetRequest(config, successCallback, failCallback) {
  let link_api = SERVER + config.url;
  axios.get(link_api)
    .then(res => {
      if (!res.data.isSucess && res.data.description === "Authorization Required") {
        history.push("/Login");
      } else {
        successCallback(res);
      }
    }).catch(function (error) {
      failCallback(error);
    });
}

export function makePostRequest(config, successCallback, failCallback) {
  let link_api = SERVER + config.url;
  let requestConfig = {
    method: 'POST',
    url: link_api,
    header: config.headers,
    data: config.data
  };
  axios(requestConfig)
    .then(res => {
      if (!res.data.isSucess && res.data.description === "Authorization Required") {
        history.push("/Login");
      } else {
        successCallback(res);
      }
    }).catch(function (error) {
      failCallback(error);
    });
}

export function makeDeleteRequest(config, successCallback, failCallback) {
  let link_api = SERVER + config.url;
  let requestConfig = {
    method: 'DELETE',
    url: link_api,
    header: config.headers
  };
  axios(requestConfig)
    .then(res => {
      if (!res.data.isSucess && res.data.description === "Authorization Required") {
        history.push("/Login");
      } else {
        successCallback(res);
      }
    }).catch(function (error) {
      failCallback(error);
    });
}