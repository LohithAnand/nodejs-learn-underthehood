//Function Constructor

function Person(name, contactDetails) {
    this.name = name;
    this.contactDetails = contactDetails;

    this.getContactDetails = function() {
        return this.contactDetails;
    }
}

// Prototypal inheritance
Person.prototype.getName = function() {
    return this.name;
}

var person = new Person("Lohith Anand", {
    address : "Kingsville, Texas",
    phone: "908-340-****"
});

console.log(person.getName());
console.log(person.getContactDetails());
