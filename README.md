# 백엔드 코스 - 5차 선발과제

- 프리온보딩 백엔드 코스 5차 선발 과제

### 과제 안내
<details>
  <summary> 과제 내용 </summary>


## 과제안내

- 아래 서비스 개요 및 요구사항을 만족하는 API 서버를 구현합니다.
- 사용가능  기술: **Django, Node.js 중 1개의 기술
(본 과제 수행 프레임워크는 추후 코스 팀 구성에 활용 됩니다. 참고하시고 코스수행을 희망하는 프레임 워크 선정 바랍니다.)**

## 서비스 개요

- 본 서비스는 기업의 채용을 위한 웹 서비스 입니다.
- 회사는 채용공고를 생성하고, 이에 사용자는 지원합니다.

</details>
<br>

### 요구사항

<details>
  <summary> 제시 요구 사항 </summary>

1. **채용공고를 등록합니다.**
    
    <aside>
    ➡️ 회사는 아래 데이터와 같이 채용공고를 등록합니다.
    
    </aside>
    
    ```json
    Example)
    # 데이터 예시이며, 필드명은 임의로 설정가능합니다.
    {
      "회사_id":회사_id,
      "채용포지션":"백엔드 주니어 개발자",
      "채용보상금":1000000,
      "채용내용":"원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
      "사용기술":"Python"
    }
    ```
    
2. **채용공고를 수정합니다.**
    
    <aside>
    ➡️ 회사는 아래 데이터와 같이 채용공고를 수정합니다. (회사 id 이외 모두 수정 가능합니다.)
    
    </aside>
    
    ```json
    Example)
    # 데이터 예시이며, 필드명은 임의로 설정가능합니다.
    {
      "채용포지션":"백엔드 주니어 개발자",
      "채용보상금":1500000, # 변경됨
      "채용내용":"원티드랩에서 백엔드 주니어 개발자를 '적극' 채용합니다. 자격요건은..", # 변경됨
      "사용기술":"Python"
    }
    
    or
    
    {
      "채용포지션":"백엔드 주니어 개발자",
      "채용보상금":1000000,
      "채용내용":"원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
      "사용기술":"Django" # 변경됨
    }
    ```
    
3. **채용공고를 삭제합니다.**
    
    <aside>
    ➡️ DB에서 삭제됩니다.
    
    </aside>
    
4. **채용공고 목록을 가져옵니다.**
    
    <aside>
    ➡️ 4-1. 사용자는 채용공고 목록을 아래와 같이 확인할 수 있습니다.
    
    </aside>
    
    ```json
    Example)
    [
    	{
    		"채용공고_id": 채용공고_id,
    	  "회사명":"원티드랩",
    	  "국가":"한국",
    	  "지역":"서울",
    	  "채용포지션":"백엔드 주니어 개발자",
    	  "채용보상금":1500000,
    	  "사용기술":"Python"
    	},
    	{
    		"채용공고_id": 채용공고_id,
    	  "회사명":"네이버",
    	  "국가":"한국",
    	  "지역":"판교",
    	  "채용포지션":"Django 백엔드 개발자",
    	  "채용보상금":1000000,
    	  "사용기술":"Django"
    	},
      ...
    ]
    ```
    
    <aside>
    ➡️ 4-2. 채용공고 검색 기능 구현**(선택사항 및 가산점요소).**
    
    </aside>
    
    ```json
    # Example - 1) some/url?**search=원티드**
    [
    	{
    		"채용공고_id": 채용공고_id,
    	  "회사명":"원티드랩",
    	  "국가":"한국",
    	  "지역":"서울",
    	  "채용포지션":"백엔드 주니어 개발자",
    	  "채용보상금":1500000,
    	  "사용기술":"Python"
    	},
    	{
    		"채용공고_id": 채용공고_id,
    	  "회사명":"원티드코리아",
    	  "국가":"한국",
    	  "지역":"부산",
    	  "채용포지션":"프론트엔드 개발자",
    	  "채용보상금":500000,
    	  "사용기술":"javascript"
    	}
    ]
    
    # Example - 2) some/url?**search=Django**
    [
    	{
    		"채용공고_id": 채용공고_id,
    	  "회사명":"네이버",
    	  "국가":"한국",
    	  "지역":"판교",
    	  "채용포지션":"Django 백엔드 개발자",
    	  "채용보상금":1000000,
    	  "사용기술":"Django"
    	},
    	{
    		"채용공고_id": 채용공고_id,
    	  "회사명":"카카오",
    	  "국가":"한국",
    	  "지역":"판교",
    	  "채용포지션":"Django 백엔드 개발자",
    	  "채용보상금":500000,
    	  "사용기술":"Python"
    	}
      ...
    ]
    ```
    
