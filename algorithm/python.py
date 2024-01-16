# 빌트인 데이터 타입

## - 기본 (내장) 데이터 타입

### 1️⃣ 정수형 int

# 정수형 변수 선언

a = 13
b = 4

# 정수형 산술 연산

print(a + b)   # 더하기 / 17
print(a - b)   # 빼기 / 9
print(a * b)   # 곱하기 / 52
print(a / b)   # 나누기 (소수점 포함) / 3.25
print(a // b)  # 나누기 (소수점 버림) / 3
print(a % b)   # 모듈러 연산 (나머지) / 1
print(-a)      # 부호 바꿈 / -13
print(abs(-a)) # 절대값 / 13
print(a**b)    # a의 b승 / 28561

# 정수형 비교 연산

print(a == b) # 같은 값인지 비교 / False
print(a != b) # 같지 않은 값인지 비교 / True
print(a > b)  # 왼쪽 값이 더 큰지 비교 / True
print(a < b)  # 왼쪽 값이 더 작은지 비교 / False
print(a >= b) # 왼쪽 값이 더 크거나 같은지 비교 / True
print(a <= b) # 왼쪽 값이 더 작거나 같은지 비교 / Fasle

# 정수형 비트 연산

'''
컴퓨터는 2진수를 사용하므로, 대부분의 프로그래밍 언어는 2진수를 다루는 연산자를 제공한다.
파이썬 또한 10진수 → 2진수, 2진수 → 10진수 변환 함수를 지원한다.
코드에서 2진수를 직접 입력할 때는 숫자 앞에 0b 를 붙인다. (binary 의 b)
'''

print(bin(a))         # 10진수 → 2진수 / 0b1101
print(bin(b))         # 10진수 → 2진수 / 0b100
print(0b1101)         # 2진수 → 10진수 / 13
print(int('1101', 2)) # 2진수(문자열) → 10진수 / 13

'''
비트 연산자 논리표 참고

& (AND) : 일치 - 그대로 유지
          불일치 - 0 처리
| (OR)  : 일치 - 그대로 유지
          불일치 - 1 처리
^ (XOR) : 일치 - 0 처리
          불일치 - 1 처리
'''

print(a & b) # AND / 4
print(a | b) # OR / 13
print(a ^ b) # XOR / 9
print(~a) # NOT / 
print(~b) # NOT / 

### 2️⃣ 부동소수형 float

### 3️⃣ 문자열 string


print('hello')



## - 컬렉션 데이터 타입

### 1️⃣ 리스트 list

### 2️⃣ 튜플 tuple

### 3️⃣ 셋 set

### 4️⃣ 딕셔너리 dictionary