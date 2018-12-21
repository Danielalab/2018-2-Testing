# Mocking with Jest

- Instalar jest para realizar los tests:
  **_npm install --save-dev jest_**
- Agregar jest al script de test:
  **_"test": "jest --coverage"_**
- Instalar Babel:
  **_npm install --save-dev @babel/cli_**
- Agregar babel al script de build:
  **_"build": "babel src -d lib"_**
- **_npm install @babel/preset-env --save-dev_**
- **_npm install @babel/core --save-dev_**
- crea archivo .babelrc:
      {
        "presets": ["@babel/preset-env"]
      }
- **_npm install --save-dev @babel/plugin-transform-modules-commonjs_**
