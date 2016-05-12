'use strict'

let expect = require('chai').expect;
let Array = require('../searchAlgorithms').Array;

var searchAlgorithms = require("../searchAlgorithms"),
    positiveArr, negativeArr, decimalArr, largeArr;

beforeEach(function(){
  positiveArr = [1,2,3,4,5,6];
  negativeArr = [-5,-4,-3,-2,-1];
  decimalArr = [1.1, 2.4,5.5,5.6,5.7];
});

describe("#linearSearch", function(){
  it("finds items in an array of positive numbers", function(){
    expect(searchAlgorithms.linearSearch(positiveArr,3)).to.equal(2);
  });
  it("finds items in an array of negative numbers", function(){
    expect(searchAlgorithms.linearSearch(negativeArr,-2)).to.equal(3);
  });
  it("finds items in an array of non-integers", function(){
    expect(searchAlgorithms.linearSearch(decimalArr,1.1)).to.equal(0);
  });
  it("returns -1 when the item is not found", function(){
    expect(searchAlgorithms.linearSearch(decimalArr,-1)).to.equal(-1);
  });
});

describe("#binarySearch", function(){
   it("finds items in an array of positive numbers", function(){
    expect(searchAlgorithms.binarySearch(positiveArr,3)).to.equal(2);
  });
  it("finds items in an array of negative numbers", function(){
    expect(searchAlgorithms.binarySearch(negativeArr,-2)).to.equal(3);
  });
  it("finds items in an array of non-integers", function(){
    expect(searchAlgorithms.binarySearch(decimalArr,1.1)).to.equal(0);
  });
   it("returns -1 when the item is not found", function(){
    expect(searchAlgorithms.binarySearch(decimalArr,-1)).to.equal(-1);
  });
});