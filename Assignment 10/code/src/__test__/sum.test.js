const { default: sum } = require("../sum")

test("testing for sum function",()=>{
    const result=sum(1,2);
    //assertion
    expect(result).toBe(3);
})