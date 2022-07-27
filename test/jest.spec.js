it("devo conhecer as principais acertivas do jest ", () => {
  expect(2 + 2).toBe(4);
});

it("devo saber trabalhar com objetos ", () => {
  const obj = {
    name: "Wellington",
    email: "wellpinho@outlook.com",
  };

  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("name", "Wellington");
  expect(obj.name).toBe("Wellington");

  const obj2 = {
    name: "Wellington",
    email: "wellpinho@outlook.com",
  };

  expect(obj).toEqual(obj2);
});
