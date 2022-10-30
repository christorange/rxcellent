import supertest from "supertest";
import { describe, test, beforeAll, expect } from "vitest";
import app from "../../../app";

const dotenv = require("dotenv");
const mongooseClient = require("mongoose");
const req = supertest(app);

dotenv.config();

describe("Item API Test", () => {
  beforeAll(async () => {
    try {
      await mongooseClient.connect(process.env.MONGO_URL);
    } catch (error) {
      console.log(error);
    }
  });
  test("should return HTTP:200", async () => {
    const result = await req.get("/items").send({}).expect(200);
  });
  test("should return unprescribed items only", async () => {
    const result = await req
      .get("/items/prescription?type=non-prescribed")
      .send({});
    const non_prescribed_items_count = result._body.filter(
      (x) => x.prescription === "non-prescribed"
    ).length;
    const items_count = result._body.length;
    expect(non_prescribed_items_count).toBe(items_count);
  });
});
