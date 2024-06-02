import $api from "..";

export default class ProductServices {
    static async createProduct(FormObject) {
        return $api.post('/product/create', FormObject)
    }

    static async getProductAll(query) {
        return $api.get('/product/getAll', {
            params: query
        })
    }

    static async updateProduct(dataObject) {
        return $api.put('/product/update', dataObject)
    }
}