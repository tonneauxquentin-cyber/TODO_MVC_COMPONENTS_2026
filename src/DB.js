export default class DB {
    static setApiURL(url){
        this.apiURL = url;
    }
    static async findAll(){
        const response = await fetch(this.apiURL + "/todos");
        return response.json();
    }
}