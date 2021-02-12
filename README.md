# MTMCamp
my first toy project Camping review site with map cluster

캠핑장을 리뷰하는 게시판 형식의 사이트.

![image](https://user-images.githubusercontent.com/72514247/105853932-96829d00-6029-11eb-872e-40cd8e44c8a3.png)

## Skills

### Front

`Bootstrap` `EJS (Templete engine)`

### Back

`NODEJS` `Express` `Mongoose (ODM)`

### Server & DB

`Mongo DB` `Cloudinary(img upload)` `Heroku`

### link

https://morethanmin-camp.herokuapp.com/
(헤로쿠로 배포했기 때문에 처음 접속시 동면상태인 경우 20초정도 걸릴 수 있습니다.)

## Features

- Map Box api를 이용한 지도에 데이터기반으로 캠핑 정보를 표시하였습니다.
- 세션 기반 인증을 통한 Login, Logout기능 구현
- 간단한 Search 기능 구현
- 게시판 글쓰기, 수정하기, 지우기 구현
- multi image uploading (with cloudinary)
- 별점기반 리뷰 작성 삭제 기능

![image](https://user-images.githubusercontent.com/72514247/105837022-6b8c4f00-6011-11eb-8869-5f05dca7cec1.png)


MVC 디자인 패턴을 적용하여 좀 더 생산적인 코드 작성을 노력하였습니다.

Mongo Injection, XSS(Cross Site Scripting) 같은 일반적인 보안문제에 대응하여 제작했습니다.

