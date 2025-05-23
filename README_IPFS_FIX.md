# IPFS 이미지 로딩 문제 해결

## 이슈 설명

RewardsDashboard 또는 다른 구성 요소에서 IPFS 이미지 대신 로컬 이미지가 표시되는 문제가 있었습니다. 문제는 다음과 같았습니다:

1. `nftImageUtils.js`는 IPFS URL을 올바르게 선택했습니다
2. 하지만 최종 렌더링에서는 로컬 이미지가 표시되었습니다 
3. 같은 NFT가 "My NFTs" 탭에서는 IPFS 이미지가 표시되었는데 "Dashboard" 탭에서는 로컬 이미지가 표시되었습니다

## 핵심 문제점 - "최종 보스"

문제의 핵심은 `mediaUtils.js`의 `processImageUrl` 함수였습니다. 이 함수는 `preferLocalFiles` 매개변수를 확인하지 않고 자동으로 IPFS URL을 로컬 이미지로 변환하고 있었습니다. 즉, 코드 한 부분에서는 IPFS URL을 선택하더라도, 이미지 로드 과정에서 로컬 이미지로 변환되었던 것입니다.

## 수정된 사항

1. `mediaUtils.js`에서 `preferLocalFiles` 기본값을 `true`에서 `false`로 변경했습니다.

2. IPFS URL을 로컬 이미지로 변환하는 코드를 수정하여 `preferLocalFiles` 매개변수가 `true`일 때만 작동하도록 했습니다.

3. 로컬 이미지 경로도 `preferLocalFiles` 매개변수가 `false`일 때는 IPFS URL로 변환되지 않도록 수정했습니다.

4. IPFS 게이트웨이 목록을 업데이트하여 더 신뢰할 수 있는 게이트웨이를 우선적으로 사용하도록 했습니다.

5. 디버깅을 위한 로그를 추가했습니다.

## 폴백 메커니즘

현재 구현은 다음과 같이 작동합니다:

1. 이미지 로드 시 IPFS URL을 우선적으로 사용합니다
2. IPFS URL이 로드되지 않는 경우 (네트워크 오류 등), 로컬 이미지를 폴백으로 사용합니다
3. 이는 사용자 경험을 위해 항상 이미지가 표시되도록 하기 위함입니다

## 문제점과 해결 방법

실제 프로덕션 환경에서 IPFS 이미지가 로드되지 않는 경우 대부분 다음 이유 중 하나입니다:

1. **네트워크 연결 문제**: `net::ERR_NAME_NOT_RESOLVED` 오류가 발생할 수 있습니다.
   - 해결 방법: 여러 IPFS 게이트웨이를 시도하도록 설정했습니다.

2. **게이트웨이 속도 제한 또는 차단**: Cloudflare와 같은 게이트웨이는 종종 속도 제한이 있습니다.
   - 해결 방법: 신뢰할 수 있는 게이트웨이를 우선적으로 사용하도록 순서를 재배열했습니다.

3. **IPFS 노드 가용성**: IPFS 노드가 오프라인이거나 연결할 수 없는 경우
   - 해결 방법: Pinata, Infura 등 신뢰할 수 있는 서비스를 사용하도록 추가했습니다.

## 수정된 파일

- `utils/mediaUtils.js`: IPFS URL 처리 로직 수정
- `components/EnhancedProgressiveImage.jsx`: 이미지 로드 로직 개선

## 테스트 방법

1. IPFS 이미지가 로드되는지 브라우저 개발자 도구의 네트워크 탭에서 확인합니다.
2. 게이트웨이 연결 오류가 있는 경우, 콘솔에서 로컬 이미지로 폴백되는 로그를 확인할 수 있습니다.
3. My NFTs 탭과 Dashboard 탭에서 동일한 NFT가 일관되게 표시되는지 확인합니다.