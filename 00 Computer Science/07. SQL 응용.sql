<DB 기본>
--트랜잭션의 특성 4가지를 쓰시오.
    --일관성: 트랜잭션 실행 성공 후 항상 일관된 DB 상태를 보존해야하는 특성
    --지속성: (영속성) 완료된 트랜잭션의 결과는 영구적으로 DB에 반영되는 특성 
    --원자성: 연산 중 하나라도 실패할 경우 전체가 취소되어야하는 특성
    --격리성: (고립성)(독립성)수행 중인 트랜잭션은 완전히 완료될 때까지 다른 트랜잭션에서 수행 결과를 참조할 수 없는 특성 

--트랜잭션 Rollback(제어어 中 1)에 대해 설명하시오.
    --Rollback: 오류가 발생했을 때, 오류 이전의 특정 시점 상태로 되돌려주는 제어어
    --Commit: 트랜젝션을 메모리에 영구적으로 저장하는 제어어
    --Checkpoint: Rollback을 위한 시점을 지정하는 제어어

--데이터베이스의 회복(Recovery)기법 중 Rollback 시 Redo, Undo가 모두 실행되는 트랜잭션 처리법으로,
--트랜잭션 수행 중 갱신 결과를 바로 DB에 반영하는 기법은 무엇인가?  --즉각 갱신 회복 기법
    --회복기법(Recovery)이란?
        --트랜잭션을 수행하는 도중 장애로 인해 손상된 데이터베이스를 손상되기 이전의 정상적인 상태로 복구시키는 작업.
    --회복기법(Recovery)종류?
        --로그 기반 회복 기법: 1.자연 갱신 회복 기법(완료 전 DB기록 X)  
        --                    2.즉각 갱신 회복 기법(완료 전 DB기록 O)
        --체크포인트 회복 기법: 검사점 이후에 처리된 트랜잭션에 대해서만 복원
        --그림자 페이징 회복 기법: 아예 복제본을 생성하여 복원하는 데 활용

--DDL: Data Definition Language (데이터 정의어) --data를 담는 '그릇'을 정의하는 언어
    --DDL 대상
        --도메인: 하나의 속성이 가질 수 있는 원자값들의 집합.
        --스키마: DB의 구조, 제약 조건등의 정보를 담고 있는 기본적인 구조.
        --테이블: data 저장 공간.
        --뷰: 하나 이상의 물리 테이블에서 유도되는 가상의 테이블.
        --인덱스: 검색을 빠르게 하기 위한 data 구조.

    CREATE | ALTER | DROP | TRUNCATE --TABLE

    - CREATE TABLE 테이블명 (
        컬럼명 데이터타입 PRIMARY KEY, 
        컬럼명 데이터타입 FOREIGN KEY REFERENCES 참조 테이블명 (기본키),
        컬럼명 데이터타입 UNIQUE,
        컬럼명 데이터타입 NOT NULL,
        컬럼명 데이터타입 CHECK (조건식),
        컬럼명 데이터타입 DEFAULT 값
    );

    - ALTER TABLE 테이블명 ADD 컬럼명 데이터타입 [제약조건];
      ALTER TABLE 테이블명 MODIFY 컬럼명 데이터타입 [제약조건];
      ALTER TABLE 테이블명 DROP 컬럼명;
    - DROP TABLE 테이블명 [CASCADE | RESTRICT];
    - TRUNCATE TABLE 테이블명;

    CREATE | CREATE OR REPLACE --VIEW

    - CREATE VIEW 뷰이름 AS
      조회쿼리;
    - CREATE OR REPLACE VIEW 뷰이름 AS
      조회쿼리;
    - DROP VIEW 뷰이름;

    CREATE | ALTER | DROP --INDEX

    - CREATE [UNIQUE] INDEX 인덱스명 ON 테이블명(컬럼명1, 컬럼명2...);
    - ALTER [UNIQUE] INDEX 인덱스명 ON 테이블명(컬럼명1, 컬럼명2...);
    - DROP INDEX 인덱스명;
    
