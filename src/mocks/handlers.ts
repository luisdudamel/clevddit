// src/mocks/handlers.js
import { rest } from "msw";
import { mockRawPostMSW } from "./mockPosts";

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
  rest.get(`${process.env.REACT_APP_API_URL}posts`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRawPostMSW));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
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
        },
      ])
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
  rest.patch(`${process.env.REACT_APP_API_URL}posts/1`, (req, res, ctx) => {
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
  rest.delete(`${process.env.REACT_APP_API_URL}posts/1`, (req, res, ctx) => {
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
