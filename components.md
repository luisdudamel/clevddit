# Responsibilities list

## Data

- Posts
- User
- Users
- UI

### Modifications:

- Posts:.

  - Delete one post
  - Edit one post.

- User:

  - Logged in.
  - Logged out.

- UI:
  - On.
  - Off.
  - TextMessages

## Components

### Button:

- Render a buttton with the received text.
- Call the received function.

### Feedback:

- Render three dots depending on the UI state.
- Render modal depending on the UI state.

### LoginRegisterForm:

- Render a form, with the received text.
- Render a button component, giving it's text and function depending on the page.
- Call the submit function for the form.

### Post:

- Render a heading and a received text.
- Render two images, giving them a function.
- Call the received functions.

### Items List:

- Render as many post or user components as received, passing a heading.
- Pass designated function to Post component depending on the obtained state.

### Header:

- Render an image for the logo.
- Render a hamburger menu, giving it it's text and function to call.
- Render a higlighted navigation link depending on the page.
- Call the received function for navigation.

### Hamburger Menu:

- Render a received text.
- Render navlink elements.
- Render a text with "Log out" and an image.
- Call the received functions for the received text on click action.

### CheckLogged:

- Render a passed child, depending on the logged status.
- Call the navigate function

### CheckNotLogged:

- Render a passed child, depending on the logged status.
- Call the navigate function

### Home Page:

- Render a Items list component.

### Post Detail Page:

- Render a Post component giving it it's text and functions.
- Render a form, with the received text.
- Render a button with passing it's text.
- Call the submit function for the form.

### Login / Register page:

- Render a login or register form depending on the page, giving it it's text.

## App:

- Render a header component.
- Render a home page, detail page, edit page or register / login page, depending the actual route.
- Call the initial load function.
