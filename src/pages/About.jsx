import queryString from 'query-string';

function About(props) {
  const urlSearchParams = props.location.search;
  /*
   * url param parsing 방법 1 => URLSearchParams 내장 객체
   * url param parsing 방법 2 => query-string lib
   */
  // const searchParams = urlSearchParams && new URLSearchParams(urlSearchParams);
  // const name = searchParams && searchParams.get('name');
  const query = queryString.parse(urlSearchParams);
  const { name } = query;
  console.log(name);
  console.log('# urlSearchParams: ', urlSearchParams);
  console.log('# query: ', query);
  // console.log('# searchParams: ', searchParams);
  // console.log('# searchParams.get("name"): ', name);

  return (
    <div>
      <h2>About</h2>
      {name && <p> urlParam key값 name은 {name} 입니다.</p>}
    </div>
  );
}

export default About;
