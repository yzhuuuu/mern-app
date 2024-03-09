import { FormRow, Logo } from '../components';

import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow
          type={'text'}
          name='name'
          labelText={'name'}
          defaultValue={'john'}
        />
        <FormRow
          type={'text'}
          name='lastName'
          labelText={'last name'}
          defaultValue={'doe'}
        />
        <FormRow
          type={'text'}
          name='location'
          labelText={'location'}
          defaultValue={'earth'}
        />
        <FormRow
          type={'email'}
          name='email'
          labelText={'email'}
          defaultValue={'test@test.com'}
        />{' '}
        <FormRow
          type={'password'}
          name='password'
          labelText={'password'}
          defaultValue={'123123123'}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?{' '}
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
