## Building our Books & Laptops Store

### Instructions & Guides

#### 1. Implement the LoginScreen

- User should enter an email (required) and a password (required)
- When the user clicks on the Save button, save the login information in the LocalStorage
- When the user clicks on the Reset button, clear the form entirely
- Disable the Header when we are on the LoginScreen

  - 1. With localStorage
  - 2. (Bonus) Disable the Header button using the Context in React
  - 3. (Bonus) Disable the Header button using Redux

- Implement the logout button: When clicking on it, clear the localStorage and navigate to the login page

##### Help:

Localstorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

##### Bonus

- Use Formik to manage the validations of the LoginScreen (https://jaredpalmer.com/formik/docs/overview)

#### 2. Add navigations to the application

- Setup the routing in your application: https://reacttraining.com/react-router/web/guides/quick-start
- Add the following code in your App.js

```javascript
<>
  <Router>
    <Header title={""} username={""}></Header>
    <Switch>
      <Route path="/login">
        <LoginScreen></LoginScreen>
      </Route>
      <Route path="/dashboard">
        <DashboardScreen></DashboardScreen>
      </Route>
      <Route path="/">
        <DashboardScreen></DashboardScreen>
      </Route>
      <Route path="/books">
        <BookStore></BookStore>
      </Route>
    </Switch>
  </Router>
</>
```

#### 3. Implement the Dashboard Screen

- Display the list of stores (books store & laptops store)
- When clicking on a store, It should navigate to that store page (start with the BookStore)
- Display the Header Component when you are on the Dashboard Screen
- Add Protected routes: Prevent users to access this page if they're not logged in

#### 4. Implement the BookStore Screen

#### 5. Implement the BookDetails Screen

#### 6. Implement the LaptopStore Screen

#### 7. Implement the LaptopDetails Screen

#### 8. Add Testing to your application
