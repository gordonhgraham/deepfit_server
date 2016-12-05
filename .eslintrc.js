module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es6',
    'ryansobol/jquery',
    'ryansobol/mocha',
    'ryansobol/node',
  ],
  rules: {
    "quotes": ["warn", "backtick"],
    "no-plusplus": 0,
    "no-undefined": 0,
    "max-statements": ["error",15,{"ignoreTopLevelFunctions": true}],
    "max-len": ["error", { "ignoreComments": true, "ignoreTrailingComments": true, "ignoreUrls": true }],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    // "newline-after-var": "off",
    "id-length": ["error", { "exceptions": ["a","b","i","x","y"] }],
    "semi": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "sort-keys": ["off"],
  }
};
