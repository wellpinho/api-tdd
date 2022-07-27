const request = require("supertest");
const { app } = require("./../src/app");

it("should respond with status code 200", () => {
  return request(app)
    .get("/")
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
