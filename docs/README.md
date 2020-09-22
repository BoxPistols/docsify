# docsify

## 公式ドキュメント

https://docsify.js.org

## What is this

- ドキュメント静的サイトジェネレーター
- Markdown ドキュメント
- gitbook-cli にような UIUX のライブラリ
- 日本語検索に対応

---

## 導入フロー

### ファイル構造

```js
.
└── docs
    ├── .nojekyll
    ├── README.md
    └── index.html
```

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
```
