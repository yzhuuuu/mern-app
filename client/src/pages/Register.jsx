import { Form, Link, redirect, useNavigation } from 'react-router-dom';
import { FormRow, Logo } from '../components';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

function Register() {
  const navigation = useNavigation();
  const pending = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form className='form' method='POST'>
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
        <button type='submit' className='btn btn-block' disabled={pending}>
          {pending ? 'submitting' : 'submit'}
        </button>
        <p>
          Already a member?{' '}
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default Register;
