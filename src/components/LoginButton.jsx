import { withRouter } from 'react-router-dom';

export default withRouter(function LoginButton(props) {
  console.log('# LoginButton components: ', props);
  function login() {
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  }
  return <button onClick={login}>LOGIN</button>;
});
