import dev from './dev.json';
import prod from './prod.json';

const devHost = 'localhost';
const prodHost = 'prototype.api.stelita.app';

const envConfig = () => {
    const host = window.location.hostname;

    if (host === devHost) return dev;
    else if (host === prodHost) return prod;
}

export default envConfig();