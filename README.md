<div align="center">
  
## 🪖 프로젝트명
<img  src="https://avatars.githubusercontent.com/u/136772838?s=200&v=4"/>
<h3>MilRoute</h3>
</div>

## ✨ 소개
장병들의 즐거운 외출/외박을 위한 국방 분야 공공데이터 기반의 군 할인혜택 정보 제공, 최적 경로 제공 및 출발지와 도착지 입력하고 대중교통을 이용할 때, 경로별 소요되는 예상 시간과 금액 정보를 제공해주는 서비스입니다.

## 🖥️ 시연 영상

## 🎨 Figma Link
[피그마 링크](https://www.figma.com/file/lXc6aYQlxV0PVZXufmd8mU/TP1Team-WireFrame-%26-Design?type=design&mode=design&t=5Ky5CC1RDYy9AtbN-0)

## 📦 사용 스택
### Front-end

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1695882466636?alt=media&token=ca596cb3-ce85-4f84-b4fd-b2fbbfa6ec09)](https://github.com/msdio/stackticon)

### Back-end

### team communication
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1695882346285?alt=media&token=15e8e304-87a2-44b3-bfe5-38983a7c6abf)](https://github.com/msdio/stackticon)

## 👥 팀원
|                   Frontend                    |                      Frontend                       |                     Backend                      | 
| :------------------------------------------: | :------------------------------------------------: | :----------------------------------------------: | 
|  [유은지](https://github.com/y00eunji)  |  [김효영](https://github.com/gyduddl)  |  [고대은](https://github.com/summerlunaa)  | 

## 📝 각 페이지 구현 방법
📄 메인화면 페이지
- 국방 공공데이터 중 '군 할인혜택' API에서 데이터를 조회하여 이미지 내 데이터를 출력하여 슬라이스 형태로 데이터를 보여줍니다.
  
📄 장소선택 페이지
-  지역 선택 시, 원하는 장소의 도/시를 선택하면 Kakao Search Map API로 해당 '시'의 시청을 찾아 경도와 위도를 여행지 선택 페이지로 보내줍니다.
  
  
📄 여행지 선택 페이지
- 장소선택 페이지에서 받은 경도, 위도 데이터를 통해 naver map api에 해당 '시'를 중심으로 한 지도를 브라우저에 보여줍니다.
- 국방 공공데이터 API, Naver map API, kakao search local keyword API를 활용해 특정 장소의 데이터를 지도에 마크로 표시해줍니다.  
- 마크를 선택해 장소를 추가하고 추가된 장소를 확인, 삭제 할 수 있습니다.


📄 출발지, 도착지 선택 페이지 
- 선택된 장소 리스트에서 사용자가 출발지와 도착지를 선택할 수 있습니다.
- 선택된 장소 데이터로 최단 시간 경로를 REST API로 요청합니다.

📄 최단 경로 계산
- 한 장소에서 다른 장소로 이동할 수 있는 모든 대중교통을 ODsay API를 통해 확인합니다. 그 중 가장 최단 시간의 대중교통 정보를 그래프 형태로 저장합니다.
- 저장된 최단 시간의 대중교통 정보를 활용하여 최단 시간 경로를 계산합니다.
- 백트래킹으로 모든 조합의 장소 경유를 계산하고 비트마스킹과 동적 프로그래밍으로 알고리즘을 최적화합니다.

📄 최단 경로 페이지
- 사용자는 지도를 통해 계산된 최단 시간 경로를 시각적으로 확인할 수 있습니다.

📄 즐겨찾기 페이지
- 계산된 최단 경로를 즐겨찾기에 REST API를 활용하여 저장합니다.(인증된 사용자만 활용 가능 서비스) 
- REST API를 활용해 저장된 최단 시간 경로를 확인, 삭제할 수 있습니다.

📄 회원가입 페이지
- 유효성 검사 - 사용자가 입력한 이메일과 비밀번호를 유효성 검사합니다.
- 회원가입 요청 - 사용자가 회원가입 버튼 클릭 시, Axios를 사용하여 서버에 이메일과 비밀번호를 통해 회원가입 요청을 합니다.

📄 로그인 / 로그아웃 페이지
- 로그인 버튼 클릭 - 사용자가 로그인버튼을 클릭하면 Axios 요청을 사용하여 서버에 이메일과 비밀번호를 전송합니다.
- 로컬 스토리지에 저장 - 로그인이 성공적으로 처리되면 액세스 토큰과 사용자 ID를 로컬 스토리지에 저장합니다.

📄 페이지 인가
- 페이지 인가 시, 로컬 스토리지에서 저장된 액세스 토큰을 사용하여 서버에 유효성 검사 요청 후 유효한 액세스 토큰인지 확인해 페이지 접근을 허용합니다. (JWT 토큰을 활용함으로써 Cookie와 Session을 사용하지 않고 인증/인가 구현) 

📄 로그아웃
- 로컬 스토리지에서 id와 액세스 토큰을 삭제합니다.

## 🖇️ 활용 데이터 및 API
- TMO(여행장병 안내소) 정보 / 국군수송사령부(정보통신체계과) / <출처 : 국방 공공데이터>
- 국방부_국군복지단 복지시설 상세현황 / 국방부(정보통신과) / <출처 : 국방 공공데이터>
- 국방부_군 복지시설 주변 관광지 정보 / 국방부(정보통신과) / <출처 : 국방 공공데이터>
- 국방부_병사 할인 혜택 정보 / 국방부(정보통신과) / <출처 : 국방 공공데이터>
- Kakao Search Map API / Kakao / <출처 : kakao Maps API>
- Naver Map API / NAVER(주) / <출처 : NAVER Developers >
- Kakao Search Local Keyword API / Kakao / <출처 : KaKao Developers >
- ODsay 대중교통 Open API / 아로정보기술(주) / <출처: ODsay API>
