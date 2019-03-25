import axios from "axios";
import https from "./https";
export default class Store {
    constructor(url) {
        this.url = url;
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

    post() {}

    delete() {}

    put() {}

    patch() {}
}
