import React, { useEffect, useState} from 'react';

export const FetchData = async (route = '', config = {method: 'GET', params: {}}) => {

    try {

        const requestConfigs = {
            method: config.method,
            headers: getHeader(),
        };

        if(config["method"] === 'POST' || config["method"] === 'PUT'){
            requestConfigs["body"] = config["params"] ? JSON.stringify(config["params"]) : "{}"
        }
        const requestUrl = getRequestUrl(route, {...config["params"]}, config["method"]);

        const res = await fetch(requestUrl, requestConfigs);
        const data = await handleSuccessResponse(res);

        return data;
    } catch (err) {
        throw handleErrorResponse(err)
    }

};

export function getRequestUrl(route, params, method){
    const url = process.env.BASE_URL+route;

    console.log("url", url)

    if (method === 'GET') {
        const queryParams = params ? Object.keys(params).map(key => key + '=' + params[key]).join('&') : "";

        return `${url}?${queryParams}`
    }

    return url
}

export function getHeader() {

    return {
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
    };
}

export async function handleSuccessResponse(response) {
    let status = response.status;

    if (status >= 200 && status < 300) {
        return await response.json();
    }

    //  trường hợp bad gateway sẽ trả về HTML chứ ko phải JSON
    let errorPayload = {};
    if (response.status === 502) {
        errorPayload = {message: 'Bad Gateway', code: 502};
    } else {
        errorPayload = await response.json();
    }

    console.log("errorPayload in handle", errorPayload);

    let error = new MyError(errorPayload);
    error.status = response.status;

    throw error;
}

export function handleErrorResponse(err) {
    let error = new MyError(err);
    error.status = err.status;

    if (err.name === 'AbortError') {
        error.message = 'Your network too slow';
        error.code = 408;
    }

    if (err.message === 'Network request failed') {
        error.message = 'Network request failed';
        error.code = 3001;
    }
    return error;
}

export function MyError(data) {

    if (typeof data === 'undefined') {
        this.message = 'Undefined error';
        this.code = 3001;
    } else {
        this.message = (data.message || data['error_description'] || data['error'] || 'Lỗi không xác định');
        this.code = (data.code || data.status);
        this.errors = (data.errors || []);

        if (this.errors.length > 0) {
            this.message = this.errors[0].field + ' ' + this.errors[0].message;
        }
    }
}

MyError.prototype = Error.prototype;