5. **채용 상세 페이지를 가져옵니다.**
    
    <aside>
    ➡️ 사용자는 채용상세 페이지를 아래와 같이 확인할 수 있습니다.
    
    - “채용내용”이 추가적으로 담겨있음.
    - 해당 회사가 올린 다른 채용공고 가 추가적으로 포함됩니다**(선택사항 및 가산점요소).**
    </aside>
    
    ```json
    Example)
    {
    	"채용공고_id": 채용공고_id,
      "회사명":"원티드랩",
      "국가":"한국",
      "지역":"서울",
      "채용포지션":"백엔드 주니어 개발자",
      "채용보상금":1500000,
      "사용기술":"Python",
    	"채용내용": "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
    	"회사가올린다른채용공고":[채용공고_id, 채용공고_id, ..] # id List **(선택사항 및 가산점요소).**
    }
    ```
    
6. **사용자는 채용공고에 지원합니다(선택사항 및 가산점요소).**
    
    <aside>
    ➡️ 사용자는 채용공고에 아래와 같이 지원합니다. (가점 요소이며, 필수 구현 요소가 아님)
    
    - 사용자는 1회만 지원 가능합니다.
    </aside>
    
    ```json
    Example)
    {
    	"채용공고_id": 채용공고_id,
      "사용자_id": 사용자_id
    }
    ```
    

<aside>
☝ **개발 시 참조하세요!**

- 위 예시 데이터는 구현의 편의를 위해 제공되는 정보이며, 요구사항(의도)을 만족시킨다면 **다른 형태의 요청 및 리스폰스**를 사용하여도 좋습니다.

- 필요한 모델: **회사**, **사용자**, **채용공고,** 지원내역(선택사항)
  ****(이외 추가 모델정의는 자유입니다.)

- 위 제공된 **필드명**은 예시이며**, 임의로** 생성 가능합니다.

- 회사, 사용자 등록 절차는 생략합니다. 
  (**DB에 임의로 생성**하여 진행)

- 로그인 등 사용자 **인증절차(토큰 등)는 생략합니다**.

- **Frontend 요소(html, css, js 등)는 개발 범위에 제외**됩니다. 
  (구현시 불이익은 없지만, 평가에 이점 또한 없습니다.)

- 명시되지 않은 조건또한 자유롭게 개발 가능합니다.

</aside>

## 필수 기술요건

- ORM 사용하여 구현.
- RDBMS 사용 (SQLite, PostgreSQL 등).

## 평가 요소

- 요구사항 구현정도
    - 모든 기능을 구현하지 않더라도 평가를 진행합니다.
- 모델링
- 코드 가독성 및 코드 컨벤션

## 기술점수 가산점 요소

- **(제출시기 가산점과 달리 기술점수 5점 이내 포함되는 가산점 입니다.)**
- 가산점이 포함된 요구사항 해결(요구사항 5~6)
- Unit Test 구현
- README 에 요구사항 분석 및 구현 과정을 작성
- Git commit 메시지 컨벤션


</details>


<br><hr><br>

# 과제 기반 개발 내용

## DB 및 Entity 모델링 설계

<br>

<center><img src="https://user-images.githubusercontent.com/71310074/195986286-96a6f8a0-899d-4c47-aad2-1fee9aa2e7c5.png" width="600"></center>

<br>


### DB 모델링 설계 상세 설명
  
### users : 유저(지원자)

- 일반 사용자에 대한 users 테이블입니다.
- `user_id`(int, PK), `email`(varchar), `password`(varchar), `is_applied` (tinyint) 로 구성되어 있습니다.
- `is_applied`는 사용자가 1회 지원이 가능하다는 점을 고려하여 만든 bool 타입의 지원 여부 칼럼입니다.

<br>

### company : 회사 유저

- 회사 유저에 대한 `company` 테이블입니다.
- 회사의 기본적인 정보를 담고 있으며, 채용 공고 (Recruitment)에 대한 CRUD를 맡는 유저합니다.
- `company_id`(int, PK), `company_name`(varchar), `country`(varchar), `region`(varchar) 로 구성되어 있습니다.
- 지원서 `application` 테이블과 1:N 관계를 맺습니다.

