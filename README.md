When `require.context` is used in a module that has been discovered through an entry in
`resolve.modules`, the keys are duplicated.

To reproduce this issue:

1. Clone this repository
2. `npm install`
3. `npm --silent start`

You will see the output:

```
require.context: [ './thing.js', 'test/things/thing.js' ]
```

the correct output would be:

```
require.context: [ './thing.js' ]
```

See:

- The files in [foobar/test](./foobar/test)
