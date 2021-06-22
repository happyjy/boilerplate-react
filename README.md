# 적용 1 - lint-staged, husky 사용 eslint, prettier를 commit 전에 적용 시키기

1. husky(git hook) 설치

- git hook, git 명령어 이벤트 수행시 명령어 수행 할 수 있게 도와주는 lib
- npx husky install은 .git 파일 있는 dir에서 수행 해야한다.

```
  npm i husky -D
  npx husky install
```

- husky package.json 설정

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```

2. commit할때 git hook(husky)를 사용해 특정 명령어 수행
   : husky 명령어를 통해서 "npx lint-staged" 명령어 수행

```
  npx husky add .husky/pre-commit "npx lint-staged"
```

```
  "scripts": {
    "prepare": "husky install"
  }
```

3. lint-staged, eslint, prettier를 devDependencies로 설치

```
  npm i lint-staged -D
  npm i eslint prettier -D
```

4. lint-staged 설정
   : js, json 파일에서 할 수 있다.
   : package.json 설정 방법
   : \*_/_.js: 모든 폴더 js파일에 대해서
   : eslint --fix, prettier --write, git add 명령어를 수행

```
  "lint-staged": {
    "**/*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
```

# 적용 2 - react-router-dom 적용

[react-router-dom quick start](https://reactrouter.com/web/guides/quick-start)

# 적용 3 - Dynamic Routing & nested Routing

[nested-routing quick start](https://reactrouter.com/web/guides/quick-start/2nd-example-nested-routing)

- [useRouteMatch](https://reactrouter.com/web/api/Hooks/useroutematch)
  - The useRouteMatch hook attempts to match the current URL in the same way that a <Route> would. It’s mostly useful for getting access to the match data without actually rendering a <Route>.
- [useParams](https://reactrouter.com/web/api/Hooks/useparams)
  - useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>

# 적용 4 - Dynamic Routing(with Route props)

- routing시 이동시에 url을 통해 정보 전달 방법

  - 아래 두가지 방법 모두 route-props 정보를 통해서 얻을 수 있다.

  1. useParams hook을 이용해서 value 전달
     1. props.match.params
  2. query parameters(key,value pair)
     1. props.location.search

- [route-props](https://reactrouter.com/web/api/Route/route-props)

  - All three render methods will be passed the same three route props

    - match, location, history

  - route-props의 props.location.search
    - url ? 기호 뒤 key=value값 사용
  - useParams
    - route-props의 props.match.params와 같음
    - Route property path에 "about/:KEY" 설정
    - localhost:3000/about/2 입력시 props.match.params.KEY 객체로 "2"(string type) 접근가능

- [component](https://reactrouter.com/web/api/Route/component)

- query string 사용

  ```
    npm i query-string -S
  ```

- query-string lib
  - [query-string](https://github.com/sindresorhus/query-string#readme)

# 적용 5 - Switch & notfound page 설정

- 여러 Route 중 순서대로 먼저 맞는 하나만 보여줍니다.
- exact 를 뺄 수 있는 로직을 만들 수 있습니다.
- 가장 마지막에 어디 path 에도 맞지 않으면 보여지는 컴포넌트를 설정해서,
  "Not Found" 페이지를 만들 수 있습니다.

# 적용 6 - List, NavLinks 적용

- [List](https://reactrouter.com/web/api/Link)

  - Provides declarative, accessible navigation around your application.

- [NavLinks](https://reactrouter.com/web/api/NavLink)
  - A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

# 적용 7 - JS로 routing 하기(with withRouter)

- 배울 두가지
  - page에서 에서 js로 페이지 이동하는 방법
  - page가 아닌 component에서 react-router-dom의 props값이 없다. 이때는 withRouter 객체를(react-router-dom pkg) 사용해서 props(match, location, history) 접근가능

- [route-props](https://reactrouter.com/web/api/Route/route-props)
- react-router-dom에 Route 객체 arguments에는 3개의 프로퍼티가 있다.(match, location, history)
- 이 중 history.push를 이용해서 routing을 구현 할 수 있다.

# 적용 8 -

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