<br>

### recruitment : 채용공고

- 채용 공고에 대한 `recruitment` 테이블입니다.
- `recruitment_id`(int, PK), `position`(varchar), `compensation)`(bigint), `contents`(text), `tech_stack`(text), `company_id`(int, FK)로 구성되어 있습니다.
- 회사 `company` 테이블과 N:1 관계를 맺습니다.

<br>

### application : 지원서

- 지원서에 대한 `application` 테이블입니다.
- `application_id`(int, PK), `reume`(TEXT), `recruitment_id`(int, FK), `user_id`(int, FK)로 구성되어 있습니다.
- 채용 공고 `recruitment` 테이블과 N:1 관계를 맺고, `user_id`와 1:1 관계를 맺습니다.

</details>

<br>

---

<br>

## 사용 기술

- typescript를 사용했으며, node.js (NestJS framework) 서버를 이용해 API를 개발했습니다.
- RDBMS는 mysql DB를 사용했으며, typeorm을 이용해 객체-관계 매핑을 하였습니다.
- 인증/인가 기능 구현은 jwt, passport, passport-jwt를 사용했습니다.
 

```json
  "dependencies": {
    "@nestjs/common": "^9.0.0",
    "@nestjs/core": "^9.0.0",
    "@nestjs/jwt": "^9.0.0",
    "@nestjs/mapped-types": "^1.2.0",
    "@nestjs/passport": "^9.0.0",
    "@nestjs/platform-express": "^9.0.0",
    "@nestjs/typeorm": "^9.0.1",
    "class-validator": "^0.13.2",
    "express": "^4.18.2",
    "mysql2": "^2.3.3",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.0",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.5.7",
    "typeorm": "^0.3.10"
  },
```

<br>

- code convention은 기본적으로 camelCase를 사용했으며, mysql db로 객체 매핑 시에는 snake_case를 이용한 네이밍을 하였습니다.
- commit message convention은 `기능 type: message` (ex: `feat: 채용 공고 상세보기 기능 구현`) 으로 통일했습니다.


<br><hr><br>

# API 명세 상세 설명

## 1. 채용공고를 등록합니다.

- data: 회사_id, 포지션, 보상금, 내용, 사용기술

### URL / Method

```jsx
POST /recruitment/create
```

### Request Headers

- Authorization : Bearer Token
- Content-Type : application/json; charset=utf-8

### Request Body

- * 필수요소

| 항목 | 타입 | 설명 | 값(예시) |
| --- | --- | --- | --- |
| *position | string (varchar) | 채용 포지션 | backend engineer |
| *compensation | number (bigint) | 채용 보상금 | 1000000 |
| *contents | string (varchar) | 채용 내용 | 백엔드 개발자를 채용합니다. |
| *techStack | string (varchar) | 사용 기술 | Node.js, Nest.js |

```json
{
    "position":"backend engineer",
    "compensation":100000,
    "contents":"백엔드 개발자를 채용합니다.",
    "techStack":"Node.js, Nest.js"
}
```

### Response

- `200 OK` / `201 Created` : 성공적으로 POST Request 전송 완료
    
    ```json
    {
        "position": "backend engineer",
        "compensation": 100000,
        "contents": "백엔드 개발자를 채용합니다.",
        "techStack": "Node.js, Nest.js",
        "companyId": 1,
        "company": {
            "id": 1,
            "companyName": "wanted",
            "country": "korea",
            "region": "seoul"
        },
        "id": 32
    }
    ```
- `401 Unauthorized` : 회사 유저로 로그인하지 않은 경우 (Request Headers에 Bearer Token 없는 경우)

  ```json
    {
        "statusCode": 401,
        "message": "Unauthorized"
    }

  ```
<br>    

## 2. 채용공고를 수정합니다.

- 회사id 제외 모든 필드 수정 가능

### URL / Method

```jsx
PATCH /recruitment/create
```

### Request Headers

- Authorization : Bearer Token
- Content-Type : application/json; charset=utf-8

### Request Body

| 항목 | 타입 | 설명 | 값(예시) |
| --- | --- | --- | --- |
| position | string (varchar) | 채용 포지션 | backend engineer |
| compensation | number (bigint) | 채용 보상금 | 1000000 |
| contents | string (varchar) | 채용 내용 | 백엔드 개발자를 채용합니다. |
| techStack | string (varchar) | 사용 기술 | Node.js, Nest.js |

