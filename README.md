# meta-marked-loader

[![npm status](https://nodei.co/npm/meta-marked-loader.svg?downloads=true&stars=true)](https://npmjs.org/package/meta-marked-loader)

meta-marked-loader for webpack using [meta-marked](https://github.com/j201/meta-marked).

## Installation

```
npm install --save-dev meta-marked-loader
```

### Sample Webpack Configuration

```javascript
{
  module: {
    loaders: [
      { test: /\.md$/, loader: 'json!meta-marked' },
    ]
  }
}
```
