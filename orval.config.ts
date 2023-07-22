import { defineConfig } from 'orval'

export default defineConfig({
  private: {
    input: './schemas/root.yaml',
    output: {
      workspace: './src/client/apis/generated',
      target: './api.ts',
      client: 'react-query',
      mode: 'tags',
      mock: true,
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    }
  }
})
