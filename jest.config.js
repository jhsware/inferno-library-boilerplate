module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["lib/**/*.{js,jsx}"],
  globals: {
    usingJSDOM: true,
    usingJest: true
  },
  setupFilesAfterEnv: [
    require.resolve("./JEST-DEBUG.js")
  ],
  testURL: "http://localhost/"
}