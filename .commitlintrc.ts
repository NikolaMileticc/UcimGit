export default {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => message.includes("[skip hooks]")],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"],
    ],
    "scope-case": [2, "always", "kebab-case"],
    "subject-case": [2, "always", "sentence-case"],
  },
};
