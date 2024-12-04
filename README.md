# daelimwiki-frontend 
main 브랜치 기본 폴더구성
main브랜치 코드 댕겨올수는있는데 합치려먼 풀리퀘가 필요해서 2명이 리뷰 +풀리퀘를 해야 바꿀수있게설정해둠
최상위 폴더에서 npm install 만 하면됨
42 번째줄에 추가됨

구조는
daelimwiki-frontend/
├── public/                 # 정적 파일 (React 기본 폴더)
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/             # 이미지, 폰트, 아이콘 등의 정적 파일
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── css/                # 스타일 관련 파일
│   │   ├── global.css      # 전역 스타일
│   │   ├── variables.css   # CSS 변수 (테마 색상, 폰트 크기 등)
│   │   └── components/     # 각 컴포넌트별 스타일     Css 쪽은 componets안에 넣는거 추천import '../../css/components/Header.css';
│   │       ├── Header.css
│   │       ├── WikiView.css
│   │       ├── Sidebar.css
│   │       └── ...
│   ├── components/         # React 컴포넌트
│   │   ├── Layout/
│   │   ├── WikiPage/
│   │   ├── RecentDiscuss/
│   │   ├── Search/
│   │   ├── User/
│   │   └── Common/
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── HomePage.jsx
│   │   ├── WikiPage.jsx
│   │   ├── SearchPage.jsx
│   │   ├── UserPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx             # 앱의 엔트리 포인트
│   └── index.js            # ReactDOM.render() 호출
├── .gitignore              # Git에서 제외할 파일
├── package.json            # 프로젝트 설정 및 의존성 관리
└── README.md               # 프로젝트 설명
└── node_modules            # npm install 하면 만들어짐


package.json 에는 이거에 맞게 들어가야함
{
  "name": "daelimwiki-frontend",
  "version": "1.0.0",
  "description": "DaelimWiki frontend project",
  "main": "src/index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {},
  "author": "",
  "license": "ISC",
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
이렇게 되어있음
