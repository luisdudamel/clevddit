# Clevddit, a posts platform.🔖

## Technical skills assessment for Cleverpy.

Clevddit is a platform for managing posts from users. You can list all posts, see one post detail, delete a post and a edit a post.
Also you have a complete user list, with their full details.

---

  <div align="center">
  <br/>

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=luisdudamel_clevddit)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_clevddit&metric=coverage)](https://sonarcloud.io/summary/new_code?id=luisdudamel_clevddit)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_clevddit&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=luisdudamel_clevddit)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_clevddit&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=luisdudamel_clevddit)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_clevddit&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=luisdudamel_clevddit)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_clevddit&metric=bugs)](https://sonarcloud.io/summary/new_code?id=luisdudamel_clevddit)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_clevddit&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=luisdudamel_clevddit)

---

  <br/>

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

  </div>

  <div align="center">

---

## Usage

  </div>
  <div align="center">

  <img style="height:500px" src="https://s3.gifyu.com/images/clevddit-desk.gif" />
  <br/>
  <img style="height:300px" src="https://s3.gifyu.com/images/clevddit-mob.gif" />

  </div>

---

  <br/>

  <div align="center">
  <br/>

## [Live website](https://clevddit.vercel.app/) 🔗

### Credentials

    - Username: admin
    - Password: admin

  <br/>
  </div>

## Project info📚

### Key Features:

- App state managed via Redux Toolkit.
- Slices and Thunks prepared for a full API Rest integration for error handling.
- Reading, editing and deleting posts ready, with full external request implementation.
- Login data stored on localstorage. Prepared for external auth implementation.
- Full SPA behaviour, react-router-dom integrated. Every route is protected, so the user can be redirected to login or home page based on logged status.
- Code minified build.
- CI/CD integrated pipeline. Github workflows for automatic testing and lint-checking on PR.
- Logout button, clears localstorage, logs out user and redirects to login.
- RWD ready. Navigation through navbar on desktop, hamburger menu on mobile.
- Flexbox as the main layout strategy. Grid layout for lists.
- SCSS Color custom variables.
- No third party libraries for styling or layout implementation.
- <b>Figma custom made design [here](https://www.figma.com/file/0ya2csuAiQOMKrvTUc4kWf/Clevddit?node-id=2%3A757&t=LDJxqnAaL7FMLHbu-1)</b>
- 0 bugs, 0 code smells, 0 technical debts.
- All external request tests, covered by mocking API responses with MSW.
- 90% testing coverage, via unit testing, component testing, integration testing, snapshot testing and E2E testing.

  </br>

  <div align="center">

  <img style="height:400px" src="https://s9.gifyu.com/images/cypress.gif" />

  </div>

  </br>

**Core Technologies used:**

```
  - Typescript
  - React
  - SASS
  - Cypress
  - Jest
  - React router dom
  - MSW
```

### Assets

- Environment variable: `https://jsonplaceholder.typicode.com/`
- Postman ready useful endpoints collection (.json file) [here](Clevddit.postman_collection.json) 🔗

**Components**

Components responsibilities available [here](components.md) 🔗

```
    .
    └── components(/)
      └── Button
      └── CheckLogged
      └── CheckNotLogged
      └── Feedback
      └── Hamburger
      └── Header
      └── ItemsList
      └── LoginRegisterForm
      └── Post
      └── User

```

  <br/>
  <br/>

---

  <br/>
  <br/>

## Commands

```shell
    # Installation command
    npm i or npm/yarn i

    # Running command
    npm start

    # Build command
    npm run build

```

```shell
    # Testing command
    npm run test

    # Testing watch command
    npm run test:watch

    # Testing coverage command
    npm run test:coverage

    # End To End testing command
    npm run cypress:open
```

  <br/>

---

  <br/>

## License

[MIT](https://opensource.org/licenses/MIT)
