# 導入フロー

## ファイル構造サンプル

```
workspace
└─ docs
   ├─ README.md
   ├─ guide.md
   └─ index.html
```

## CLI install

### yarn

install:

```
yarn add -D docsify-cli
```

初期化：

```
yarn docsify init ./docs
```

ローカルサーバー起動：（アドレス指定の場合）

```
yarn docsify serve docs -p 3003
```

---

### npx

初期化：

```
npx docsify-cli init ./docs
```

ローカルサーバー起動：（アドレス指定の場合）

```
npx docsify-cli serve docs -p 3003
```
