// Can Santa save Christmas? Oh no! Santa's little elves are sick this year.
// He has to distribute the presents on his own. But he has only 24 hours left. Can he do it?
// Your job is to determine if Santa can distribute all the presents in 24 hours.
// Your Task: You will get an array as input with time durations as string in the following format:
// "hh:mm:ss" Each duration is a present Santa has to distribute. Return true or false whether he can do it in 24 hours or not.
// If this kata was to easy for you. Try the harder one. This kata is part of the Collection "Date fundamentals":
// #1 Count the Days! #2 Minutes to Midnight #3 Can Santa save Christmas? #4 Christmas Present Calculator

function determineTime(durations){
    let hours=0;
    let minutes=0;
    let seconds=0;
    durations.map(el=>el.split(':').map((a,i)=>
        (i===0) ? hours += a*1 : (i===1) ? minutes += a*1 : seconds += a*1));
    minutes += seconds/60
    hours += minutes/60
    return hours <= 24;
}
