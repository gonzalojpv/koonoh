module.exports = {
    env: {
        node: true,
        'vue/setup-compiler-macros': true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
    rules: {
         "no-undef": "off",
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/valid-v-on': 'off',
        'vue/no-v-html': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/require-default-prop': 'off',
        'vue/script-setup-uses-vars': 'error',
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: [
                    'login',
                    'signup',
                    'list',
                    'index',
                    'detail',
                    'create',
                    '[...all]',
                    'default',
                ],
            },
        ],
        // prod issues
        'arrow-body-style': 'off',
        'max-len': 'off',
        'object-curly-newline': 'off',
        'space-before-function-paren': 'off',
        'no-empty': 'off',
        'object-curly-spacing': 'off',
        'operator-linebreak': 'off',
        'no-dupe-keys': 'off',
        'vue/no-dupe-keys': 'off',
        'arrow-parens': 'off',
        'no-plusplus': 'off',
        'object-shorthand': 'off',
        'no-underscore-dangle': 'off',
    },
}
