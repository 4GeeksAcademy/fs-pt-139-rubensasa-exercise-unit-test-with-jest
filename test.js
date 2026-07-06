const {sum}= require('./app.js')

test('suma 7 y 3 y da 10',() => {
  
    expect(sum(7,3)).toBe(10);

})

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});

const { fromEuroToDollar,fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollar = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(1)).toBe(1.07);
})

test("1 dollar should be 146.26 yen", function() {
   const yen = fromDollarToYen(1);

    const expected = 1 /1.07 * 156.5; 
    
     expect(fromDollarToYen(1)).toBe(146.26);
})
 test ("1 yen should be 0.00556 pounds", function() {
    const pounds = fromYenToPound(1);

    const expected = 1 / 156.5 * 0.87;

    expect(fromYenToPound(1)).toBe(0.00556);
 })