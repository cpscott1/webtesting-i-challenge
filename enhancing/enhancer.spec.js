const enhancer = require('./enhancer.js');
describe('enhancer.js', function() {
  describe('repair()', () => {
    it('restores durability to 100', () => {
      expect(enhancer.repair({ durability: 58 }).durability).toBe(100)
      expect(enhancer.repair({ durability: -10 }).durability).toBe(100)
      expect(enhancer.repair({ durability: 2 }).durability).toBe(100)
    })
  })
  it.todo('should have a max of 100 for durability')
});

describe('enhancer.js', () => {
  describe('succeed()', () => {
    it('increases enchancement by 1', () => {
      expect(enhancer.succeed({ enhancement: 17 }).enhancement).toBe(18);
      expect(enhancer.succeed({ enhancement: 9 }).enhancement).toBe(10)
    })
  })
  it.todo('max of 20 for enhancement');
})

describe('enhancer.js', () => {
  describe('fail()', () => {
    it('test failed', () => {
      expect(enhancer.fail({ enhancement: 14, durability: 14}).durability).toBe(9);
      expect(enhancer.fail({ enhancement: 15, durability: 11 }).durability).toBe(1);
      expect(enhancer.fail({ enhancement: 18 }).enhancement).toBe(17);
    })
  })
  it.todo('durability or enhancement should decrease');
})
