import LoginButton from '../components/LoginButton';

export default function Login(props) {
  console.log('# Login pages: ', props);

  function login() {
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  }

  return (
    <div>
      <h2>Login page</h2>
      <LoginButton></LoginButton>
    </div>
  );
}
