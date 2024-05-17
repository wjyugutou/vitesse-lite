import antfu from '@antfu/eslint-config'

export default antfu({
  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,
}, {
  rules: {
    'no-console': 0,
    'unused-imports/no-unused-vars': 0,
  },
})
