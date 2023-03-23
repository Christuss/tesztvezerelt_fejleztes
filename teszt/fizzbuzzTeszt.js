QUnit.module('fizzbuzz', function() {
    QUnit.test('létezik-e a fizzbuzz?', function(assert) {
      assert.ok(fizzbuzz, "Létezik-e a fizzbuzz?");
    });
    QUnit.test('függvény-e a fizzbuzz?', function(assert) {
        assert.ok(typeof fizzbuzz === "function", "függvény-e a fizzbuzz?");
      });
      QUnit.test('fizzbuzz(0)', function(assert) {
        assert.equal(fizzbuzz(0), "");
      });
      QUnit.test('fizzbuzz(1)', function(assert) {  
        assert.equal(fizzbuzz(1), 1);
      });
      QUnit.test('fizzbuzz(2)', function(assert) {  
        assert.equal(fizzbuzz(2), '1, 2');
      });
      QUnit.test('fizzbuzz(3)', function(assert) {  
        assert.equal(fizzbuzz(3), '1, 2, fizz');
      });
      QUnit.test('fizzbuzz(15)', function(assert) {  
        assert.equal(fizzbuzz(15), "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz");
      });
      QUnit.test('fizzbuzzErtek() harommal nem oszthato', function(assert) {  
        const nemOszthatoLista = [1,2,4,7,8,11,13,14];
        for (let index = 0; index < nemOszthatoLista.length; index++) {
            assert.equal(fizzbuzzErtek(nemOszthatoLista[index]), nemOszthatoLista[index]);
        }
      });
      QUnit.test('fizzbuzzErtek() harommal oszthato', function(assert) {  
        const harommalOszthatoLista = [3, 6, 9, 12];
        for (let index = 0; index < harommalOszthatoLista.length; index++) {
            assert.equal(fizzbuzzErtek(harommalOszthatoLista[index]), "fizz");
        }
      });
      QUnit.test('fizzbuzzErtek() ottel oszthato', function(assert) {  
        const ottelOszthatoLista = [5, 10];
        for (let index = 0; index < ottelOszthatoLista.length; index++) {
            assert.equal(fizzbuzzErtek(ottelOszthatoLista[index]), "buzz");
        }
      });
      QUnit.test('fizzbuzzErtek() ottel es harommal oszthato', function(assert) {  
        const ottelOszthatoLista = [15, 30];
        for (let index = 0; index < ottelOszthatoLista.length; index++) {
            assert.equal(fizzbuzzErtek(ottelOszthatoLista[index]), "fizzbuzz");
        }
      });

  });
