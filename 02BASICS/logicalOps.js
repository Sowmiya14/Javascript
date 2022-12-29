// && - AND operator - Both Sides Need to be True
// || - OR operator - One side Need to be True

var isVerified = true
var isLoggedIn = true
var hasPaymentToken = false
var isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greeting message to User')
    console.log('Grant Access to Paid Course')
}else if(isVerified || isGuest){
    console.log('Allow Free Previews')
}else {
    console.log('MESSAGE:Please Contact Admin')
}

// if (isVerified && isLoggedIn && !hasPaymentToken) {
//     console.log('Greeting message to User')
//     console.log('Grant Access to Paid Course')
// }else if(isVerified || isGuest){
//     console.log('Allow Free Previews')
// }else {
//     console.log('MESSAGE:Please Contact Admin')
// }