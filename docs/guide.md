# 導入フロー

## ファイル構造サンプル

```
docsify
└─ docs
   ├─ README.md
   ├─ guide.md
   └─ index.html
```

## install

### yarn

```js
$ yarn add -D docsify-cli

# 初期化
$ yarn docsify init ./docs

# ローカルサーバ立ち上げ
$ yarn docsify serve docs
```

### npx

```js
$ npx docsify-cli init ./docs

$ npx docsify-cli serve docs

// has port no
$ npx docsify-cli serve docs -p 3003

```
