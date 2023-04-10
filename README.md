# 🎲Billboard

###  보드 게임 커뮤니티 플랫폼
###  SSAFY 8기 특화 프로젝트 - 빅데이터 추천
<br>


<br>

## 👨‍👩‍👧‍👦팀원 소개


**[고진석](https://github.com/9jinseok)** :  Backend/ Big Data

**[김민우](https://github.com/bkkmw)** : Backend

**[임길현](https://github.com/limgilhun)** : Frontend

**[전병현](https://github.com/0901jbh)** : CI/CD / Backend 

**[지혁주](https://github.com/seotai)** : Frontend / Leader

**[황산나래](https://github.com/HWANGSAN)** : Frontend / Big Data

<br>

## 📆 프로젝트 소개

**⚙​ 개발 환경 및 IDE**

**Backend**

 <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"> <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/Gradle-F37440?style=for-the-badge&logo=Gradle&logoColor=white"> <img src="https://img.shields.io/badge/Intellij_IDEA-3776AB?style=for-the-badge&logo=IntellijIDEA&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-380953?style=for-the-badge&logo=MySQL&logoColor=white">

**Frontend**

<img src="https://img.shields.io/badge/react-4FC08D?style=for-the-badge&logo=react&logoColor=white">  <img src="https://img.shields.io/badge/VS Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">

**Server**

<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> 

**Big Data**

<img src="https://img.shields.io/badge/fastapi-333333?style=for-the-badge&logo=FastAPI&logoColor=white">  <img src="https://img.shields.io/badge/pandas-F2CA30?style=for-the-badge&logo=pandas&logoColor=white">  <img src="https://img.shields.io/badge/surprise-FF3E00?style=for-the-badge&logo=surprise&logoColor=white">

**Cooperation & Communication**

<img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=GitLab&logoColor=white"> <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"> <img src="https://img.shields.io/badge/MatterMOST-009688?style=for-the-badge&logo=Mattermost&logoColor=white"> <img src="https://img.shields.io/badge/Notion-EF1970?style=for-the-badge&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-FDA061?style=for-the-badge&logo=Discord&logoColor=white">



- **진행 기간**: 2023.2.20  ~ 2023.4.7

<br>

# ✨ 서비스 설명
## 보드 게임 커뮤니티 플랫폼
## 주요 기능 목록
  - 유저 리뷰 기반 1인 및 다인 보드 게임 추천 : 빅데이터 추천
  - 지역별 예약 인원 모집 게시판
  - 로그인 CRUD : JWT 토큰, spring security 활용
  - 보드 게임 조건 조회 : 에 대한 개별 설정 가능
  - 보드 게임 상세 조회 : 보드 게임 관련 정보 및 리뷰 
  - 마이 페이지 : 최근 플레이 게임, 즐겨 찾기, 전적, 레벨
  - 친구 관리 : 팔로잉, 팔로워, 친구 찾기


---
<br>

## 주요 기능 설명

- 유저 리뷰 기반 1인 및 다인 보드 게임 추천
  - 데이터 사용량 
    - 사용 보드 게임 수 : 21626
    - 사용 데이터 유저 수 : 412822
    - 사용 데이터 보드게임 리뷰 수 : 18964366
  - SVD 추천 방식을 통해 예상 평점을 계산
  - ![svd](https://user-images.githubusercontent.com/37263174/230808128-236b242f-7ac5-4e99-b010-989349c49629.png)
  - 예상 평점 높은 순으로 유저에게 추천
  - ![종합추천](https://user-images.githubusercontent.com/37263174/230807868-03384223-6628-4d9c-8fca-000ee793b6f7.gif)
<br>

- 지역별 예약 인원 모집 게시판
  - 지역 설정 시/군/구 3단계로 설정
  - 위치를 지정해 방(게시판) 생성, 댓글 작성
  - ![지역조회](https://user-images.githubusercontent.com/37263174/230807869-9025b9a2-4ade-4bc6-8e05-228b0a535130.gif)
  - 설정된 지역의 거리 순으로 인원 모집 방 확인
  - ![방조회](https://user-images.githubusercontent.com/37263174/230807865-cc9c5cdd-413a-4f02-8591-31242ed37efd.gif)
  - 방 생성
  - ![방만들기](https://user-images.githubusercontent.com/37263174/230807863-df84ee46-ceaf-411e-bc19-efe10b84860d.gif)  
  
- 보드 게임 조건 조회
  - 플레이 타임, 인원 수, 난이도, 평점, 장르
  - ![검색](https://user-images.githubusercontent.com/37263174/230807853-cdd74d2b-f271-469a-a4e2-71287772dce1.gif)

- 보드 게임 상세 조회
  - 보드 게임 정보, 리뷰 확인 및 작성
  - ![상세조회](https://user-images.githubusercontent.com/37263174/230807866-25e5618a-3d33-46c0-b32a-a72f9c34f980.gif)

- 마이 페이지
  - 유저별 정보 확인 가능 : 최근 플레이 게임, 즐겨 찾기 등
  - ![마이페이지](https://user-images.githubusercontent.com/37263174/230807860-38711507-973d-473a-a353-39e45662014a.gif)

- 친구 관리
  - 팔로잉, 팔로워 관계 맺기



---



<br><br>

# 💁개발 방식 및 결과
## 🧱 서비스 아키텍처

![서비스아키텍처](https://user-images.githubusercontent.com/37263174/230808273-cd5cf325-85c4-411a-8c95-1e773cab68eb.png)

<br>



## 🌠 Server Description

- port (nginx)

  - | 포트  | 이름                                   |
    | ---- | -------------------------------------- |
    | 80   | HTTP - HTTPS로 리다이렉트(프론트 페이지) |
    | 443  | HTTPS                                  |
    | 3000 | React, NginX Docker Container          |
    | 3306 | MYSQL                                  |
    | 8000 | FastAPI                                |
    | 8080 | Jenkins                                |
    | 8081 | Spring boot Docker Container           |
    
    


## 🎩 화면 설계서
![와이어프레임](https://user-images.githubusercontent.com/37263174/230808277-4000e47f-bae4-4deb-8c4b-c1259c9447ef.PNG)

## 🎨 DB ERD
![DB ERD](https://user-images.githubusercontent.com/37263174/230808266-3bdb9b79-c63e-46cd-a45b-e88fa038b8cf.PNG)

## 📬 API 명세서

![api 명세서](https://user-images.githubusercontent.com/37263174/230808261-4d39e0e7-d73c-4529-b3cc-370a809ac7b3.PNG)

### 🌄 JIRA 컨벤션

![jira](https://user-images.githubusercontent.com/37263174/230808270-4235eee4-6c3b-4fb9-b978-744176275500.PNG)

- 번 다운 차트

![jira](https://user-images.githubusercontent.com/37263174/230808269-ade12d66-fddb-4862-aa9e-d9100abb491d.gif)

---
# 🎲Billboard
