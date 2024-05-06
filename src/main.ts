import { transform } from '@babel/standalone'

// @ts-ignore
import babelPresetSolid from 'babel-preset-solid'

const result = transform(
  `import { render } from 'solid-js/web'

function HelloWorld() {
  return <div>Hello World!</div>
}

render(() => <HelloWorld />, document.getElementById('app'))`,
  {
    presets: [
      [babelPresetSolid, { generate: 'dom', hydratable: false }],
      ['typescript', { onlyRemoveTypeImports: true }]
    ],
    filename: 'main.tsx',
    sourceMaps: 'inline'
  }
)

console.log(result)
