# 백엔드 코스 - 5차 선발과제

- 프리온보딩 백엔드 코스 5차 선발 과제

<br>

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
  <summary> 요구사항 자세히 보기 </summary>

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


<br><hr>

# 과제 기반 개발 내용
## DB 및 Entity 설계

<center><img src="https://user-images.githubusercontent.com/71310074/195757023-4abd7241-0ce5-47e3-9cc5-2d0ed8b5994b.png" width="600"></center>

<br>

- [x] Entity Domain
  - [x] Applicants
      - applicant_id (PK)
      - email (varchar)
      - password (varchar)
      - is_applied (boolean)
  - [x] Company
      - company_id (PK)
      - company_name (varchar)
      - country (varchar)
      - region (varchar)
  - [x] Recruitment
      - recruitment_id (PK)
      - position (varchar)
      - compensation (int)
      - contents (text)
      - tech_stach (text)
      - company_id (FK)
  - [x] Application
      - application_id (PK)
      - recruitment_Id (FK)
      - user_id (FK)

<br>

## 요구 사항 분석 및 구현 과정

<details>
  <summary> API 명세서 상세</summary>

# 1. 채용공고를 등록합니다.

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

- `200 OK` / `201 Created`
    
    ```jsx
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
    

# 2. 채용공고를 수정합니다.

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

- status code: `200 OK`

# 3. 채용공고를 삭제합니다.

- DB에서 삭제

### URL / Method

```jsx
DELETE /recruitment/:id
```

### Request Headers

- Authorization : Bearer Token
- Content-Type : application/json; charset=utf-8

### Request Body

- * 필수요소

```jsx

```

### Response

- `200 OK` / `201 Created`
- `401 Unauthorized`
- `404 NotFound`

# 4. 채용공고 목록을 가져옵니다.

- 1) data: 공고_id, 회사명, 국가, 지역, 포지션, 보상금, 사용기술
- 2) 채용공고 검색 기능 구현

### URL / Method

```jsx
GET /recruitment/recruitment-lists
```

### Request Headers

- Content-Type : application/json; charset=utf-8

### Request Body

- * 필수요소

```json

```

### Response

- `200 OK` / `201 Created`

```jsx
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

# 5. 채용 상세 페이지를 가져옵니다.

- data: 공고_id, 회사명, 국가, 지역, 포지션, 보상금, 사용기술, 채용내용, 회사가올린다른채용공고

### URL / Method

```jsx
GET /recruitment/:id
```

### Request Headers

- Content-Type : application/json; charset=utf-8

### Request Body

- * 필수요소

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
    
- `404 NotFound`

# 6. 사용자는 채용공고에 지원합니다.

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

- status code: `200 OK`
- `401 Unauthorized`


</details>
1. 채용공고를 등록합니다.
    - data: 회사_id, 포지션, 보상금, 내용, 사용기술

2. 채용공고를 수정합니다.
    - 회사id 제외 모든 필드 수정 가능


3. 채용공고를 삭제합니다.
    - DB에서 삭제


4. 채용공고 목록을 가져옵니다.
    1) data: 공고_id, 회사명, 국가, 지역, 포지션, 보상금, 사용기술
    2) 채용공고 검색 기능 구현


5. 채용 상세 페이지를 가져옵니다.
    - data: 공고_id, 회사명, 국가, 지역, 포지션, 보상금, 사용기술, 채용내용, 회사가올린다른채용공고

6. 사용자는 채용공고에 지원합니다(선택사항 및 가산점요소).
    - 사용자는 1회만 지원 가능
    - data: 공고_id, 사용자_id



<br>

## 모듈별 기능사항

- [x] Auth Module (User Entity)
  - [x] 로그인 기능 (email과 password로 로그인을 합니다. -> JWT 기반 PassportStrategy, UseGuards로 간단히 인증/인가 구현)
- [x] Company Module (Company Entity)
  - [x] 회사 유저 로그인 기능 (companyName으로 로그인을 합니다. -> JWT 기반 PassportStrategy, UseGuards로 간단히 인증/인가 구현)
- [x] Recruitment Module (Recruit Entity)
  - [x] 회사 유저로 로그인한 경우, 채용 공고를 등록할 수 있습니다. (Request Headers 확인을 통해 유저 로그인 상태를 확인합니다.)
  - [x] 전체 채용 공고 목록 조회가 가능합니다.
  - [x] 채용 공고 상세보기 조회가 가능합니다.
      - [x] 채용 공고 회사의 다른 공고 id List를 조회할 수 있습니다. 전체 채용 공고 목록 중, 현재 공고의 회사 ID와 동일한 값을 갖는 공고들의 ID들을 넣어 만든 배열을 parameter에 추가하는 방식으로 구현하였습니다.
  - [x] 채용 공고 수정이 가능합니다.
      - [x] 해당 채용 공고를 작성한 회사 유저의 경우만 삭제가 가능합니다. 해당 채용 공고의 회사ID와 현재 로그인되어 있는 회사 유저의 ID를 비교하는 방식으로 구현하였습니다.
      - [x] `position`, `compensation`, `contents`, `techStack` 중 한 개 이상의 parameter을 입력한 경우 해당 값(들)로 변경이 됩니다.
  - [x] 채용 공고 삭제가 가능합니다.
      - [x] 해당 채용 공고를 작성한 회사 유저의 경우만 삭제가 가능합니다. 해당 채용 공고의 회사ID와 현재 로그인되어 있는 회사 유저의 ID를 비교하는 방식으로 구현하였습니다.
  - [x] 사용자의 지원 기능 (1회 지원 가능)
      - [x] 기본적으로 `user_id` 값을 unique로 지정하여 사용자 당 1회 지원만 가능하도록 설계하였습니다.
      - [x] 사용자의 `is_applied` 의 default 값을 false로 설정하였고, 이 값이 true인 경우 지원 불가합니다.
      - [x] 성공적으로 지원된 경우, `application` 객체 생성 후 사용자의 `is_applied` 값을 true값으로 변경합니다.
  - [ ] 검색 기능
