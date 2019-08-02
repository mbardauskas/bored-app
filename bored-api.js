import {boredApiHost} from './config';

export class BoredAPI {
  constructor(injectedFetch = global.fetch) {
    this.fetch = injectedFetch;
  }

  fetchActivity = async () => {
    const response = await this.fetch(`${boredApiHost}/activity/`);
    const json = await response.json();
    return json.activity;
  }
}

export default new BoredAPI();
