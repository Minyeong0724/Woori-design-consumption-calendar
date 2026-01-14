# 개요 
우리에게 가장 친숙한 시각적 도구인 달력 인터페이스를 채택하여, 시간적 맥락 위해서 소비자가 언제 어디서 얼마나 소비를 했는지에 대한 행동 패턴을 한눈에 인지할 수 있다. 
🏗️ Main & Layout | 전역 상태 및 구조 설계
Component Architecture: layouts, components, ui로 구분된 체계적인 디렉토리 구조를 통해 코드의 재사용성과 유지보수성 향상.

State Management: useState를 통해 메인 날짜 상태를 관리하고, Header와 Calendar 간의 데이터 동기화 구현.

Unified Design: 전체 레이아웃의 공백, 폰트, 컬러 시스템을 통일하여 일관된 사용자 경험(UX) 제공.

📅 Calendar | 데이터 시각화 및 인터랙션
Dynamic Grid: 각 월의 요일과 날짜를 계산하여 동적으로 렌더링되는 달력 UI 구현.

Expense Summary: 날짜별 버튼에 해당 일의 지출 합계를 표시하여 시각적 소비 패턴 제공.

Interactive Buttons: 특정 날짜 클릭 시 해당 데이터를 인자로 전달하며 상세 내역 모달(Modal) 활성화.

🔝 Header | 정보 요약 및 제어
Real-time Indicator: 현재 조회 중인 연도와 월을 상단에 고정 노출.

Total Amount Display: 해당 월의 전체 지출액을 실시간으로 계산하여 ShowTotalPrice 반영.

Exception Handling: 총금액이 0원인 경우 UI의 간결함을 위해 금액을 표시하지 않는 예외 처리 로직 적용.

팝업 Modal | 상세 내역 및 Portal 구현
React Portal: 부모 컴포넌트의 DOM 계층 구조에 구애받지 않는 독립적인 모달 레이어 구현.

Category Mapping: JSON 더미 데이터의 카테고리(식당, 카페 등)에 매칭되는 이모지(🍚, ☕) 자동 로드 시스템.

Detail List: 선택된 날짜의 지출 항목(타이틀, 금액, 시간)을 리스트 형태로 상세하게 출력.

📁 프로젝트 구조 (Folder Structure)
Plaintext

src/
 ┣ components/  # 도메인별 컴포넌트 (Calendar, Header 등)
 ┣ ui/          # 범용 UI 컴포넌트 (Button, Modal Portal 등)
 ┣ layouts/     # 페이지 전체 레이아웃 껍데기
 ┣ constants/   # 더미 데이터, 이모지 매핑 상수, 공통 변수
 ┣ utils/       # 금액 계산 및 날짜 포맷팅 함수
 ┗ contexts/    # 전역 상태 관리를 위한 Context (필요 시)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
