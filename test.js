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
   const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("1 dollar should be 156.5 yen", function() {
   const yen = fromDollarToYen(1);

    const expected = 1 * 156.5; 
    
     expect(fromDollarToYen(1)).toBe(156.5);
})
 test ("1 yen should be 0.87 pounds", function() {
    const pounds = fromYenToPound(1);

    const expected = 1 * 0.87;

    expect(fromYenToPound(1)).toBe(0.87);
 })