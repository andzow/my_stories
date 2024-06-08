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

    static async getSearch(query) {
        return $api.get('/product/getSearch', {
            params: query
        })
    }

    static async getFilter(query) {
        return $api.get('/product/getFilter', {
            params: query
        })
    }

    static async productOne (id, query) {
        return $api.get('/product/' + id, {
            params: query
        })
    }

    static async updateProduct(dataObject) {
        return $api.put('/product/update', dataObject)
    }

    static async updateProductWatch(dataObject) {
        return $api.put('/product/updateWatch', dataObject)
    }

    static async deleteProduct(id) {
        return $api.delete('/product/delete', { data: { id } })
    }
}