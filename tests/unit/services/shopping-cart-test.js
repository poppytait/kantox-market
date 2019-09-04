import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | shopping-cart', function(hooks) {
  setupTest(hooks);

  test('it is initialised to an empty cart array', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');
    const cartItems = service.get('cartItems');
    
    assert.deepEqual(cartItems, []);
  });

  test('it should add new cart item when it does not exist', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');
    const product = { id: 1 };
    
    service.update(product, 1);
    const cartItems = service.get('cartItems');
    
    assert.deepEqual(cartItems, [ { product, quantity: 1 }]);
  });

  test('it should update quantity when item exists', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');

    const product = { id: 1 };
    
    service.update(product, 1);
    service.update(product, 1);

    const cartItems = service.get('cartItems');
    
    assert.deepEqual(cartItems, [ { product, quantity: 2 }]);
  });

  test('it should remove item from cart when item\'s new quantity is less than 1', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');

    const product = { id: 1 };
    
    service.update(product, 1);
    service.update(product, -1);

    const cartItems = service.get('cartItems');

    assert.deepEqual(cartItems, [ ]);
  });

  test('it should clear cart upon checkout', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');

    const product = { id: 1 };
    
    service.update(product, 1);

    service.checkout()

    const cartItems = service.get('cartItems');

    assert.deepEqual(cartItems, [ ]);
  });
});
