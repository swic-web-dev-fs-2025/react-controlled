import { describe, expect, it } from "vitest";

import {
  doPasswordsMatch,
  getPasswordStrength,
  hasMinLength,
  hasNumber,
  hasSymbol,
  hasUpperCase,
  isValidEmail,
} from "./validators";

describe("isValidEmail", () => {
  it("should return true for valid email", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
  });

  it("should return false for invalid email", () => {
    expect(isValidEmail("notanemail")).toBe(false);
    expect(isValidEmail("missing@domain")).toBe(false);
    expect(isValidEmail("@nodomain.com")).toBe(false);
    expect(isValidEmail("")).toBe(false);
  });
});

describe("getPasswordStrength", () => {
  it("should return weak for short passwords", () => {
    expect(getPasswordStrength("pass")).toBe("weak");
    expect(getPasswordStrength("1234567")).toBe("weak");
  });

  it("should return weak for long but simple passwords", () => {
    expect(getPasswordStrength("password")).toBe("weak");
  });

  it("should return medium for passwords with some complexity", () => {
    expect(getPasswordStrength("Password")).toBe("medium"); // length + uppercase
    expect(getPasswordStrength("password123")).toBe("medium"); // length + number
  });

  it("should return strong for complex passwords", () => {
    expect(getPasswordStrength("Password123")).toBe("strong"); // length + upper + number
    expect(getPasswordStrength("Pass@123")).toBe("strong"); // all criteria
  });
});

describe("doPasswordsMatch", () => {
  it("should return true when passwords match", () => {
    expect(doPasswordsMatch("password123", "password123")).toBe(true);
  });

  it("should return false when passwords don't match", () => {
    expect(doPasswordsMatch("password123", "password456")).toBe(false);
  });

  it("should return false for empty strings", () => {
    expect(doPasswordsMatch("", "")).toBe(false);
  });
});

describe("hasMinLength", () => {
  it("should return true when string meets minimum length", () => {
    expect(hasMinLength("password")).toBe(true);
    expect(hasMinLength("12345678")).toBe(true);
  });

  it("should return false when string is too short", () => {
    expect(hasMinLength("short")).toBe(false);
    expect(hasMinLength("1234567")).toBe(false);
  });

  it("should accept custom minimum length", () => {
    expect(hasMinLength("hello", 5)).toBe(true);
    expect(hasMinLength("hi", 5)).toBe(false);
  });
});

describe("hasNumber", () => {
  it("should return true when string contains a number", () => {
    expect(hasNumber("password123")).toBe(true);
    expect(hasNumber("abc1def")).toBe(true);
    expect(hasNumber("0")).toBe(true);
  });

  it("should return false when string has no numbers", () => {
    expect(hasNumber("password")).toBe(false);
    expect(hasNumber("abcdef")).toBe(false);
  });
});

describe("hasSymbol", () => {
  it("should return true when string contains a symbol", () => {
    expect(hasSymbol("password!")).toBe(true);
    expect(hasSymbol("test@email")).toBe(true);
    expect(hasSymbol("pass#word")).toBe(true);
  });

  it("should return false when string has no symbols", () => {
    expect(hasSymbol("password123")).toBe(false);
    expect(hasSymbol("NoSymbols")).toBe(false);
  });
});

describe("hasUpperCase", () => {
  it("should return true when string contains uppercase letter", () => {
    expect(hasUpperCase("Password")).toBe(true);
    expect(hasUpperCase("HELLO")).toBe(true);
    expect(hasUpperCase("aBc")).toBe(true);
  });

  it("should return false when string has no uppercase letters", () => {
    expect(hasUpperCase("password")).toBe(false);
    expect(hasUpperCase("123!@#")).toBe(false);
  });
});