--DML: Data Manipulation Language (데이터 조작어) --DB에 저장된 '자료'를 조작하는 언어

    - SELECT ( FROM / WHERE / GROUP BY / HAVING / ORDER BY )

    - INSERT INTO 학생(학번,성명,학년,수강과목)
      VALUES (7766,'장길산',3,'수학');

    - UPDATE 학생
      SET 주소 = '인천'
      WHERE 이름 = '장길산';

    - DELETE FROM 학생
      WHERE 이름 = '장길산';

--DCL: Data Control Language (데이터 제어어) --데이터 보안, 무결성 유지, 병행 제어, 회복을 위해 관리자가 사용하는 언어

    GRANT 권한 ON 테이블 TO 사용자; -- 사용 권한 부여
    REVOKE 권한 ON 테이블 FROM 사용자; -- 사용 권한 취소

<응용 SQL 작성하기>

--집계함수

    - GROUP BY 
    - HAVING
    - COUNT: 줄의 수 반환
      SUM: 컬럼 간 합계 계산
      AVG: 컬럼 간 평균 계산
      MAX: 컬럼 중 최대값 계산
      MIN: 컬럼 중 최솟값 계산
      STDDEV: 컬럼 간 표준편차 계산
      VARIAN: 컬럼 간 분산 계산

--그룹함수

    - GROUP BY ROLLUP(DEPT, JOB); --중간 집계값을 산출
    - GROUP BY CUBE(DEPT, JOB); --결합 가능한 모든 값을 보여줌
    - GROUP BY GROUPING SETS(DEPT, JOB, ()); --컬럼 간 순서와 무관하게, 집계 대상 컬럼들의 개별값을 얻을 수 있음

--윈도함수

    --순위 함수

        SELECT NAME,
               SALARY,
               RANK() OVER (ORDER BY SALARY DESC) A,
               DENSE_RANK() OVER(ORDER BY SALARY DESC) B,
               ROW_NUMBER() OVER (ORDER BY SALARY DESC) C
        FROM EMPLOYEE;

        - RANK:       1 2 2 4 5 (A)
        - DENSE_RANK: 1 2 2 3 4 (B)
        - ROW_NUMBER: 1 2 3 4 5 (C)

    --행 순서 함수

        SELECT NAME,
               SALARY,
               FIRST_VALUE(NAME) OVER (ORDER BY SALARY DESC) A,
               LAST_VALUE(NAME) OVER (ORDER BY SALARY DESC) B,
               LAG(NAME) OVER (ORDER BY SALARY DESC) C,
               LEAD(NAME) OVER (ORDER BY SALARY DESC) D
        FROM EMPLOYEE;

        - FIRST_VALUE: 장길산 장길산 장길산 장길산 장길산  
        - LAST_VALUE:  한유리 한유리 한유리 한유리 한유리 
        - LAG:           x                              --파티션 윈도에서 이전 row 값 반환
        - LEAD:                                    x    --파티션 윈도에서 이후 row 값 반환
 
    --그룹 내 비율 함수

        SELECT NAME,
               SALARY,
               RATIO_TO_REPORT(SALARY) OVER () A,
               PERCENT_RANK() OVER (ORDER BY SALARY DESC) B
        FROM EMPLOYEE;

        - RATIO_TO_REPORT: --주어진 그룹의 합을 기준으로 각 row의 상대적 값 반환
        - PERCENT_RANK: --주어진 그룹에서 제일 먼저 나오는 것을 0, 제일 늦게 나오는 것을 1로 하여 
                        --값 x '행'의 순서별 백분율을 반환

