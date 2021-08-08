const chai = require('chai');
const expect = chai.expect;
const getListMultiplesOfTwo = require('./getListMultiplesOfTwo')
const { scripts } = require('./package.json')

describe('', function () {
  it('배열을 리턴해야 합니다', function () {
    expect(Array.isArray(getListMultiplesOfTwo(20))).to.be.true;
  });

  it('10을 입력받은 경우, [2, 4, 6, 8, 10]을 리턴해야 합니다', function () {
    expect(getListMultiplesOfTwo(10)).to.be.eql([2, 4, 6, 8, 10]);
  });

  it('20을 입력받은 경우, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]을 리턴해야 합니다', function () {
    expect(getListMultiplesOfTwo(20)).to.be.eql([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });

  it('100을 입력받은 경우, [2, 4, 6, 8, ..., 96, 98, 100]을 리턴해야 합니다', function () {
    expect(getListMultiplesOfTwo(100)).to.be.eql([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22,
      24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44,
      46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66,
      68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
      90, 92, 94, 96, 98, 100
    ]);
  });

  it('npm run start 스크립트를 통해 index.js 파일을 실행해야 합니다', function () {
    expect(scripts.start).to.be.eql('node index.js')
  })
})