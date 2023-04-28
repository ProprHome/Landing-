import { useRouter } from 'next/router';
import { useState } from 'react';

function TestForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [readyToBuy, setReadyToBuy] = useState(false);
  const [withinOneMonth, setWithinOneMonth] = useState(false);
  const [withinSixMonths, setWithinSixMonths] = useState(false);
  const [notNow, setNotNow] = useState(false);

  const router = useRouter();

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    const payload = {
      oid: '00D7Q00000BRe0d',
      retURL: 'http://',
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      lead_source:'Website',
      '00N7Q00000JUEb3': customerType,
      '00N7Q00000JUIus': readyToBuy.toString(),
      '00N7Q00000JUIux': withinOneMonth.toString(),
      '00N7Q00000JUIv2': withinSixMonths.toString(),
    };

    const response = await fetch(
      'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: new URLSearchParams(payload),
      }
    );
    // handle successful form submission
    console.log('Form submitted successfully!');
    window.open(
      'https://drive.google.com/file/d/1r9I_n0GDHLEFBBO4gVkCVQHG5VOgGXWD/view?usp=sharing'
    );

    // reload window after form submit
    router.reload();

    // returning 'POST https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8 net::ERR_FAILED 200 (OK)' every time. Form data is being received by backend. Removing error handling for now. Also getting CORS errors

    // try {
    //   const payload = {
    //     oid: '00D7Q00000BRe0d',
    //     retURL: 'http://',
    //     'first_name': fullName,
    //     email: email,
    //     phone: phone,
    //     '00N7Q00000JUEb3': customerType,
    //     '00N7Q00000JUIus': readyToBuy.toString(),
    //     '00N7Q00000JUIux': withinOneMonth.toString(),
    //     '00N7Q00000JUIv2': withinSixMonths.toString(),
    //   };

    //   const response = await fetch(
    //     'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },

    //       body: new URLSearchParams(payload),
    //     }
    //   );

    //   if (response.ok) {
    //     // handle successful form submission
    //     console.log('Form submitted successfully!');
    //     window.open(
    //       'https://drive.google.com/file/d/1r9I_n0GDHLEFBBO4gVkCVQHG5VOgGXWD/view?usp=sharing'
    //     );
    //   } else {
    //     // handle failed form submission
    //     console.error('Form submission failed.');
    //   }
    // } catch (error) {
    //   console.error('Form submission error:', error);
    // }
  };

  // checkbox logic
  const handleCheckboxChange = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (name) {
      case 'readyToBuy':
        setReadyToBuy(true);
        setWithinOneMonth(false);
        setWithinSixMonths(false);
        setNotNow(false);
        break;
      case 'withinOneMonth':
        setReadyToBuy(false);
        setWithinOneMonth(true);
        setWithinSixMonths(false);
        setNotNow(false);

        break;
      case 'withinSixMonths':
        setReadyToBuy(false);
        setWithinOneMonth(false);
        setWithinSixMonths(true);
        setNotNow(false);
        break;
      case 'notNow':
        setReadyToBuy(false);
        setWithinOneMonth(false);
        setWithinSixMonths(false);
        setNotNow(true);
        break;
      default:
        break;
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      className=" gap-6 flex flex-col justify-center items-center"
    >
      <input type="hidden" name="oid" value="00D7Q00000BRe0d" />
      <input type="hidden" name="retURL" value="http://" />

      <h2 className=" text-center font-medium text-3xl mb-5">
        Faça o download e-book gratuito
      </h2>
      <label htmlFor="irst_name" className="hidden">
        Nome completo:
      </label>
      <input
        id="first_name"
        name="first_name"
        placeholder="Primeiro nome"
        className="m-0 py-4 px-4 w-80 h-14 bg-white border border-[#C4C4C4] rounded-xl font-normal text-[#767676]  resize-none overflow-hidden "
        value={firstName}
        required
        onChange={(event) => setFirstName(event.target.value)}
      ></input>

      <label htmlFor="last_name" className="hidden">
        Last Name:
      </label>
      <input
        id="last_name"
        maxLength={80}
        name="last_name"
        placeholder="Apelido"
        size={20}
        type="text"
        className="py-4 px-4 w-80 h-14 bg-white border border-[#C4C4C4] rounded-xl font-normal text-[#767676]  resize-none overflow-hidden"
        value={lastName}
        required
        onChange={(event) => setLastName(event.target.value)}
      />

      <label htmlFor="email" className="hidden">
        Email:
      </label>
      <input
        id="email"
        maxLength={80}
        name="email"
        placeholder="Email"
        size={20}
        type="email"
        required
        className="py-4 px-4 w-80 h-14 bg-white border border-[#C4C4C4] rounded-xl font-normal text-[#767676]  resize-none overflow-hidden"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="phone" className="hidden">
        Telefone:
      </label>
      <input
        id="phone"
        maxLength={40}
        name="phone"
        size={20}
        type="text"
        placeholder="Telefone"
        className="py-4 px-4 w-80 h-14 bg-white border border-[#C4C4C4] rounded-xl font-normal text-[#767676]  resize-none overflow-hidden"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <label htmlFor="customerType" className="hidden">
        Tipo de Cliente:
      </label>
      <select
        id="00N7Q00000JUEb3"
        name="00N7Q00000JUEb3"
        title="Tipo de Cliente"
        className="py-4 px-4 w-80 h-14 bg-white border border-[#C4C4C4] rounded-xl font-normal text-[#767676]  resize-none overflow-hidden"
        value={customerType}
        onChange={(event) => setCustomerType(event.target.value)}
        required
      >
        <option value="">Tipo de Cliente</option>
        <option value="Buyer">Comprador</option>
        <option value="Tenant">Inquilino</option>
        <option value="Owner">Proprietário</option>
        <option value="Agent">Agente</option>
      </select>

      <h4 className="font- text-base text-black mb-5">
        {' '}
        Quando pensa comprar casa?
      </h4>
      <div className="flex items-center justify-center gap-3 flex-wrap mx-8">
        <label
          htmlFor="readyToBuy"
          className="font-medium text-sm text-[#767676] flex items-center gap-1"
        >
          <input
            id="notNow"
            name="notNow"
            type="checkbox"
            checked={notNow}
            // onChange={(event) => setNotNow(event.target.checked)}
            onChange={(event) => handleCheckboxChange('notNow', event)}
            className="text-[#00D188] focus:border-[#00D188] focus:ring-[-[#00D188] h-4 w-4 rounded-full"
          />
          Agora não
        </label>

        <label
          htmlFor="readyToBuy"
          className="font-medium text-sm text-[#767676] flex items-center gap-1"
        >
          <input
            id="00N7Q00000JUIus"
            name="00N7Q00000JUIus"
            type="checkbox"
            checked={readyToBuy}
            // onChange={(event) => setReadyToBuy(event.target.checked)}
            onChange={(event) => handleCheckboxChange('readyToBuy', event)}
            value="1"
            className="text-[#00D188] focus:border-[#00D188] focus:ring-[-[#00D188] h-4 w-4 rounded-full"
          />
          Pronto para comprar
        </label>

        <label
          htmlFor="withinOneMonth"
          className="font-medium text-sm text-[#767676] flex items-center gap-1"
        >
          <input
            id="00N7Q00000JUIux"
            name="00N7Q00000JUIux"
            type="checkbox"
            checked={withinOneMonth}
            // onChange={(event) => setWithinOneMonth(event.target.checked)}
            onChange={(event) => handleCheckboxChange('withinOneMonth', event)}
            className="text-[#00D188] focus:border-[#00D188] focus:ring-[-[#00D188] h-4 w-4 rounded-full"
            value="1"
          />
          Dentro de 1 mês
        </label>

        <label
          htmlFor="withinSixMonths"
          className="font-medium text-sm text-[#767676] flex items-center gap-1"
        >
          <input
            id="00N7Q00000JUIv2"
            name="00N7Q00000JUIv2"
            type="checkbox"
            checked={withinSixMonths}
            // onChange={(event) => setWithinSixMonths(event.target.checked)}
            onChange={(event) => handleCheckboxChange('withinSixMonths', event)}
            className="text-[#00D188] focus:border-[#00D188] focus:ring-[-[#00D188] h-4 w-4 rounded-full"
            value="1"
          />
          Dentro de 6 meses
        </label>
      </div>

      <button
        type="submit"
        className="bg-[#00D188] rounded-[50px] h-14 min-w-36 px-6 mt-14 md:mt-8 text-lg text-white"
      >
        Faça o download do E-book
      </button>
    </form>
  );
}

export default TestForm;
