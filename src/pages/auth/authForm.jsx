import styled from "styled-components";

const Wrapper = styled.section`
  width: 40%;
  min-width: 300px;
  max-width: 500px;
  margin: 10% auto;
  .row > .form {
    padding: 10px 20px;
    .btn {
      margin: 5px;
    }
    .input-field input[type=text]:focus + label {
      color: #00796B;
    }
    .input-field input[type=text]:focus {
      border-bottom: 1px solid #1A237E;
    }
    .input-field input[type=text].valid {
      border-bottom: 1px solid #00796B;
    }
  }
`;

const Form = () => {
  return (
    <div className="row">
      <div className="col s12 indigo lighten-5 form">
        <div className="input-field col s12 m7 offset-m2">
          <input id="login" type="text" className="validate" />
          <label htmlFor="login">Login</label>
        </div>
        <div className="input-field col s12 m7 offset-m2">
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="col s12">
          <button className="col s12 m5 waves-effect deep-purple lighten-2 btn">LogIn</button>
          <button className=" col s12 m5 waves-effect purple lighten-2 btn">SignUp</button>
        </div>
      </div>
    </div>
  )
}

const AuthForm = () => {
  return (
    <div>
      <Wrapper>
        <Form />
      </Wrapper>
    </div>
  )
}

export default AuthForm;