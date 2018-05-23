# TypeScript_StartProject
Basic boilerplate for a TypeScript / Node project with live compilation.

To use this boilerplate, clone this repo then on the cloned folder:
```npm install ```
And then change the package.json to fit the project.

# Steps to create this boilterplate:

1 - Setup a Node.js project package.json. Quick one  ```npm init```

2 - Add TypeScript ```npm install typescript --save-dev```

3 - Add node.d.ts ```npm install @types/node --save-dev```

4 - Init a tsconfig.json for TypeScript options ```npx tsc --init```

5 - Make sure you have in your tsconfig.json: ```compilerOptions.module:commonjs ```

6 - Add ts-node which we will use for live compile + run in node ```npm install ts-node --save-dev```

7 - Add nodemon which will invoke ts-node whenever a file is changed ```npm install nodemon --save-dev```

8 - Add a script target to your package.json based on your application entry e.g. assuming its index.ts:
```
  "scripts": {
    "start": "npm run build:live",
    "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts"
  },
 ```

So you can now run npm start and as you edit index.ts:

    nodemon reruns its command (ts-node)
    ts-node transpiles automatically picking up tsconfig.json and the installed typescript version,
    ts-node runs the output javascript through Node.js.

