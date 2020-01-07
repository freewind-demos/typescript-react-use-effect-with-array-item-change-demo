TypeScript React "useEffect" with Array Item Change Demo
========================================================

对于`useEffect`，如果直接修改dependency的属性，不会trigger useEffect。
必须生成一个新的dependency才行，可以手动生成，或者用clone的方式。

```
npm install
npm run demo
```

It will open page on browser automatically.
