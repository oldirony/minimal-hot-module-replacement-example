How many times have you heard of _Hot Module Replacement_?

And how many times have you used it, without knowing exactly knowing how to enable it?

On the Internet there are many examples with React, but it's very hard to find just the bare-bones of what's required to activate it.

Hence this repo.

# How to add hot module replacement in you server?

1. Add `webpack-hot-middleware/client` as one of your entries in the Webpack configuration (`./webpack.config.js`).

```javascript
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname,"src/client.js")
  ],
```

2. Add a new instance of `webpack.HotModuleReplacementPlugin(),` in your plugin list in the webpack configuration (`./webpack.config.js`).

```javascript
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
```

3. In your main client js file (`./src/client.js` in this instance) activate the module reload with this conditional function

```javascript
if (module.hot) {
  module.hot.accept()
}
```

4. Add `webpack-hot-middleware` to your Express app, with your webpack object as first parameter (`./server.js`).

```javascript
app.use(webpackHot(compiler))
```



## Boom. Done.

Have fun playing with it!