import axios from 'axios';
const resources = require('./resources');
//const axios = require('axios');

class Api {

    constructor(resourceName) {
        const resourceConfig = resources[resourceName];
        const {resource, primaryKeyName} = resourceConfig;
        this.resource = resource;
        this.primaryKeyName = primaryKeyName;
    }

    static get apiUrl() {
        //return 'http://localhost:3000';
        return 'https://liam-cripto.herokuapp.com';
    }

    //login
    async login () {
        return axios(`${this.constructor.apiUrl}/${this.resource}?username=SidTheKidz&password=SidTheKid`);
    }

    //list
    async index () {
        return axios(`${this.constructor.apiUrl}/${this.resource}`);
    }


    /*async create (params) {
        return axios.post(`${this.constructor.apiUrl}/${this.resource}`,
            params
        );
    }

    async delete (identifierValue) {
        return axios.delete(`${this.constructor.apiUrl}/${this.resource}/${identifierValue}`);
    }

    async update (identifierValue, params) {
        return axios.put(`${this.constructor.apiUrl}/${this.resource}/${identifierValue /!*new Api('products').findOne(6).then((res) => {
    console.log(res.data);
});*!/}`,  params );
    }

    async findOne (identifierValue) {
        return axios(`${this.constructor.apiUrl}/${this.resource}/${identifierValue}`);
    }*/
}

export default Api;


/*new Api('login').login().then((res) => {
    console.log(res.data);
});*/

/*new Api('getAllCourses').index().then((res) => {
     console.log(res.data);
 });*/




























/*new Api('products').create(
    {
        "name": "Fandango",
        "costPrice": 150,
        "sellingPrice": 10,
        "weight": 10,
        "manufacturerId": null,
        "brandId": null,
        "productCategoryId": null,
        "productGroupId": null }).then((res) => {
    console.log(res.data);
});*/








// new Api('brands').delete(1).then((res) => {
//     console.log(res.data);
// });

/* new Api('products').update(14, {            "id": 14,
            "name": "Banana",
            "costPrice": 12,
            "sellingPrice": 10,
            "weight": 10,
            "manufacturerId": null,
            "brandId": null,
            "productCategoryId": null,
            "productGroupId": null }).then((res) => {
    console.log(res.data);
});
 */


//  new Api('brands').findOne(14).then((res) => {
//     console.log(res.data);
// }); 


