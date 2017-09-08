module.exports = {
  ignorePathForImportAndRequireStatements: {
    type: 'string',
    default: '',
    description: "A path chunk to ignore when creating import and require statements.<br/>E.g. With a setting of `app/assets/javascripts/` and a file at `/path/to/file/app/assets/javascripts/some/path/Foo.jsx`<br/>an import statement would be `import Foo from 'some/path/Foo.jsx';`<br/>a require statement would be `const Foo = require('some/path/Foo.jsx');`",
  },
}
