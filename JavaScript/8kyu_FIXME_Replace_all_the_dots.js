//The code provided is supposed replace all the dots . in the specified String str with dashes -
//But it's not working properly.
//Task: Fix the bug so we can all go home early.String str will never be null.
//describe("Example Tests", function() {
//
//   it("test dots", function(){
//     Test.assertEquals(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");
//   });



var replaceDots = function(str) {
    return str.replace(/\./g, '-');
}