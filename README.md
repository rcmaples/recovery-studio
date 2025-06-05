# Sanity Clean Content Studio

1. setup clean a clean studio
    ```
    npm create sanity@latest -- --template clean --create-project "recovery-studio" --dataset production --typescript
    ```

    > Note: Some dependencies flag a false-positive in `npm audit`; let's fix that.

2. Remove packages and lock file
    ```
    rm -rf node_modules
    rm package-lock.json
    ```

3. Add override for prismjs in package.json
    ```
    // package.json
    {
        ... 
        "overrides": {
            "prismjs": "^1.30.0"
        },
    }
    ```

4. reinstall deps
    ```
    npm i react react-dom styled-components @sanity/vision sanity
    ```
    ```
    npm i -D @sanity/eslint-config-studio @types/react eslint prettier typescript eslint-plugin-prettier prettier eslint-plugin-simple-import-sort eslint-plugin-import
    ```

5. create schema and drop it into `static/` 
    ```
    npx sanity schema deploy --manifest-dir static/
    ```

6. Deploy Studio to Vercel

7. -> https://studio.puglord.dev/static/create-manifest.json