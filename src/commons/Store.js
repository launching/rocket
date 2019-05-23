import https from "./https";
export default class Store {
    constructor(url) {
        this.url = url;
        return this;
    }

    get(option) {
        const params = {};
        return https
            .get(this.url, {
                params
            })
            .then(res => {
                let data = res.data;
                let total = res.data.length;
                if (res.headers["x-total-count"]) {
                    total = res.headers["x-total-count"];
                }

                return { total, data };
            });
    }

    delete(id) {
        return https.delete(`${this.url}/${id}`);
    }
}
