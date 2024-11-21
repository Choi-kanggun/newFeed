# 🎧 welcome to Replay 🎧

### 오늘의 노래를 추천해주는 뉴스피드 프로젝트 
링크: news-feed-brown.vercel.app

![Macbook Pro - Dark Background](https://github.com/user-attachments/assets/da7200bf-fd98-46f2-98b2-9cbf2075d0b9)

# 👨‍👩‍👧‍👦 Our Team 
| 최강건        |    우지영      |  한다영        |    주호빈      |
| ------------ | ------------ | ------------ | ------------ |
| [@Choi-kanggun](https://github.com/Choi-kanggun) | [@zi0w](https://github.com/zi0w) | [@gksek015](https://github.com/gksek015)   |    [@Hobin-joo](https://github.com/Hobin-joo/) |

<br/>

### [📝 프로젝트 노션 바로가기](https://teamsparta.notion.site/6-27368f84d2f24eee8d91744ebb484959)

<br/>


# 🕹️ 프로젝트 기능
### 1️⃣ Supabase를 활용한 CRUD
- supabase에서 제공하는 api를 이용하여 CRUD 데이터베이스 핸들링 구현
- `useEffect`를 통해 컴포넌트 라이프사이클 내에서 외부로부터 가져온 데이터 관리
  
### 2️⃣ Supabase를 활용한 로그인, 회원 가입
- Authentication에서 제공하는 api를 이용하여 로그인, 회원 가입 구현
- `onAuthStateChanged`를 활용하여 인증된 유저의 상태 변경 추적
- 로그인, 회원 가입 예외 처리
  
### 3️⃣ Context API를 활용한 전역상태 관리
- `AuthContext.jsx`에서 Context API를 이용하여 로그인, 로그아웃 상태 관리

### 4️⃣ RRD(React Router DOM)을 활용한 페이지 라우팅
- 페이지 라우팅 구현
- 로그인 된 유저가 접근할 수 있는 페이지와 아닌 페이지 구분(로그인 페이지, 회원가입 페이지)
  
### 5️⃣ 마이 페이지
- Authentication에서 제공하는 uid를 이용하여 내 게시물 확인 기능 구현
- Storage에서 제공하는 api를 이용하여 프로필 이미지 핸들링

### 6️⃣ 좋아요 기능
- 게시글에 좋아요 추가, 취소, 총 좋아요 개수 확인 가능 기능 구현

<br/>

# 🎥 시연 영상
<details>
<summary>영상 1</summary>
<div markdown="1">
![1 회원가입,로그인](https://github.com/user-attachments/assets/526ee88a-aca8-416d-8ff3-a5848fff6530)
</div>
</details>

# ⚙️ Development Environment
`upabase/supabase-js: ^2.46.1` `react-router-dom: ^6.28.0` `styled-components: ^6.1.13` `styled-reset: ^4.5.2` `vite: ^5.4.10`

<br/>

# 🖥️ Technologies & Tools (FE) 🖥️
<div>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white" />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS&logoColor=white" />
<img src="https://img.shields.io/badge/StyledComponent-FF4785?style=flat-square&logo=StyledComponent&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>
</div>

<br/>

# 🌳 프로젝트 구조
<img width="166" alt="스크린샷 2024-11-21 오전 11 31 45" src="https://github.com/user-attachments/assets/40302776-ddea-428d-835c-3a09e512a989">

