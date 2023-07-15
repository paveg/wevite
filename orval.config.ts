import { defineConfig } from 'orval'

export default defineConfig({
  private: {
    input: './schemas/root.yaml',
    output: {
      workspace: './src/client/models/generated',
      target: './api.ts',
      client: 'react-query',
      mode: 'tags',
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    }
  }
})
