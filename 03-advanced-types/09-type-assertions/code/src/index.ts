// Type assertion using the "as" keyword
let phoneNumber = document.getElementById("phone") as HTMLInputElement;
let phone = phoneNumber.value;

// Type assertion using a pair of <>
let mobileNumber = <HTMLInputElement>document.getElementById("mobile");
let mobile = mobileNumber.value;
