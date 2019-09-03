import {boredApiUrl} from './config';

export default (fetch) => ({
    async fetchActivity() {
        const response = await fetch(boredApiUrl);
        const json = await response.json();
        return json.activity;
    }
});