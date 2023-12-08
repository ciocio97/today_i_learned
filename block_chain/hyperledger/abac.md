# asset-transfer-abac

<br/>

## What is ABAC ? 

**A**ttribute-**B**ased **A**ccess **C**ontrol (ABAC)  
: 속성 기반 접근 제어  

: `CA`(Certificate Authority)내 사용자 인증서를 기반으로  
  `Smart Contract` 내의 특정 기능에 대한 접근을 제한(제어)하는 기능을 제공한다.  
: 이 기능을 사용하게 되면 네트워크 내에서 특정 사용자가 관리자 권한을 가질 필요 없이,  
  인증서에 따라 차별적인 권한을 제공할 수 있다.

: ABAC 는 `Chain Code`(or `hyperledger fabric` 런타임) 에서 이루어진다.  
: `Chain Code`가 사용자의 속성을 추출해 접근 제한 결정을 내리기 위해선,  
  `ECert`(Enrollment Certificate 등록 인증서)는 사용자 정보를 포함하고 있어야 한다.  
  (인증서는, 해당 `Channel`이 인증한 `CA`에서 발급한 것)  

: `ABAC`를 통해 asset owner는 asset 을 생성/수정/위임을 할 수 있다.  
: `ABAC`도 `Smart Contract`의 일종.

<br/>

참고.

[Fabric CA User guide](https://hyperledger-fabric-ca.readthedocs.io/en/latest/users-guide.html#attribute-based-access-control)  
[Chaincode library API for ABAC](https://github.com/hyperledger/fabric-chaincode-go/blob/master/pkg/cid/README.md)

<br/>

### 네트워크 시작 + 스마트 컨트랙트 배포

<br/>

#### 01 기존 네트워크 종료

```vim
cd fabric-samples/test-network // Fabric test network 폴더 진입
./network.sh down              // 네트워크 종료
```

<br/>

#### 02 네트워크 배포

```
./network.sh up createChannel -ca // CA 사용해 네트워크 배포
```
<br/>

#### 03 네트워크의 Channel에 ABAC 배포

```
./network.sh deployCC -ccn abac -ccp ../asset-transfer-abac/chaincode-go/ -ccl go
```

    ⌘ deployCC 에서 사용할 수 있는 옵션

    ◦ c <channel name> : chain code 를 배포할 채널 이름
    ◦ ccn <chain code name> : chain code 이름
    ◦ ccl <chain code language> : chain code 프로그래밍 언어 (기본값 go)
    ◦ ccv <chain code version> : chain code 버전 (기본값 1.0)
    ◦ ccs <chain code sequence> : chain code 시퀀스
    ◦ ccp <chain code path> : chain code 파일 경로
    ◦ ccep <chain code endorsement policy> : chain code 양도 정책 지정 (기본값 Org1과 Org2가 지닌 양도 정책)
    ◦ cccg <chain code collection-config> : chain code 개인 데이터 모음 파일의 경로 (.. 뭔지 정확히 모르겠음)
    ◦ cci <chain code initialization function name> : chain code 초기화 함수 이름

참고.

[Used with network.sh deployCC options](https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html#bring-up-the-test-network)

<br/>