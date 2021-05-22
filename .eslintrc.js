module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:jest/recommended",
    ],

    plugins: ["react", "react-hooks", "@typescript-eslint", "jsx-a11y", "jest"],

    env: { browser: true, es6: true, jest: true },

    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    globals: {
        __dirname: true,
        module: true,
        BUILD_TYPE: true,
    },
    ignorePatterns: ["/*.*"],
    rules: {
       
        "no-func-assign": "error",
        "no-magic-numbers": [
            "error",
            {
                ignore: [
                    1,
                    0,
                    -1
                ]
            }
        ],
        // 👇🏻 `@typescript-eslint` overrides
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 1,
        "@typescript-eslint/no-use-before-define": [
            "error",
            { functions: false, classes: false }
        ],
        "@typescript-eslint/ban-ts-comment": [
            "error",
            { "ts-ignore": "allow-with-description" }
        ],
    },

    parser: "@typescript-eslint/parser",
};
