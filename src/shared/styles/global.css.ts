import { globalStyle } from '@vanilla-extract/css';
import 'pretendard/dist/web/variable/pretendardvariable.css'; // pnpm으로 Pretendard 패키지 설치 및 Variable Font 사용

globalStyle('body', {
  minWidth: '1280px',
  fontFamily:
    '"Pretendard Variable", Pretendard, -apple-system, "Helvetica Neue", Arial, sans-serif',
});

globalStyle('#root', {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
});

// TODO: 필요 시 스크롤바 커스텀 적용
