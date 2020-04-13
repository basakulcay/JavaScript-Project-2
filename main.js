let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner=true;
let runnerAge=18;

if (earlyRunner && runnerAge>18) {raceNumber+=1000};

if (earlyRunner && runnerAge>18) {console.log(`You will race at 9:30 and your race number is ${raceNumber}`);}
else if (!earlyRunner && runnerAge>18) {console.log(`You willl race at 11 and your race number is ${raceNumber}`);}
else if (runnerAge<18) {console.log(`You willl race at 12:30 and your race number is ${raceNumber}`);}
else {console.log('Please see registration office');}