<절차형 SQL 활용하기>
--DB에서 프로시저의 개념을 간략히 서술하시오.
--DB에서 사용자 정의함수의 개념을 간력히 서술하시오.
--DB에서 트리거의 개념을 간략히 서술하시오.
--트리거에서 테이블명에 대한 INSERT/UPDATE/DELETE를 수행하기 전에 트리거가 실행하도록 지정하는 명령은 무엇인가?
--프로시저와 사용자의 정의함수에서 파라미터를 입력받는 모드에 대한 설명이다. 빈칸을 작성하세요.

    --절차형 SQL(Procedural Language)이란? SQL언어에서도 절차 지향적인 프로그래밍이 가능하도록 하는 트랜잭션 언어.
    --절차형 SQL 종류
        --프로시저(Procedure): 일련의 쿼리들을 하나의 함수처럼 실행하기 위한 쿼리의 집합
              
            --선언부(DECLARE)  
            CREATE [OR REPLACE] PROCEDURE 프로시저_명
            (파라미터_명 [ IN | OUT | INOUT ] 데이터_타입, ...)
                        --IN: 운영체제에서 프로시저/사용자 정의 함수로 값을 전달하는 모드.
                        --OUT: 프로시저/사용자 정의 함수에서 처리된 결과를 운영체제로 전달하는 모드.
                        --INOUT: IN과 OUT의 2가지 기능을 동시에 수행하는 모드.
            IS
                변수 선언
            --시작/종료부(BEGIN/END)
            BEGIN
                명령어;
            --제어부(CONTROL)
            --SQL
            --예외부(EXCEPTION)
            --실행부(TRANSACTION)
            [ COMMIT | ROLLBACK ]
            END;

        --사용자 정의함수(User-Defined Function): SQL처리를 수행한 후, 수행 결과를 단일 값으로 반환할 수 있는 절차형 SQL

            --선언부(DECLARE) 
            CREATE [OR REPLACE] FUNCTION 함수_명
            (파라미터_명 IN 데이터_타입, ...)
                        --IN 1가지로 구성.
            RETURN 데이터_타입
            IS
                변수 선언
            --시작/종료부(BEGIN/END)
            BEGIN
                명령어;
            --제어부(CONTROL)
            --SQL
            --예외부(EXCEPTION)
            --반환부(RETURN)
                RETURN 변수;
            END;

        --트리거(Trigger): DB 시스템에서 삽입, 갱신, 삭제 등의 이벤트가 발생할 때마다 관련 작업이 자동으로 수행되는 절차형 SQL

            --선언부(DECLARE)
            CREATE [OR REPLACE] TRIGGER 트리거_명
            --이벤트부(EVENT)
            [ BEFORE | AFTER ] 유형 ON 테이블_명
                    --BEFORE: 테이블_명에 대한 INSERT/UPDATE/DELETE를 수행하기 전에 트리거가 실행하도록 지정하는 명령어.
                    --AFTER: 테이블_명에 대한 INSERT/UPDATE/DELETE가 성공적으로 수행되었을 때만 트리거가 실행하도록 지정하는 명령어.
            [FOR EACH ROW]
            --시작/종료부(BEGIN/END)
            BEGIN
            --제어부(CONTROL)
            --SQL
            --예외부(EXCEPTION)
            END;

<데이터 조작 프로시저 최적화>
--DB 옵티마이저의 개념을 간략히 서술하시오.

    --쿼리 성능 개선(튜닝)이란? 최소의 시간으로 원하는 결과를 얻게끔 DB의 프로시저에 있는 SQL 실행 계획을 수정하는 작업.
        --문제 있는 SQL 식별 -> 옵티마이저 통계 확인 -> SQL문 재구성 -> 인덱스 재구성 -> 실행계획 유지,관리
                             --옵티마이저(Optimizer)란? SQL을 가장 빠르고 효율적으로 수행할 최적의 처리 경로를 생성해주는 DBMS 내부의 핵심 엔진.

                             --                        사용자가 SQL로 결과를 요구하면, DBMS에 내장된 옵티마이저가 자동으로 처리경로를 생성해준다.

                             --                        옵티마이저가 생성한 SQL 처리경로 === 실행 계획 (Execution Plan) 이라고 부른다.

