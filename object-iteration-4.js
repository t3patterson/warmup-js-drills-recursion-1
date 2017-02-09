//-----------------------------------------
// TASK: encodeURL()
//   Characters for punctuation in URLs 
//   must be encoded in ASCII hexadecimal character codes
//
//   For example, the string 'you are cool!'
//   would be encoded in a URL as: 'you%20are%20cool%21'
//
//   The task is to buid an encoder for normal strings 
//   to valid url-encoded strings
//
//   Here is an encoding chart
//   %20 - space
//   %21 - !
//   %22 - "
//   %24 - $
//   %25 - %
//   %27 - '
//------------------------------------------

var encodedURL1 = encodeURL('this is great')
console.assert(encodedURL1 === 'this%20is%20great')
//
var encodedURL2 = encodeURL('she said "there is no need for violence!"')
console.assert(encodedURL2 === 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22')
//
var encodedURL3 = encodeURL("i'm all about the $")
console.assert(encodedURL3 === "i%27m%20all%20about%20the%20%24")

var encodedURL4 = encodeURL("20% of $100")
console.assert(encodedURL3 === "20%25%20of%20%24100")





//-----------------------------------------
// TASK: createQueryStr()
//   Create a query string from the keys/values of an object
//
//   Example:
//   ----------
//   var queryObj = {
//     nat: 'US', 
// 	 language: 'en', 
//     results: 100
//   }

//   createQueryStr(queryObj)
//   => ''?nat=US&language=en&results=100'
//------------------------------------------

var queryObj = {
    state: 'SC',
    apikey: '12345',
    chamber: 'house' //'House'
}

var queryString1 = createQueryStr(queryObj)
// => "?state=SC&apikey=12345&chamber=house"

console.assert(queryString1 === "?state=SC&apikey=12345&chamber=house")


var queryObj2 ={
    category: 'comedy',
    allAudiences: true,
    maxMinutes: 180,
    minMinutes: 45
}

var queryString2 = createQueryStr(queryObj2)
// => "?category=comedy&allAudiences=true&maxMinutes=180&minMinutes=45"
console.assert(queryString2 === "?category=comedy&allAudiences=true&maxMinutes=180&minMinutes=45")