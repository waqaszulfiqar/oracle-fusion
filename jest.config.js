/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // All imported modules in your tests Should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,
  bail: false,
  verbose: true,
  // The directory where Jest Should store its cached dependency information
  // cacheDirectory: "/private/var/folders/0q/2b8fjlps01d1qbjx1b10_9jr0000gn/T/jest_dx",

  // Automatically clear mock calls and instances between every test
  // clearMocks: false,

  // Indicates whether the coverage information Should be collected while executing the test
  // collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information Should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest Should output its coverage files
  coverageDirectory: "results/coverage",
  setupFilesAfterEnv: ["jest-allure/dist/setup"],

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Indicates which provider Should be used to instrument code for coverage
  // coverageProvider: "babel",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    "html",
    "text",
  ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100
  //   }
  // },

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,
  //globalSetup: './setup.js',

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
   moduleFileExtensions: [
     "js",
  //   "jsx",
  //   "ts",
  //   "tsx",
     "json",
  //   "node"
   ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,
  preset: "jest-puppeteer",

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,
  /* reporters: [
    "default",
    [
      "jest --json --outputFile=result.json --testLocationInResults"
    ]
    [
      "./node_modules/jest-cucumber/dist/src/reporter", //This is the default path
      {
        formatter: "json",
        path: "./BrowserTesting/Puppeteer/cucumber-report.json" //specific path
      }
    ]
  ], */
  // Automatically reset mock state between every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state between every test
  // restoreMocks: false,

  // The root directory that Jest Should scan for tests and modules within
  // rootDir: undefined,
  rootDir: ".",

  // A list of paths to directories that Jest Should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    'dotenv/config'
  ],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: [],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest Should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  // testEnvironment: "jest-environment-node",
  //globalTeardown: './teardown.js',
  //testEnvironment: '<rootDir>/testEnvironment.js',
  

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},
  // testEnvironment: "node",
  //testEnvironment: './puppeteer_environment.js',

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],
  //testMatch: [
  //  "**/*.steps.js",
  //  "**/__tests__/**/*.[jt]s?(x)",
  //  "**/?(*.)+(spec|test).[tj]s?(x)"
  //],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],
  testRegex: ".test.js$",

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  testRunner: "jest-jasmine2",
  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: "http://localhost",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // timers: "real",

  // A map from regular expressions to paths to transformers
  // transform: undefined,
  //transform: { "^.+\\.(t|j)s$": "ts-jest" },
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest" // Use <rootDir> .
 },
//}

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test Should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};

module.exports = config;

