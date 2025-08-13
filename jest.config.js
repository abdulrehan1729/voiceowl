export default {
    preset: "ts-jest", // if you use TypeScript, otherwise remove this
    testEnvironment: "node",
    transform: {},
    moduleFileExtensions: ["js", "ts", "json"],
    testMatch: ["**/__tests__/**/*.test.(js|ts)"], // Looks inside __tests__ folder
    verbose: true,
};
