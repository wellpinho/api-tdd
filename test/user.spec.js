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
      password: "123",
    };

    await request(app)
      .post("/users")
      .send(user)
      .then((err, res) => {
        if (err) {
          expect(err.status).toBe(400);
          expect(err.text).toContain("User already exists! Please login in");
        } else {
          expect(res.status).toBe(201);
          expect(res.body).toHaveProperty("name", "Mary");
        }
      });
  });

  it("should update an user with success", async () => {
    const user = {
      id: "62e2b5dffe43ad02680b8f44",
      name: "Mercy",
      email: "mercy-updated@gmail.com",
    };

    await request(app)
      .put(`/users/${user.id}`)
      .send(user.email)
      .then((err, res) => {
        if (err) {
          expect(err.status).toBe(400);
        } else {
          expect(res.status).toBe(201);
          expect(res.body).toHaveProperty("email", "mercy-updated@gmail.com");
        }
      });
  });
});
