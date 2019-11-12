const QuizFetcher = require('../../src/QuizFetcher');
const assert = require('power-assert');

describe('QuizFetcherのクラス', () => {
  describe('fetchメソッドの挙動確認', () => {
    it('fetchメソッドという名前のクラスメソッドを持つ', () => {
      assert.strictEqual(typeof QuizFetcher.fetch, 'function');
    });

    it('【async/await版】fetchメソッドの戻り値の型チェック', async () => {
      const response = await QuizFetcher.fetch();
      const results = response.results;

      assert.strictEqual(response.hasOwnProperty('results'), true);
      assert.strictEqual(Array.isArray(results), true);
      assert.strictEqual(results.length, 10);

      results.forEach(element => {
        assert.strictEqual(element.hasOwnProperty('category'), true);
        assert.strictEqual(element.hasOwnProperty('type'), true);
        assert.strictEqual(element.hasOwnProperty('difficulty'), true);
        assert.strictEqual(element.hasOwnProperty('question'), true);
        assert.strictEqual(element.hasOwnProperty('correct_answer'), true);
        assert.strictEqual(element.hasOwnProperty('incorrect_answers'), true);

        for (let key in element) {
          if (key === 'incorrect_answers') {
            assert.strictEqual(Array.isArray(element[key]), true);
            element[key].forEach(value => {
              assert.strictEqual(typeof value, 'string');
            });
          } else {
            assert.strictEqual(typeof element[key], 'string');
          }
        }
      });
    });

    it('【Promise版】fetchメソッドの戻り値の型チェック', () => {
      return QuizFetcher.fetch()
        .then(response => {
          const results = response.results;

          assert.strictEqual(Array.isArray(results), true);
          assert.strictEqual(results.length, 10);

          results.forEach(element => {
            assert.strictEqual(element.hasOwnProperty('category'), true);
            assert.strictEqual(element.hasOwnProperty('type'), true);
            assert.strictEqual(element.hasOwnProperty('difficulty'), true);
            assert.strictEqual(element.hasOwnProperty('question'), true);
            assert.strictEqual(element.hasOwnProperty('correct_answer'), true);
            assert.strictEqual(element.hasOwnProperty('incorrect_answers'), true);

            for (let key in element) {
              if (key === 'incorrect_answers') {
                assert.strictEqual(Array.isArray(element[key]), true);
                element[key].forEach(value => {
                  assert.strictEqual(typeof value, 'string');
                });
              } else {
                assert.strictEqual(typeof element[key], 'string');
              }
            }
          });
        });
    });

    it('【コールバック(done)版】fetchメソッドの戻り値の型チェック', (done) => {
      QuizFetcher.fetch()
        .then(response => {
          const results = response.results;

          assert.strictEqual(Array.isArray(results), true);
          assert.strictEqual(results.length, 10);

          results.forEach(element => {
            assert.strictEqual(element.hasOwnProperty('category'), true);
            assert.strictEqual(element.hasOwnProperty('type'), true);
            assert.strictEqual(element.hasOwnProperty('difficulty'), true);
            assert.strictEqual(element.hasOwnProperty('question'), true);
            assert.strictEqual(element.hasOwnProperty('correct_answer'), true);
            assert.strictEqual(element.hasOwnProperty('incorrect_answers'), true);

            for (let key in element) {
              if (key === 'incorrect_answers') {
                assert.strictEqual(Array.isArray(element[key]), true);
                element[key].forEach(value => {
                  assert.strictEqual(typeof value, 'string');
                });
              } else {
                assert.strictEqual(typeof element[key], 'string');
              }
            }
          });
          done();
        });
    });
  });
});