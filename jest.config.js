module.exports = {
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/test/newsaktuell/utilities/setupEnzyme.ts",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|test.tsx?)$",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  }
};
