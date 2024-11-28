# 项目架构

## 代码结构

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

69 text files.
69 unique files.                              
0 files ignored.

github.com/AlDanial/cloc v 2.00  T=0.02 s (3031.5 files/s, 157813.1 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
TypeScript                      49            438            178           2543
CSS                             15              7              0            269
JSON                             3              9              0            112
LESS                             2              0              0             36
-------------------------------------------------------------------------------
SUM:                            69            454            178           2960
-------------------------------------------------------------------------------