```json
{
    "compensation":500000
}
```

### Response

- `200 OK`
- `401 Unauthorized` : 해당 채용 공고의 회사 유저 아이디로 로그인하지 않은 경우

  ```json

  {
        "statusCode": 401,
        "message": "kakao로 로그인 필요",
        "error": "Unauthorized"
  }

  ```
- `404 NotFound` : 해당 공고가 존재하지 않는 경우
  ```json
  {
        "statusCode": 404,
        "message": "31 번 공고를 찾을 수 없습니다.",
        "error": "Not Found"
  }

<br>

## 3. 채용공고를 삭제합니다.

- DB에서 삭제

### URL / Method

```jsx
DELETE /recruitment/:id
```

### Request Headers

- Authorization : Bearer Token
- Content-Type : application/json; charset=utf-8

## Request Body

```json

```

### Response

- `200 OK` / `201 Created` : 성공적으로 DELETE reqeust 전송 완료
- `401 Unauthorized` : JWT 토큰 해석 불가 또는 headers에 token 없는 경우
  ```json
  {
        "statusCode": 401,
        "message": "Unauthorized"
  }
  ```
- `401 Unauthorized` : 해당 채용 공고의 회사 유저 아이디로 로그인하지 않은 경우
  ```json
  {
        "statusCode": 401,
        "message": "wanted으로 로그인 필요",
        "error": "Unauthorized"
  }
  ```
- `404 NotFound` : 해당 공고가 존재하지 않는 경우
  ```json
  {
        "statusCode": 404,
        "message": "31 번 공고를 찾을 수 없습니다.",
        "error": "Not Found"
  }

<br>

## 4. 채용공고 목록을 가져옵니다.

- 1) data: 공고_id, 회사명, 국가, 지역, 포지션, 보상금, 사용기술
- 2) 채용공고 검색 기능 구현

### URL / Method

```jsx
GET /recruitment/recruitment-lists
```

### Request Headers

- Content-Type : application/json; charset=utf-8

### Request Body

```json

```

### Response

- `200 OK` / `201 Created` : 성공적으로 GET Request 전송 완료

```json
[
    {
        "id": 25,
        "companyName": "kakao",
        "country": "korea",
        "region": "pangyo",
        "position": "backend",
        "compensation": "1000000",
        "techStack": "spring boot"
    },
    {
        "id": 26,
        "companyName": "wanted",
        "country": "korea",
        "region": "seoul",
        "position": "backend",
        "compensation": "1000000",
        "techStack": "nestjs"
    },
    {
        "id": 27,
        "companyName": "wanted",
        "country": "korea",
        "region": "seoul",
        "position": "frontend engineer",
        "compensation": "500000",
        "techStack": "vue.js, angular.js"
    },
```

<br>

## 5. 채용 상세 페이지를 가져옵니다.

- data: 공고_id, 회사명, 국가, 지역, 포지션, 보상금, 사용기술, 채용내용, 회사가올린다른채용공고

### URL / Method

```jsx
GET /recruitment/:id
```

### Request Headers

- Content-Type : application/json; charset=utf-8

### Request Body

```json

```

### Response

- `200 OK`
    
    ```json
    {
        "id": 27,
        "companyName": "wanted",
        "country": "korea",
        "region": "seoul",
        "position": "frontend engineer",
        "compensation": "500000",
        "techStack": "vue.js, angular.js",
        "contents": "kakao 에서 front engineer을 채용합니다.",
        "otherRecruitLists": [
            26,
            27,
            28,
            32
        ]
    }
    ```
    
- `404 NotFound` : 해당 공고가 존재하지 않는 경우
  ```json
  {
      "statusCode": 404,
      "message": "31번 채용 공고를 찾지 못했습니다.",
      "error": "Not Found"
  }
  ```

<br>

## 6. 사용자는 채용공고에 지원합니다.

- 사용자는 1회만 지원 가능
    - data: 공고_id, 사용자_id

### URL / Method

```jsx
POST /recruitment/:id/apply
```

### Request Headers

- Authorization : Bearer Token
- Content-Type : application/json; charset=utf-8

### Request Body

```json

```

### Response

- `200 OK` : 성공적으로 POST Request 전송 완료
- `401 Unauthorized` : 유저 로그인하지 않은 경우
  ```json
  {
    "message": "유저 로그인 필요"
  }
  ```
