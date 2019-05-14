var helloWorld = require('./helloWorld');
describe('Hello World Function',()=>{
  it('shows Hello World!',()=>{
    expect(helloWorld()).toEqual('Hello World!');
  })
})
