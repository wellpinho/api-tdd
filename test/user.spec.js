const request = require("supertest");

describe("## Users", () => {
  const { app } = require("./../src/app");

  it("should receive all users", async () => {
    await request(app)
      .get("/users")
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toHaveProperty("name", "Wellpinho");
      });
  });
});