- `401 Unauthorized` : JWT 토큰 해석 불가 또는 headers에 token 없는 경우
  ```json
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
- `400 BadRequest` : application 테이블에 이미 unique한 user_id값을 갖는 데이터가 존재하는 경우 (더이상 지원 불가)
  ```json
  {
      "statusCode": 400,
      "message": "더이상 지원 불가합니다.",
      "error": "Bad Request"
  }
  ```


</details>


<br><hr><br>

## 모듈별 기능 사항 상세 설명

### Auth Module
  - [x] 로그인 기능
      - email과 password로 로그인을 합니다.
      - JWT 기반 PassportStrategy, UseGuards로 간단히 인증/인가 구현)

### Company Module
  - [x] 회사 유저 로그인 기능
      - companyName으로 로그인을 합니다.
      - JWT 기반 PassportStrategy, UseGuards로 간단히 인증/인가 구현)


### Recruit Module
  - [x] 채용 공고를 등록할 수 있습니다.
      - 회사 유저로 로그인한 경우에만 등록이 가능합니다. Request Headers 확인을 통해 유저 로그인 상태를 확인합니다.
  - [x] 전체 채용 공고 목록 조회가 가능합니다.
  - [x] 채용 공고 상세보기 조회가 가능합니다.
      - 채용 공고 회사의 다른 공고 id List를 조회할 수 있습니다. 전체 채용 공고 목록 중, 현재 공고의 회사 ID와 동일한 값을 갖는 공고들의 ID들을 넣어 만든 배열을 parameter에 추가하는 방식으로 구현하였습니다.
  - [x] 채용 공고 수정이 가능합니다.
      - 해당 채용 공고를 작성한 회사 유저의 경우에만 수정이 가능합니다. 해당 채용 공고의 회사ID와 현재 로그인되어 있는 회사 유저의 ID를 비교하는 방식으로 구현하였습니다.
      - [x] `position`, `compensation`, `contents`, `techStack` 중 한 개 이상의 parameter을 입력한 경우 해당 값(들)로 변경이 됩니다.
  - [x] 채용 공고 삭제가 가능합니다.
      - [x] 해당 채용 공고를 작성한 회사 유저의 경우에만 삭제가 가능합니다. 해당 채용 공고의 회사ID와 현재 로그인되어 있는 회사 유저의 ID를 비교하는 방식으로 구현하였습니다.
  - [x] 사용자의 지원 기능 (1회 지원 가능)
      - 필수 요구 사항에는 채용_id와 유저_id를 파라미터 값을 통해 요청을 보내야 하지만, 인증과 인가 구현 기능을 추가했기 때문에 다른 방식으로 구현을 하였습니다. `recruitment/:recruitment_id/apply` 로 요청을 보내면 application 객체가 생성되는 방식으로 지원 기능을 설계하였습니다. DB에는 PK 값으로 `application_id`, 그리고 FK값으로 `recruitment_id`와 `user_id`가 저장됩니다. 
      - `user_id` 값을 unique로 지정하여 사용자 당 1회 지원만 가능하도록 설계하였습니다.
      - 사용자의 `is_applied` 의 default 값을 false로 설정하였고, 이 값이 true인 경우 지원 불가합니다.
      - 성공적으로 지원된 경우, `application` 객체 생성 후 사용자의 `is_applied` 값을 true값으로 변경합니다.
  - [ ] 검색 기능

<br>

## 개선점 및 보완 사항
- 전체적으로 DB 모델링에 대한 고민이 많았으며 개선점이 많다고 생각합니다.
  - 유저 모델에 대하여, 일반 사용자 유저와 회사 유저에 대한 고민이 많았습니다. 인증과 인가 부분에서 공통되는 부분이 많은 일반 사용자 유저와 회사 유저에 대해 서로 다른 도메인으로 구분하여 구현한 부분에서 개선이 필요합니다.
  - 채용 공고 모듈 내에서 사용자 지원 기능을 구현한 부분. 지원 자체에 대한 도메인을 따로 빼내어 구현해야 될지에 대한 고민이 있었습니다.
- 지원 기능에서 채용 공고 테이블과 유저 테이블과의 relations를 설정했음에도, 지원 객체 생성시 채용 공고 id값이 null로 설정되는 이슈에 대해 개선이 필요합니다.
- 검색 기능을 추가하지 않았습니다.