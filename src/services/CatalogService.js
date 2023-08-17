import freshEngApi from "../http/api"


export default class CatalogService {
    static createCatalog(name, personal) {
        return freshEngApi.post('/catalogs', { name, personal })
    }

    static fetchUserCatalogs() {
        return freshEngApi.get('/catalogs')
    }
}