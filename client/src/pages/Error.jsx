import { Link, useRouteError } from 'react-router-dom';

import Wrapper from '../assets/wrappers/ErrorPage.js';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Ohh! page not found</h3>
          <p>We cannot seem to find the page you are looking for</p>
          <Link to='/dashboard'>back to dashboard</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>Something went wrong!!!</h3>
      <Link to='/dashboard'>back home</Link>
    </Wrapper>
  );
};
export default Error;
