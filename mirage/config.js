export default function () {
  this.namespace = '/api'

  this.get('/products', function () {
    return {
      data: [
        {
          type: "products",
          id: 1,
          attributes: {
            name: "Green tea",
            price: 3.11,
            image: "https://www.happycute.shop/media/catalog/product/cache/16/thumbnail/65x/040ec09b1e35df139433887a97daa66f/2/0/20180320_016.jpg"
          }
        },
        {
          type: "products",
          id: 2,
          attributes: {
            name: "Strawberries",
            price: 5.00,
            image: "https://www.happycute.shop/media/catalog/product/cache/16/thumbnail/65x/040ec09b1e35df139433887a97daa66f/2/0/20180320_016.jpg"
          }
        },
        {
          type: "products",
          id: 3,
          attributes: {
            name: "Coffee",
            price: 11.23,
            image: "https://www.happycute.shop/media/catalog/product/cache/16/thumbnail/65x/040ec09b1e35df139433887a97daa66f/2/0/20180320_016.jpg"
          }
        }
      ]
    }
  });
}