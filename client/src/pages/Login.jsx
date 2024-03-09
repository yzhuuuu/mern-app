import { FormRow, Logo } from '../components';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

function Login() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>
        <FormRow
          type='email'
          name='email'
          labelText='Email'
          defaultValue={'test@test.com'}
        />
        <FormRow
          type='password'
          name='password'
          labelText='password'
          defaultValue={'123123123'}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <button type='button' className='btn btn-block'>
          explore the app
        </button>
      </form>
    </Wrapper>
  );
}

export default Login;
