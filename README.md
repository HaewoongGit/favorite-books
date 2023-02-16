# 온라인 북스토어 토이 프로젝트
vue.js와 express를 사용하여 만든 온라인 북스토어 토이 프로젝트입니다.
혼자서 풀스택으로 프로젝트를 만들어보며 전체적인 웹기술의 흐름을 익히고 연습하기 위해 만들었습니다.
aws를 이용하여 배포도 진행했습니다.
<br>
<br>
<br>
<br>

## 사용한 기술
### 프론트엔드
vue3, vuex, font-awesome, bootstrap5, vue router, axios

### 백엔드
node.js, express, mongoDB, joi, jsonwebtoken, cheerio


<br>
<br>
<br>
<br>

## api 문서
프로젝트를 만들다보니 front의 axios 통신함수와 상태관리 코드도 문서화하여 기록할 필요성을 느껴 api 문서와 같이 만들었습니다.
https://docs.google.com/spreadsheets/d/1K8DpZQm5r_mVB-MjG-SsWSvIFce7Ni-Crfjz6u53iBQ/edit?usp=sharing


<br>
<br>
<br>
<br>

## DB 구조
데이터베이스는 mongoDB를 활용했습니다.
mongoDB는 document를 사용하기 때문에 따로 ERD를 그리진 않았습니다.

### document의 종류
![image](https://user-images.githubusercontent.com/107612118/219297281-9efe437e-d8cd-41db-b709-c33c945b461b.png)

<br>

### buys
![image](https://user-images.githubusercontent.com/107612118/219297655-069f00c3-9150-4b45-9ead-73698dcc218b.png)
<br>
<br>

### carts
![image](https://user-images.githubusercontent.com/107612118/219303454-51ba8b6c-10cb-4efb-a369-37e4263b75c6.png)
<br>
<br>

### goods
![image](https://user-images.githubusercontent.com/107612118/219303572-83a431ef-805c-4392-a7ae-11e76730bd91.png)
<br>
<br>

### users
![image](https://user-images.githubusercontent.com/107612118/219303909-5a39c87f-2256-454a-8d0c-ec97c883b89f.png)


<br>
<br>
<br>
<br>

## 구현한 기능

### 회원가입, 로그인 기능
jwt를 이용하여 생성된 토큰을 이용해 로그인 상태를 확인합니다. 토큰 검증은 auth-middleware라는 검증 미들웨어를 만들어 api 요청시 로그인을 했는지 체크했습니다.
<br>
<br>

### 크롤링 기능
cheerio 라이브러리를 이용해서 데이터를 크롤링해 상품 데이터 정보로 활용했습니다.
![image](https://user-images.githubusercontent.com/107612118/219304680-4eaa05e1-f604-4ac9-82e2-2e864d01a465.png)
<br>
<br>

### 입력값 검증 기능
joi 값 검증 라이브러리를 이용해서 사용자가 데이터 입력시 값 검증을 시도합니다.
![image](https://user-images.githubusercontent.com/107612118/219303224-3c053315-8396-49d0-b3ce-1034e9e25d04.png)
<br>
<br>

### 카테고리 분류 기능
도서의 종류별로 볼 수 있도록 카테고리 선택 기능을 넣었습니다.
![image](https://user-images.githubusercontent.com/107612118/219305971-c1e8b035-b909-48a0-9f82-f6005fc4aeba.png)
<br>
<br>

### 장바구니 기능
장바구니에 등록한 책들은 장바구니 페이지에서 확인할 수 있습니다.
![image](https://user-images.githubusercontent.com/107612118/219306508-aac65839-f337-4464-8aae-4d6cea695310.png)
<br>
<br>

### 주문조회 기능
구입한 책들을 주문조회 화면에서 확인할 수 있습니다.
![image](https://user-images.githubusercontent.com/107612118/219306804-aa87e9a8-b2aa-4b24-a6df-56cce8c7ffe0.png)
<br>
<br>

### aws를 이용한 배포
EC2 우분투 인스턴스를 만들어 Node.js와 mongoDB를 설치하여 배포를 진행했습니다.
따로 도메인 주소를 부여받아 적용하였습니다.



<br>
<br>
<br>
<br>

## 배포 사이트 주소
http://hw-project.shop/
