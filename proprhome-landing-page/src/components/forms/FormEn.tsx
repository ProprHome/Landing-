//imported from framer

export default function Form(props: any) {
  function handleFormSubmit(event: any) {
    event.preventDefault();
    console.log('handle Form submit running');
    // Download your PDF files here
    // For example:
    window.open(
      'https://drive.google.com/file/d/1wHzF1jpI9aNb4XCp5B9P5XomlDenpYQu/view?usp=sharing'
    );
  }

  return (
    <form
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
        Download your free e-book
      </h2>
      <input type="hidden" name="oid" value="00D7Q00000BRe0d" />
      <input type="hidden" name="retURL" value="http://" />
      <input
        style={inputStyle}
        required
        placeholder="Full name"
        maxLength={40}
        size={20}
        type="text"
        id="00N7Q00000JUEay"
        name="00N7Q00000JUEay"
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
        placeholder="Phone"
      />
      <select
        style={inputStyle}
        id="00N7Q00000JUEb3"
        name="00N7Q00000JUEb3"
        title="Customer Type"
        required
        placeholder="Select consumer type"
        className="p-2"
      >
        <option value="">Choose customer type</option>
        <option value="Buyer">Buyer</option>
        <option value="Tenant">Tenant</option>
        <option value="Owner">Owner</option>
        <option value="Agent">Agent</option>
      </select>

      <label
        style={{
          fontWeight: '500',
          fontSize: '15px',
          marginTop: '30px',
          marginBottom: '18px',
        }}
      >
        When are you planning to buy?
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
        {/* radio group */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            id="notNow"
            name="notNow"
            value="notNow"
            className="h-5 w-5 text-[#00D188] focus:border-[#00D188] focus:ring-[-[#00D188]"
          />
          <label htmlFor="notNow" style={labelStyle}>
            Not now
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
            id="00N7Q00000JUIus"
            name="00N7Q00000JUIus"
            value="1"
            className="h-5 w-5 text-[#00D188]"
          />
          <label htmlFor="00N7Q00000JUIus" style={labelStyle}>
            Ready to buy
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            id="00N7Q00000JUIux"
            name="00N7Q00000JUIux"
            value="1"
            className="h-5 w-5 text-[#00D188] focus:border-[#00D188]"
          />
          <label htmlFor="00N7Q00000JUIux" style={labelStyle}>
            Within one month
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            id="00N7Q00000JUIv2"
            name="00N7Q00000JUIv2"
            value="1"
            className="h-5 w-5 text-[#00D188]"
          />
          <label htmlFor="00N7Q00000JUIv2" style={labelStyle}>
            Within 6 months
          </label>
        </div>
      </div>
      <button type="submit" name="submit" style={buttonStyle}>
        Download
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
  overflow: 'hidden',
};

const buttonStyle = {
  backgroundColor: '#00D188',
  border: 'none',
  borderRadius: '50px',
  height: '55px',
  width: '146px',
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
