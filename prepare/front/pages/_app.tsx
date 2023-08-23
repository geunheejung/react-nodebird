/**
 * 웹 애플리케이션 초기화에 필요한 기능을 하는 특별한 파일.
 * 각각의 페이지가 초기화될 때 로딩되는 파일이다.
 * 대표적인 사용 예
 * 1. 각 페이지의 공통된 레이아웃 페이지 작성
 * 2. 전체 앱에 글로벌 CSS 적용 가능.
 */

import type { AppProps } from "next/app";
import Head from 'next/head';

// index.js의 return 부분이 Component -> index.js의 Wrapper가 됨.
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;
