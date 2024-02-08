import { expect } from 'chai';
import { sum } from '../sum.js';


describe('addThese', () => {
    it('should exist', () => {
        expect(sum).to.be.a('function');
    })
})

describe('addThese', () => {
    it('should return 2', () => {
        expect(sum(1, 1)).to.equal(2);
    })
})

describe('addThese', () => {
    it('should return 0', () => {
        expect(sum(1, -1)).to.equal(0);
    })
})

describe('addThese', () => {
    it('should return undefined', () => {
        expect(sum('1', '1')).to.equal(undefined);
    })
})