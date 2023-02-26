const about_me = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  location: "",
  professionalSummary: "",

  setFirstName: function(name) {
    this.firstName = name;
  },const resume = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  location: "",
  professionalSummary: "",

  setFirstName: function(name) {
    this.firstName = name;
  },

  setLastName: function(name) {
    this.lastName = name;
  },

  setEmail: function(email) {
    this.email = email;
  },

  setPhoneNumber: function(phoneNumber) {
    this.phoneNumber = phoneNumber;
  },

  setLocation: function(location) {
    this.location = location;
  },

  setProfessionalSummary: function(summary) {
    this.professionalSummary = summary;
  },

  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};