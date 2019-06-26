module.exports = {
  root: true,
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  parser:  "@typescript-eslint/parser",
  env: {
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    'object-curly-newline': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 2,
        '@typescript-eslint/array-type': 2,
        '@typescript-eslint/ban-types': 2,
        camelcase: 0,
        '@typescript-eslint/camelcase': 2,
        '@typescript-eslint/class-name-casing': 2,
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/explicit-member-accessibility': 2,
        indent: 0,
        '@typescript-eslint/indent': [2, 2],
        '@typescript-eslint/interface-name-prefix': 2,
        '@typescript-eslint/member-delimiter-style': 2,
        '@typescript-eslint/no-angle-bracket-type-assertion': 2,
        'no-array-constructor': 0,
        '@typescript-eslint/no-array-constructor': 0,
        '@typescript-eslint/no-empty-interface': 2,
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-inferrable-types': 2,
        '@typescript-eslint/no-misused-new': 2,
        '@typescript-eslint/no-namespace': 2,
        '@typescript-eslint/no-non-null-assertion': 2,
        '@typescript-eslint/no-object-literal-type-assertion': 2,
        '@typescript-eslint/no-parameter-properties': 2,
        '@typescript-eslint/no-triple-slash-reference': 2,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/prefer-interface': 2,
        '@typescript-eslint/prefer-namespace-keyword': 2,
        '@typescript-eslint/type-annotation-spacing': 2,
        'no-undef': 0,
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'import/no-unresolved': 0,
        'react/jsx-filename-extension': [1, { "extensions": [".ts", ".tsx"] }],
        '@typescript-eslint/no-undef': 0,
        'jsx-quotes': [2, 'prefer-single'],
        'implicit-arrow-linebreak': 0,
        'operator-linebreak': 0,
        'no-return-await': 0,
        'noUnusedLocals': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        '@typescript-eslint/no-unused-vars': ['error', {'args': 'none'}],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'react/prop-types': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
      },
    },
  ]
}
