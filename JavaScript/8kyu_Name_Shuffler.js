//Write a function that returns a string in which firstname is swapped with last name.
//nameShuffler('john McClane'); => "McClane john"
//Test.assertEquals(nameShuffler('john McClane'),'McClane john');

function nameShuffler(str){
    let a = str.split(' ').reverse().join(' ');
    return a;
}