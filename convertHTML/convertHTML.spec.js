var convertHTML = require("./convertHTML");

describe('convertHTML',()=>{
    it('converts strings that contains & < > \'  to HTML entities', ()=>{
    expect(convertHTML("&'><")).toEqual('&amp;&apos;&gt;&lt;');
  })
  it('finishes without errors', ()=>{
    expect(convertHTML('Goodness > us')).toEqual('Goodness &gt; us');

  })
})
