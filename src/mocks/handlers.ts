// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}posts/12`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        body: "This time I guess I'm going to see the moon landing",
        id: "12",
        title: "We are going to the moon!",
        userId: "1",
      })
    );
  }),
  rest.get(`${process.env.REACT_APP_API_URL}users/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        address: {
          city: "",
          geo: { lat: "", lng: "" },
          street: "",
          suite: "",
          zipcode: "",
        },
        company: { bs: "", catchPhrase: "", name: "" },
        email: "",
        id: 1,
        name: "",
        phone: "",
        username: "SpaceFan",
        website: "",
      })
    );
  }),
];
