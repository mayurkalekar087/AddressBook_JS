class AddressBook {

    constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zipCode = params[5];
    this.phoneNumber = params[6];
    this.emailId = params[7];
}
get firstName() { return this._firstName; }
set firstName(firstName) {
let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$"); 
if (nameRegex.test(firstName))
    this._firstName = firstName;
else
    throw "Invalid first Name";
}

get lastName() { return this._lastName; }
set lastName(lastName) {
let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
if (nameRegex.test(lastName))
    this._lastName = lastName;
else
    throw "Invalid last Name";
}    

get address() { return this._address; }
set address(address) {
let addressRegex = RegExp('^[0-9A-Z]{1}[A-Z a-z 0-9]{1,}$'); 
if (addressRegex.test(address))
    this._address = address;
else
    throw "Invalid address ";
}
        
get city() { return this._city; }
set city(city) {
let cityRegex = RegExp("^[A-Za-z]{4,}$"); 
if (cityRegex.test(city))
    this._city = city;
else
    throw "Invalid city ";
}

get state() { return this._state; }
set state(state) {
let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
if (stateRegex.test(state))
    this._state = state;
else
    throw "Invalid state";
}
    
get zipCode() { return this._zipCode; }
set zipCode(zipCode) {
let zipRegex = RegExp("^[1-9]{1}[0-9]{5}$"); 
if (zipRegex.test(zipCode))
    this._zipCode = zipCode;
else
    throw "Invalid zipCode";
}
    
get phoneNumber() { return this._phoneNumber; }
set phoneNumber(phoneNumber) {
let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$"); 
if (phoneRegex.test(phoneNumber))
    this._phoneNumber = phoneNumber;
else
    throw "Invalid phoneNumber";
}
    
get emailId() { return this._emailId; }
set emailId(emailId) {                        
let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
if (emailRegex.test(emailId))
    this._emailId = emailId;
else
    throw "Invalid email";
}

toString() {
return "first Name: " + this.firstName + ", last Name: " + this.lastName+ "\nAddress: " + this.address + ", \nCity: " + this.city
+ "\nState: " + this.state + "\nZipCode: " + this.zipCode + ", \nPhoneNumber: " + this.phoneNumber + ", \nemailId: " + this.emailId +"\n";   
  }
}

let details = new Array();
try {
    details.push(new AddressBook("Ismael","Whitlatch","2319  Burton Avenue","Memphis","Tennessee","256355","91 9017658987","sa5bxlla2e@temporarymail.net"));
    details.push(new AddressBook("Christopher","Forst","2846  Tori Lane","Saltlakecity","Utah","459867","91 8015870002","ctmgz50esj@temporarymail.net"));  
    details.push(new AddressBook("David","Washington","3379  Echo Lane","Memphis","Newmexico","589637","91 2699626511","wkephpw9q2@temporarymail.net"));
    details.push(new AddressBook("Byron","Daniels","4385  West Street","Grandrapids","Michigan","456953","91 6165758233","6y4ug4knmib@temporarymail.net"));
    details.push(new AddressBook("James","Juarez","12564  Clay Street","Indianapolis","Indiana","456938","91 3174103617","penlzpd00f@temporarymail.net"));     
}
catch(e)
{
    console.error(e);
}
Display();

function Display(){
    details.forEach((contact) => console.log(contact.toString()));
}
let index = details.findIndex(contact=>contact.firstName == 'David');
details[index].lastName = 'Lopez';
console.log("*********************************")
console.log("Edited Address Book Successfully: ");
Display();


details.splice(index, 1);
console.log("*********************************")
console.log("AddressBook after Contact deleted");
Display();

let contactDetails=0;
function getCount(details){
    if (details != null)
        contactDetails++;
    return contactDetails;
}
details.reduce(getCount,1);
console.log("**********************************************************");
console.log("Total Contacts : " + contactDetails);

let personContact = new AddressBook("Christopher","Forst","2846  Tori Lane","Saltlakecity","Utah","459867","91 8015870002","ctmgz50esj@temporarymail.net");
if(details.some(e => e._lastName == "Forst"))
    console.log("Contact already Exists!");
else{
    details.push(personContact);
    console.log("Contact added succsefully");
}
console.log("Array: ",details);

let findByCity = details.filter((e) => e._city == 'Memphis');
console.log("Contacts by city: ",findByCity);

let findByState = details.filter((e) => e._state == 'Tennessee');
console.log("Contacts by state: ",findByState);	