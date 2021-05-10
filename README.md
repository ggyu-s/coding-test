# 간단한 게시글 등록

## 스택

- React.js (redux-thunk)
- Node.js (express.js)
- ant-design

- styled-components
- Sequelize ORM (MySQL)

## 기능

- 로그인 / 회원가입 구현
- 로그인을 하고나면 프로필 표시
- 프로필에는 등록한 게시글 수와 로그아웃 버튼 구현
- 게시글 작성 / 삭제 구현

- 댓글 작성 구현

## 실행방법

- git clone을 합니다.

`git clone https://github.com/ggyu-s/coding-test.git `

- back 폴더와 front 폴더에서<br/>

`npm install `

- sequeilize ORM을 사용하여 MySQL괴 연동하였습니다.
- back 폴더 -> config 폴더 -> config.js에서 username 부분은 데이버베이스명과 password 부분은 데이터베이스 비밀번호를 입력하면 됩니다.

- config.js의 database 부분은 스키마명을 입력해주시면 됩니다. 터미널 창에서 생성하셔도 됩니다.

- 아래 명령어 입력 시 데이터베이스 snstest라는 스키마가 생성됩니다.

`sequelize db:create snstest`

- front 폴더에서 아래 명령어로 실행

`npm run start`

- back 폴더에서 아래 명령어로 실행

`npm run dev`
