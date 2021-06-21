
# 적용 1 - lint-staged, husky 사용 eslint, prettier를 commit 전에 적용 시키기

1. husky(git hook) 설치

* git hook, git 명령어 이벤트 수행시 명령어 수행 할 수 있게 도와주는 lib
* npx husky install은 .git 파일 있는 dir에서 수행 해야한다.

```
  npm i husky -D
  npx husky install
```

* husky package.json 설정

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
: **/*.js: 모든 폴더 js파일에 대해서
  : eslint --fix, prettier --write, git add  명령어를 수행

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
