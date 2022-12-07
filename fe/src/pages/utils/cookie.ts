import cookie from 'react-cookies';

const expires = new Date();
expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);

const options = {
    path: '/',
    expires,
    maxAge: 60 * 60 * 24 * 7,
    secure: true
};

export const getCookie = (key: string) => {
    return cookie.load(key);
};

export const setCookie = (key: string, value: string) => {
    cookie.save(key, value, options);
};

export const removeCookie = (key: string) => {
    cookie.remove(key, options);
};
