// imported from framer

export default function Form(props: any) {
  function handleFormSubmit(event: any) {
    event.preventDefault();
    console.log('handle Form submit running');

    window.open(
      'https://drive.google.com/file/d/1r9I_n0GDHLEFBBO4gVkCVQHG5VOgGXWD/view?usp=sharing'
    );
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <h2 className=" text-center font-medium text-3xl">
        Faça o download e-book gratuito
      </h2>
      <input type="hidden" name="oid" value="00D7Q00000BRe0d" />
      <input type="hidden" name="retURL" value="http://" />
      <input
        style={inputStyle}
        required
        placeholder="Nome completo"
        maxLength={40}
        id="00N7Q00000JUFbc"
        name="00N7Q00000JUFbc"
        size={20}
        type="text"
      />

      <input
        style={inputStyle}
        id="email"
        maxLength={80}
        name="email"
        size={20}
        type="email"
        required
        placeholder="Email"
      />

      <input
        style={inputStyle}
        id="phone"
        maxLength={40}
        name="phone"
        size={20}
        type="text"
        required
        placeholder="Telefone"
      />
      <select
        style={inputStyle}
        id="00N7Q00000JUFbS"
        name="00N7Q00000JUFbS"
        title="Tipo de Cliente"
        required
        placeholder="Select consumer type"
      >
        <option value="">Escolha o tipo de cliente</option>
        <option value="Comprador">Comprador</option>
        <option value="Inquilino">Inquilino</option>
        <option value="Proprietário">Proprietário</option>
        <option value="Agente">Agente</option>
      </select>

      <label
        style={{
          fontWeight: '500',
          fontSize: '15px',
          marginTop: '30px',
          marginBottom: '18px',
        }}
      >
        Quando pensa comprar casa?
      </label>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input type="radio" name="buying_time" value="notNow" id="notNow" />
          <label htmlFor="notNow" style={labelStyle}>
            Agora não
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            type="radio"
            id="00N7Q00000JUIv7"
            name="00N7Q00000JUIv7"
            value="1"
          />
          <label htmlFor="00N7Q00000JUIv7" style={labelStyle}>
            Pronto para comprar
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            id="00N7Q00000JUIvC"
            name="00N7Q00000JUIvC"
            value="1"
          />
          <label htmlFor="00N7Q00000JUIvC" style={labelStyle}>
            Dentro de 1 mês
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            id="00N7Q00000JUIvH"
            name="00N7Q00000JUIvH"
            value="1"
          />
          <label htmlFor="00N7Q00000JUIvH" style={labelStyle}>
            Dentro de 6 meses
          </label>
        </div>
      </div>
      <button type="submit" name="submit" style={buttonStyle}>
        Faça o download do E-book
      </button>
    </form>
  );
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonStyle = {
  backgroundColor: '#00D188',
  border: 'none',
  borderRadius: '50px',
  height: '55px',
  width: '300px',
  marginTop: '62px',
  fontFamily: 'sans-serif',
  fontWeight: '500',
  fontSize: '18px',
  color: '#FFFFFF',
};

const inputStyle = {
  padding: '16px 14px',
  width: '321px',
  height: ' 55px',
  background: '#FFFFFF',
  border: '1px solid #C4C4C4',
  borderRadius: '10px',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '150%',
  color: '#767676',
  marginTop: '25px',
};

const labelStyle = {
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '150%',
  color: '#767676',
  marginLeft: '0.2rem',
};
