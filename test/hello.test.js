import Vue from `vue`;
import hello from `@/page/Hello`

describe(`test hello world`, () => {
    it('Is hello world shown?', () => {
        expect('hello world').toEqual(hello());
    })
})