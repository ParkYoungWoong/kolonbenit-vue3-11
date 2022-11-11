# 코오롱 베니트 - Vue.js

박영웅 강사

# 참고 문서!

### Vue3 공식 문서!

[https://v3-docs.vuejs-korea.org/](https://v3-docs.vuejs-korea.org/guide/introduction.html)

### Vuex 공식 문서!

[https://vuex.vuejs.org/](https://vuex.vuejs.org/)

### Vue Router 공식 문서!

[https://router.vuejs.org/](https://router.vuejs.org/)

### Pinia 공식 문서

[https://pinia.vuejs.org/](https://pinia.vuejs.org/)

### Nuxt 공식 문서

[https://v3.nuxtjs.org/](https://v3.nuxtjs.org/)

# Vite + Vue 프로젝트 시작!

- NPM 설치 과정에서 모바일 핫스팟이 필요할 수 있어요.
- 그래서 필요한 패키지를 한 번에 모두 설치합니다.

```bash
// 터미널에서 프로젝트를 생성할 경로로 이동한 후!
$ npm create vite@latest 폴더이름
$ cd 폴더이름
$ npm i
$ npm i axios nanoid vuex vue-router
$ npm i -D eslint eslint-plugin-vue sass

// VS Code로 현재 경로 폴더 열기!
$ code . -r
```

### ESLint 구성 - .eslintrc.json

- 루트 경로에 `.eslintrc.json` 파일을 생성한 후 아래 코드를 붙여넣으세요.
- 그리고 VS Code에서 **ESLint** 확장 프로그램을 설치하세요.
- 충돌 방지를 위해 **Prettier** 확장 프로그램이 있는 경우, 현재 프로젝트에서 비활성화하세요.

```json
{
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
  ],
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "eol-last": ["error", "always"],

    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/comment-directive": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off"
  }
}
```

- 저장 후 자동으로 수정이 동작하기 위해, VS Code `settings.json` 파일에 다음 옵션을 추가하세요!

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.alwaysShowStatus": true,
```

### Volar (Vue Language Features) 설치

`.vue` 파일 코드 하이라이팅을 위해 VS Code에서 **Volar** 확장 프로그램을 설치하세요.

### 프로젝트 경로 별칭 구성 - vite.config.js

- 루트 경로에 있는 `vite.config.js` 파일을 다음과 같이 수정하세요.

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '~', replacement: `${__dirname}/src` }
    ]
  }
})
```

### 실습에서 사용할 데이터 - data.js

- `/src` 폴더에 `data.js` 파일을 생성한 후 다음 코드를 붙여넣으세요!

```js
import { nanoid } from 'nanoid'

export const users = [
  { id: nanoid(), name: 'Heropy', age: 85, email: 'heropy@gmail.com', address: '경기도 수원시 영통구 망포동 28-20', phone: '01012345678' },
  { id: nanoid(), name: 'Neo', age: 23, email: 'neo@gmail.com', address: '서울특별시 강남구 논현동 150-12', phone: '01012345678' },
  { id: nanoid(), name: 'Leon', age: 55, email: 'leon@gmail.com', address: '충청남도 천안시 서북구 불당동 246-12', phone: '01012345678' },
  { id: nanoid(), name: 'Lewis', age: 25, email: 'lewis@gmail.com', address: '부산광역시 영도구 동삼동 226-146', phone: '01012345678' },
  { id: nanoid(), name: 'Evan', age: 46, email: 'evan@gmail.com', address: '경기도 용인시 처인구 백암면 근창리 105', phone: '01012345678' },
  { id: nanoid(), name: 'Emily', age: 39, email: 'emily@gmail.com', address: '경상북도 경주시 교동 38-11', phone: '01012345678' },
  { id: nanoid(), name: 'Sophia', age: 18, email: 'sophia@gmail.com', address: '강원도 강릉시 교동 482-3', phone: '01012345678' }
]
```

## 영화 검색 API

[https://omdbapi.com/](https://www.omdbapi.com/)

```bash
https://omdbapi.com/?apikey=7035c60c&s=frozen
```

## TheButton.vue

```vue
<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div 
    :class="{ 
      [color]: true,
      block
    }"
    class="btn">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.btn {
  width: max-content;
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  background-color: lightgray;
  word-break: keep-all;
  &.block {
    width: auto;
  }
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &.primary {
    background-color: royalblue;
    color: white;
    &:hover {
      background-color: darken(royalblue, 10%);
    }
  }
  &.warning {
    background-color: orange;
    color: white;
    &:hover {
      background-color: darken(orange, 10%);
    }
  }
  &.error {
    background-color: tomato;
    color: white;
    &:hover {
      background-color: darken(tomato, 10%);
    }
  }
  &.success {
    background-color: yellowgreen;
    color: white;
    &:hover {
      background-color: darken(yellowgreen, 10%);
    }
  }
}
</style>
```
