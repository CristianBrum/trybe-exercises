const check = (myNumber, number) => myNumber === number;

lotteryResult = (myNumber, callback) => {
const number = Math.floor((Math.random() * 5) + 1);
return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, check));