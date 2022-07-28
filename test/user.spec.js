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

  it("should create an user with success", async () => {
    const user = {
      name: "Mary",
      email: "mary@gmail.com",
    };

    await request(app)
      .post("/users")
      .send(user)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .then((err, res) => {
        if (err) {
          expect(err.status).toBe(401);
        } else {
          expect(res.status).toBe(201);
          expect(res.body).toHaveProperty("name", "Mary");
        }
      });
  });
});
