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
        Download free e-book
      </h2>
      <input type="hidden" name="oid" value="00D7Q00000BRe0d" />
      <input type="hidden" name="retURL" value="http://" />
      <input
        style={inputStyle}
        required
        placeholder="Full name"
        id="first_name"
        maxLength={40}
        name="first_name"
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
        placeholder="Phone"
      />
      <select
        style={inputStyle}
        name="consumer"
        id="consumer_type"
        required
        placeholder="Select consumer type"
      >
        <option value="Choose customer type">Choose customer type</option>
        <option value="buyer">Buyer</option>
        <option value="tenant">Tenant</option>
        <option value="agent">Agent</option>
        <option value="owner">Owner</option>
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            name="buying_time"
            value="notNow"
            id="notNow"
            required
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
            name="buying_time"
            value="readyToBuy"
            id="readyToBuy"
          />
          <label htmlFor="readyToBuy" style={labelStyle}>
            Ready to buy
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            name="buying_time"
            value="oneMonth"
            id="oneMonth"
          />
          <label htmlFor="oneMonth" style={labelStyle}>
            Within one month
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            name="buying_time"
            value="sixMonths"
            id="sixMonths"
          />
          <label htmlFor="sixMonths" style={labelStyle}>
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
