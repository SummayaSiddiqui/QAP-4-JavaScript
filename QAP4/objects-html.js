const Customer = {
  FirstName: `Brad`,
  LastName: `Kennedy`,
  BirthDate: new Date(`2-25-1985`),
  Gender: `Male`,
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

html = `
<ul>
<h1>Customer's Details</h1>
<li>Customer's Name: ${Customer.FirstName} ${Customer.LastName}</li>
<li>Gender: ${Customer.Gender}</li>
<li>DOB: ${Customer.BirthDate.toDateString()}</li>
<li>Age: ${Customer.getAge()} years old</li>
<li>Customer's Phone Number: ${Customer.PhoneNum}</li>
<li>Customer's Address: ${Customer.MailingAddress.StreetAdd}, ${
  Customer.MailingAddress.City
}, ${Customer.MailingAddress.Province}, ${
  Customer.MailingAddress.PostalCode
}, ${Customer.MailingAddress.Country}</li>
<li>Room Preferences: ${Customer.RoomPreferences.join(", ")}</li>
<li>Payment Method: ${Customer.PaymentMethod}</li>
<li>Check-In Date: ${Customer.CheckInDate.toDateString()}</li>
<li>Check-Out Date: ${Customer.CheckOutDate.toDateString()}</li>
<li>Stay of Duration: ${Customer.getStayDuration()} days</li>
<ul>`;
console.log(html);
document.body.innerHTML = html;
