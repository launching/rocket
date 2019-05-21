import https from "./https";
export default class Store {
    constructor(url) {
        this.url = url;
        return this;
    }

    get(option) {
        return https
            .get(this.url, {
                params: {
                    _page: option.page,
                    _limit: option.limit
                }
            })
            .then(res => {
                return { total: res.headers["x-total-count"], data: res.data };
            });
    }

    delete(id) {
        return https.delete(`${this.url}/${id}`);
    }
}
