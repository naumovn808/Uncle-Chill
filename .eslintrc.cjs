module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: true,
        commonjs: true
    },
    extends: "eslint:recommended",
    rules: {
        "no-console": "off"
    }
};
