export const ProductCatalogApi = {
    CREATE_PRODUCT_CATALOG: '/product-catalog/create',

    UPDATE_PRODUCT_CATALOG: (catalogId: any) => `/product-catalog/update/${catalogId}`,

    DELETE_PRODUCT_CATALOG: (catalogId: any) => `/product-catalog/delete/${catalogId}`,

    GET_ALL_PRODUCT_CATALOG: '/product-catalog/all/',

    GET_PRODUCT_CATALOG_BY_STORE: (storeId: string) => `/product-catalog/getbystore/${storeId}`,
}