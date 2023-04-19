import React, { useState } from 'react';

function EnglishForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [clientType, setClientType] = useState('');
  const orgId = process.env.SALESFORCE_ORG_ID;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
    );
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // handle success
        console.log('Form submitted successfully!');
      }
    };
    xhr.send(new URLSearchParams(formData as any).toString());
  };
  return (
    <>
      <meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        method="POST"
      >
        <input type="hidden" name="oid" value="00D7Q00000BRe0d" />
        <input type="hidden" name="retURL" value="http://" />
        {/* These fields are optional debugging elements. Uncomment to test in debug mode.
        <input type="hidden" name="debug" value="1" />
        <input type="hidden" name="debugEmail" value="johnmccoy@proprhome.com" />
        */}
        <label htmlFor="fullName">Full Name:</label>
        <input id="00N7Q00000JUEay" name="00N7Q00000JUEay" type="text" />
        <br />
        <label htmlFor="email">Email:</label>
        <input id="email" maxLength={80} name="email" size={20} type="text" />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input id="phone" maxLength={40} name="phone" size={20} type="text" />
        <br />
        <label htmlFor="customerType">Customer Type:</label>
        <select
          id="00N7Q00000JUEb3"
          name="00N7Q00000JUEb3"
          title="Customer Type"
        >
          <option value="">--None--</option>
          <option value="Buyer">Buyer</option>
          <option value="Tenant">Tenant</option>
          <option value="Owner">Owner</option>
          <option value="Agent">Agent</option>
        </select>
        <br />
        <input type="submit" name="submit" />
      </form>
    </>
  );
}

export default EnglishForm;
