import * as urls from '../../config/urls';
import { serviceRoute } from '../serviceRoute.js';
import fetch from 'isomorphic-fetch';
const defaultFetchHeader = {
    mode: 'cors',
    credentials: 'include',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    }
};

function transformGetUrl(getUrl, paras) {
    let tUrl = `${getUrl}?`;
    for (const key in paras) {//用javascript的for/in循环遍历对象的属性
        tUrl +=`${key}=${paras[key]}&`;
    }
    tUrl = tUrl.substring(0, tUrl.lastIndexOf('&'));
    return tUrl;
}

export default function request({ dispatch }) {

    return (next) => async (action) => {
        const { type, payload = null, meta = {} } = action;
        if (!type || type.constructor !== Array) return next(action);
        const [BEGIN, SUCCESS, FAILURE] = action.type;
        let [modelPart, methodUrl, paras] = meta.fetch;

        dispatch({
            type: BEGIN,
            payload: payload
        });
        const fetchPartParams = { method: serviceRoute[modelPart][methodUrl][1] };

        let url = `${urls.api}/${serviceRoute[modelPart][methodUrl][0]}`;
        if (fetchPartParams.method=='get') {
            url=transformGetUrl(url,paras);
        } else if(fetchPartParams.method=='post') {
            fetchPartParams.body = JSON.stringify(paras);
        }    

        const fetchParams = {
            ...defaultFetchHeader,
            ...fetchPartParams
        };
         const response = await fetch(url, fetchParams);
        const json = await response.json();

        if (response.status >= 200 && response.status < 300) {
            dispatch({
                type: SUCCESS,
                payload: fetchParams.method === 'delete' ? payload : json
            });
        } else {
            dispatch({
                type: FAILURE,
                error: true,
                payload: fetchParams.method === 'delete' ? payload : json
            });
        }
    };
}
