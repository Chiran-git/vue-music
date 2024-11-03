import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Ensure globals is set to true
    environment: 'jsdom' // Set the test environment to jsdom
  }
});