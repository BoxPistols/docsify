window.$docsify = {
  name: 'My docsify',
  repo: '',
  auto2top: true,
  // サイドバーを表示。別途_sidebar.mdを書く必要あり。gitbookのSUMMARY.mdと同じ要領。
  loadSidebar: true,
  search: 'auto', // default
  search: [
    '/**/*.md', // => /README.md
    // '/guide',
    // '/option.md',
    // '/cssstyle.md',
  ],

  alias: {
    '/.*/_sidebar.md': '/_sidebar.md' // 詳細はissueの301参照
  },
  subMaxLevel: 3,
  // docsify-copy-code (defaults)
  copyCode: {
    buttonText: 'Copy',
    errorText: 'Error',
    successText: 'Copied!'
  },
  tabs: {
    persist: true, // default
    sync: true, // default
    theme: 'classic', // default
    tabComments: true, // default
    tabHeadings: true // default
  },
}