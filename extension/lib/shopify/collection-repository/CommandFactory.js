const shopifyCollectionRepositoryCommandListGraphQl = require('./command/ListGraphQl')
const shopifyCollectionRepositoryCommandGetGraphQl = require('./command/GetGraphQl')
const shopifyCollectionRepositoryCommandProductGetCountAdminApi = require('./command/product/GetCountAdminApi')

class ShopifyCollectionRepositoryCommandFactory {
  /**
   * @param {ShopifyStorefrontClient} storefrontClient
   * @param {ShopifyAdminClient} adminClient
   */
  constructor (storefrontClient, adminClient) {
    this._storefrontClient = storefrontClient
    this._adminClient = adminClient
  }

  /**
   * @returns {ShopifyCollectionRepositoryCommandGet}
   */
  createGet () {
    return shopifyCollectionRepositoryCommandGetGraphQl(this._storefrontClient)
  }

  /**
   * @return {ShopifyCollectionRepositoryCommandListGraphQl}
   */
  createList () {
    return shopifyCollectionRepositoryCommandListGraphQl(this._storefrontClient)
  }

  /**
   * @returns {ShopifyCollectionRepositoryCommandProductGetCountAdminApi}
   */
  createGetProductCount () {
    return shopifyCollectionRepositoryCommandProductGetCountAdminApi(this._adminClient)
  }
}

module.exports = ShopifyCollectionRepositoryCommandFactory
