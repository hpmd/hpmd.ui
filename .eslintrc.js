module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'comma-dangle': 0,
        'indent': ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': 0,
        'max-len': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-multiple-empty-lines': 0,
        'no-param-reassign': ['error', {
        props: false
        }],
        'no-plusplus': 0,
        'no-underscore-dangle': 0,
        'operator-linebreak': ['error', 'after'],
        'space-before-function-paren': ['error', 'never'],
    },
};
