class JsonFile {
    instance
    json

    async get_instance(){
        if (typeof this.instance === "object") {
            return this.instance;
        }
        await fetch("../menu.json")
            .then(resp => resp.json())
            .then(js_resp => this.json = js_resp)
        this.instance = this
        return this.instance
    }

    get(key) {
        return this.json[key];
    }
}