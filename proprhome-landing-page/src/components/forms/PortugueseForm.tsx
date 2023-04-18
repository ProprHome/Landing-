import { useState } from 'react';

function PortugueseForm() {
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
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="oid" value="00D7Q00000BRe0d" />
      <input type="hidden" name="retURL" value="http://" />

      <label htmlFor="name">Nome Completo:</label>
      <textarea
        id="00N7Q00000JUFbc"
        name="00N7Q00000JUFbc"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="clientType">Tipo de Cliente:</label>
      <select
        id="00N7Q00000JUFbS"
        name="00N7Q00000JUFbS"
        title="Tipo de Cliente"
        value={clientType}
        onChange={(e) => setClientType(e.target.value)}
      >
        <option value="">--None--</option>
        <option value="Comprador">Comprador</option>
        <option value="Inquilino">Inquilino</option>
        <option value="Proprietário">Proprietário</option>
        <option value="Agente">Agente</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default PortugueseForm;
