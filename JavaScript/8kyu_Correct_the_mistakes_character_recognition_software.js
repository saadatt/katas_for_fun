// Character recognition software is widely used to digitise printed texts. Thus the texts can
// be edited, searched and stored on a computer. When documents (especially pretty old ones written
// with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//  S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
//Test.assertEquals(correct("L0ND0N"),"LONDON");
// Test.assertEquals(correct("DUBL1N"),"DUBLIN");
// Test.assertEquals(correct("51NGAP0RE"),"SINGAPORE");
// Test.assertEquals(correct("BUDAPE5T"),"BUDAPEST");
// Test.assertEquals(correct("PAR15"),"PARIS");

function correct(string){
    let a = string.replace(/5/g, 'S');
    let b = a.replace(/0/g, 'O');
    let c = b.replace(/1/g, 'I');
    return c;
}