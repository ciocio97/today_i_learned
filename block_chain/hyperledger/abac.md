# asset-transfer-abac

What is ABAC ?  
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
: `ABAC`도 `Smart Contract`의 일종이다.

[Fabric CA User guide](https://hyperledger-fabric-ca.readthedocs.io/en/latest/users-guide.html#attribute-based-access-control)
[Chaincode library API for ABAC](https://github.com/hyperledger/fabric-chaincode-go/blob/master/pkg/cid/README.md)