const should = require('should');
const DescribeNumber = require('../DescribeNumber');

describe('get number', () => {
   it('describe number 0', () => {
      DescribeNumber.describe('0').should.be.equal('zero')
   })
   it('describe number 1', () => {
      DescribeNumber.describe('1').should.be.equal('one')
   })
   it('describe number 10', () => {
      DescribeNumber.describe('10').should.be.equal('ten')
   })
   it('describe number 11', () => {
      DescribeNumber.describe('11').should.be.equal('eleven')
   })
   it('describe number 42', () => {
      DescribeNumber.describe('42').should.be.equal('forty-two')
   })
   it('describe number 100', () => {
      DescribeNumber.describe('100').should.be.equal('one hundred')
   })
   it('describe number 200', () => {
      DescribeNumber.describe('200').should.be.equal('two hundred')
   })
   it('describe number 101', () => {
      DescribeNumber.describe('101').should.be.equal('one hundred and one')
   })
   it('describe number 999', () => {
      DescribeNumber.describe('999').should.be.equal('nine hundred and ninety-nine')
   })
   it('describe number 1000', () => {
      DescribeNumber.describe('1000').should.be.equal('one thousand')
   })
   it('describe number 9000', () => {
      DescribeNumber.describe('9000').should.be.equal('nine thousand')
   })
   it('describe number 1999', () => {
      DescribeNumber.describe('1999').should.be.equal('one thousand and nine hundred and ninety-nine')
   })
   it('describe number 2040', () => {
      DescribeNumber.describe('2040').should.be.equal('two thousand and forty')
   })
   it('describe number 2009', () => {
      DescribeNumber.describe('2009').should.be.equal('two thousand and nine')
   })
   it('describe number 9999', () => {
      DescribeNumber.describe('9999').should.be.equal('nine thousand and nine hundred and ninety-nine')
   })
   it('describe number 17999', () => {
      DescribeNumber.describe('17999').should.be.equal('seventeen thousand and nine hundred and ninety-nine')
   })
   it('describe number 10003', () => {
      DescribeNumber.describe('10003').should.be.equal('ten thousand and three')
   })
   it('describe number 25750', () => {
      DescribeNumber.describe('25750').should.be.equal('twenty-five thousand and seven hundred and fifty')
   })
   it('describe number 38100', () => {
      DescribeNumber.describe('38100').should.be.equal('thirty-eight thousand and one hundred')
   })
   it('describe number 91203', () => {
      DescribeNumber.describe('91203').should.be.equal('ninety-one thousand and two hundred and three')
   })
   it('describe number 17999', () => {
      DescribeNumber.describe('17999').should.be.equal('seventeen thousand and nine hundred and ninety-nine')
   })
   it('describe number 342251', () => {
      DescribeNumber.describe('342251').should.be.equal('three hundred and forty-two thousand and two hundred and fifty-one')
   })
   it('describe number 300251', () => {
      DescribeNumber.describe('300251').should.be.equal('three hundred thousand and two hundred and fifty-one')
   })
   it('describe number 300251', () => {
      DescribeNumber.describe('300251').should.be.equal('three hundred thousand and two hundred and fifty-one')
   })
   it('describe number 1300420', () => {
      DescribeNumber.describe('1300420').should.be.equal('one million and three hundred thousand and four hundred and twenty')
   })
})