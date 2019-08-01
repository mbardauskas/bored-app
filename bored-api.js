export class BoredAPI {
  constructor(injectedFetch = global.fetch) {
    this.fetch = injectedFetch;
  }

  fetchActivity = async () => {
    const response = await this.fetch('http://www.boredapi.com/api/activity/');
    const json = await response.json();
    return json.activity;
  }
}

export default new BoredAPI();
