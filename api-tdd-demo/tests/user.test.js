const request = require("supertest");

let server;

describe("/userRoute", () => {
  beforeEach(() => {
    server = require("../index");
  });

  afterEach(() => {
    server.close();
  });

  describe("/getUser", () => {
    it("should return user", async () => {
      const result = await request(server).get("/api/user/1");
      expect(result).not.toBeNull();
    });

    it("should return 404 if no user", async () => {
      const result = await request(server).get("/api/user/5");
      expect(result.status).toBe(404);
    });
  });
  describe("/AllUsers", () => {
    it("should return all users", async () => {
      const result = await request(server).get("/api/user");
      expect(result).not.toBeNull();
    });
  });
});
