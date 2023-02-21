// function joinedLogger(level, sep) {
//     // write your code here

//     return function(...message){
//         const joinedMessage = message.filter(msg => msg.server >= level).map(msg => msg.text).join(sep);
//         console.log(joinedMessage)
//     }

// }

// const msg1 = { sever: 18, test: "foo" };
// const msg2 = { sever: 15, test: "bar" };
// const msg3 = { sever: 21, test: "baz" };


// -----new

function medlegger(inves, separator) {
    return function (...messages) {
        const joinedMessages = messages.filter(msg => msg.sever >= inves)
            .map(msg => msg.test)
            .join(separator);
        console.log(joinedMessages);
    };
}
const msg1 = { sever: 10, test: "foo" };
const msg2 = { sever: 15, test: "bar" };
const msg3 = { sever: 21, test: "baz" };

const logger = medlegger(15, "-");
logger(msg1, msg2, msg3); // Output: "bar-baz"


function plusMinus(arr) {
    // Write your code here
    // let count = 0;



}

console.log(plusMinus([1, 1, 0, -1, -1]))



