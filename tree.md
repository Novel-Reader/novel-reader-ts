# 项目架构

## 项目 TS 架构

TODO: 代码重构后，重新整理代码

~~~
├── App-mobile.tsx
├── App.tsx
├── api
│   └── local-api.ts
├── common
│   ├── icons.tsx
│   ├── login-dialog
│   │   └── index.tsx
│   ├── registor-dialog
│   ├── scroll-top-button
│   │   └── index.tsx
│   ├── toast
│   │   ├── alert.tsx
│   │   ├── index.ts
│   │   ├── toast.tsx
│   │   ├── toastManager.tsx
│   │   └── toaster.tsx
│   ├── vip-button
│   │   └── index.tsx
│   └── vip-dialog
│       └── index.tsx
├── index.ts
├── main
│   ├── folded-icon.tsx
│   ├── long-page.tsx
│   └── main.tsx
├── navs
│   ├── add-novel-dialog
│   │   ├── book-list.tsx
│   │   ├── book.tsx
│   │   ├── index.tsx
│   │   ├── load-from-local.tsx
│   │   ├── load-from-server.tsx
│   │   └── search-from-server.tsx
│   ├── file-tree.tsx
│   ├── index.tsx
│   ├── nav-footer.tsx
│   ├── nav-header.tsx
│   ├── nav-icon.tsx
│   └── outline
│       └── index.tsx
├── pages
│   ├── admin
│   │   └── index.tsx
│   ├── error-page
│   │   └── index.tsx
│   ├── login
│   │   └── index.tsx
│   └── register
├── router.tsx
├── setting.json
├── settings
│   ├── advance-settings
│   │   ├── advance-theme-settings.tsx
│   │   ├── color-settings.tsx
│   │   ├── font-settings.tsx
│   │   └── index.tsx
│   ├── basic-settings
│   │   ├── font-settings.tsx
│   │   ├── index.tsx
│   │   ├── mode-settings.tsx
│   │   └── theme-settings.tsx
│   └── index.tsx
├── setupTests.ts
├── tests
│   ├── api
│   │   └── api.ts
│   └── utils
│       ├── index.test.ts
│       └── parse.test.ts
├── tsconfig.json
└── utils
    ├── constants.ts
    ├── example.json
    ├── hotkey.ts
    ├── index.ts
    └── parse.ts
~~~

## 代码统计

cloc ./src

72 text files.
72 unique files.                              
14 files ignored.

github.com/AlDanial/cloc v 1.98  T=0.03 s (2808.6 files/s, 142768.2 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
TypeScript                      50            447            185           2583
CSS                             19              7              1            316
JSON                             3              9              0            112
-------------------------------------------------------------------------------
SUM:                            72            463            186           3011
-------------------------------------------------------------------------------
