import { parseStringToArray, parseIngredientArraytoObj } from "../parsing.ts";

describe("parseStringToArray function", () => {
  it("should parse a single-line string into an array", () => {
    const text = "apple, orange, banana";
    const expected = ["apple, orange, banana"];
    const result = parseStringToArray(text);
    expect(result).toEqual(expected);
  });

  it("should parse a multi-line string into an array of trimmed lines", () => {
    const text = `
      line 1
      line 2
      line 3
    `;
    const expected = ["line 1", "line 2", "line 3"];
    const result = parseStringToArray(text);
    expect(result).toEqual(expected);
  });

  it("should ignore empty lines and whitespace", () => {
    const text = `
      line 1

      line 2

      line 3
    `;
    const expected = ["line 1", "line 2", "line 3"];
    const result = parseStringToArray(text);
    expect(result).toEqual(expected);
  });

  it("should handle leading/trailing whitespace in lines", () => {
    const text = `
      line 1  
        line 2   
      line 3
    `;
    const expected = ["line 1", "line 2", "line 3"];
    const result = parseStringToArray(text);
    expect(result).toEqual(expected);
  });

  it("should handle various newline characters (\\n, \\r\\n)", () => {
    const text = "line 1\nline 2\r\nline 3";
    const expected = ["line 1", "line 2", "line 3"];
    const result = parseStringToArray(text);
    expect(result).toEqual(expected);
  });

  it("should return an empty array for empty input", () => {
    const text = "";
    const expected: string[] = [];
    const result = parseStringToArray(text);
    expect(result).toEqual(expected);
  });
});

describe("parseIngredientLine function", () => {
  test("should parse a valid ingredient line", () => {
    const line = "1 cup flour";
    const expected = { quantity: 1, unit: "cup", item: "flour" };
    const result = parseIngredientArraytoObj(line);
    expect(result).toEqual(expected);
  });

  test("should handle additional spaces in the line", () => {
    const line = "  2.5   tsp  salt  ";
    const expected = { quantity: 2.5, unit: "tsp", item: "salt" };
    const result = parseIngredientArraytoObj(line);
    expect(result).toEqual(expected);
  });

  test("should return null for invalid input", () => {
    const line = "invalid line";
    const result = parseIngredientArraytoObj(line);
    expect(result).toBeNull();
  });
});
