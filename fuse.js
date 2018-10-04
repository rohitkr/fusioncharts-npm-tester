const { FuseBox } = require('fuse-box');

const fuse = FuseBox.init({
  _homeDir: './',
  output: './dist/',
  target: 'es5',
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  autoImport: {
    Inferno: "inferno"
  },
  log: {
    showBundledFiles: true
  }
});

fuse.bundle('./dist/bundle.js').instructions('> ./src/renderer.js');
fuse.run();