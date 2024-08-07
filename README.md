# Arena Split Core

## Typescript application following Domain Driven Design principles

### Development

To start the project you need to have the following tools installed:

- Node.js v20
- NPM v10
- WebStorm or any other IDE that supports Typescript
- Git

### Installation of the repository

1. Clone the repo

    ```bash
    git clone git@github.com:carlosupreme/arena-split-core.git
    ```

2. Navigate to the `arena-split-core` folder

    ```bash
    cd arena-split-core
    ```
3. Inmediately after cloning the repository you need to move to the `develop` branch

    ```bash
    git checkout develop
    ```
4. And create your own branch

    ```bash
    git checkout -b my-new-feature
    ```   

5. Install the dependencies
    ```bash
    npm install
    ```

6. Run the tests
    ```bash
    npm run test
    ```

7. Build the application to ensure everything is working fine
    ```bash
    npm run build
    ```

### Developing in the Core

Once you have the application running you can start developing in the core. The core is the main application that will be
used by other applications like the `api` or the `web` application.

When you are developing in the core application you need to follow these steps

Do `Test Driven Development` please, write the test first and then write the code to make the test pass

### Deployment

Suppose that you made a new feature (with tests).

You can deploy the core application to `npm` and then other developers that are using the core will have your
changes.

Just run the following commands:

Obviously the tests should be passing before deploying, so ensure that

```bash
npm run test 
```

Then run the following command to build the application

```bash
npm run build
```

The successful output should look like this:

```bash
> arena-split-core@0.0.9-SNAPSHOT build
> tsup

CLI Building entry: src/index.ts
CLI Using tsconfig: tsconfig.json
CLI tsup v8.1.0
CLI Using tsup config: /home/carlos/programacion/arena-split/core/package.json
CLI Target: es2020
CLI Cleaning output folder
CJS Build start
ESM Build start
ESM dist/index.mjs     4.07 KB
ESM dist/index.mjs.map 16.80 KB
ESM ⚡️ Build success in 132ms
CJS dist/index.js     4.32 KB
CJS dist/index.js.map 16.45 KB
CJS ⚡️ Build success in 145ms
DTS Build start
DTS ⚡️ Build success in 1442ms
DTS dist/index.d.ts  5.38 KB
DTS dist/index.d.mts 5.38 KB
```

After that, change the `package.json` version to a new version, following our `versioning guide`.

```json
// package.json before
{
  "version": "1.1.0"
}
```
```json
// package.json after
{
  "version": "1.2.0"
}
```

And then publish it to `npm`

```bash
npm publish --tag latest
```

If everything goes well commit your branch and push it to the remote repository

```bash
git add . &&  git commit -m 'new feature' && git push origin my-new-feature
```

Finally open a pull request to the `develop` branch and wait for the approval

## Thank you for contributing to the core application 🎉🤗