# Design Token Test


## Token/Variable Formatting
Current example tokens are stored in JSON format in `style-tokens.json`

Project uses the [Style Dictionary](https://www.npmjs.com/package/style-dictionary) package ( style-dictionary@4.3.3 ) to convert the Token Studio compatible JSON to css variables. 

Running the following line will generate `src/style-variables.css` 
```
npm run build-tokens
```

Original package was added using  `npm install --save-dev style-dictionary`

Transformation details ( input/output files, etc. ) are defined in `tokens.config.json` 

Had to specify `"build-tokens": "style-dictionary build --config tokens.config.json"` in scripts section of `package.json` to account for alteration from expected name `config.json` to actual `tokens.config.json`

> Note to self: [Style Dictionary Transforms](https://www.npmjs.com/package/@tokens-studio/sd-transforms) may be useful for more control.

## POC Project vs Capella

`tailwind.config.js` represents `tailwind.config.cjs`, with small changes to account for conversion from CommonJS.

`App.css` represents `app.scss`. However, in `App.css` all color vars are commented out, & instead imported from style-dictionary generated file `src/style-variables.css`
These imported variables are the same ones successfully called by the tailwinds config file in this example.

## Try it out

To start project:
```
npm run dev
```
To try storybook:
```
npm run storybook
```






