export class BoredAPI {
  constructor(injectedFetch) {
    this.fetch = injectedFetch;
  }

  async fetchActivity() {
    const response = await this.fetch('http://www.boredapi.com/api/activity/');
    const json = await response.json();
    return json.activity;
  }
}

export default new BoredAPI(global.fetch);
