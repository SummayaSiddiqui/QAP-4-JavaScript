const Customer = {
  FirstName: `Brad`,
  LastName: `Kennedy`,
  BirthDate: new Date(`2-25-1985`),
  Gender: `male`,
  RoomPreferences: [`Single`, `Non-Smoking`, `Scenic View`],
  PaymentMethod: `Credit Card`,
  MailingAddress: {
    StreetAdd: `123 Main St.`,
    City: `Toronto`,
    Province: `ON`,
    PostalCode: `A1A1A1`,
    Country: `Canada`,
  },
  PhoneNum: `(123) 123-4567`,
  CheckInDate: new Date(`1-15-2024`),
  CheckOutDate: new Date(`1-19-2024`),
  getAge: function () {
    const Today = new Date();
    let year = Today.getFullYear() - this.BirthDate.getFullYear();
    let month = Today.getMonth() - this.BirthDate.getMonth();
    return year;
  },
  getStayDuration: function () {
    let diffTime = Math.abs(this.CheckOutDate - this.CheckInDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  },
};

aString = `Our customer Mr. ${Customer.FirstName} ${Customer.LastName}\
 is a ${
   Customer.Gender
 } born on ${Customer.BirthDate.toDateString()}, ${Customer.getAge()} years old. He prefers the following room types: ${Customer.RoomPreferences.join(
  ", "
)}. His payment is done by a ${
  Customer.PaymentMethod
}, and he can be contacted at ${Customer.PhoneNum}. He lives at ${
  Customer.MailingAddress.StreetAdd
}, ${Customer.MailingAddress.City}, ${Customer.MailingAddress.Province}, ${
  Customer.MailingAddress.PostalCode
}, ${
  Customer.MailingAddress.Country
}. He will be checking in on ${Customer.CheckInDate.toDateString()} and checking out on ${Customer.CheckOutDate.toDateString()}. This means he will stay in the Motel for ${Customer.getStayDuration()} days.`;

console.log(aString);
