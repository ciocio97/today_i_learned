// Q1. 완주하지 못한 선수

/** 문제 설명
 * 
 *  수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 *  마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
 *  완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 */

/** 제한 사항
 * 
 *  --마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
 *  --completion의 길이는 participant의 길이보다 1 작습니다.
 *  --참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
 *  --참가자 중에는 동명이인이 있을 수 있습니다.
 */

/** 입출력 예시
 *  participant                                           completion                                  return
 * 
 *  ["leo", "kiki", "eden"]                               ["eden", "kiki"]                             "leo"
 *  ["marina", "josipa", "nikola", "vinko", "filipa"]     ["josipa", "filipa", "marina", "nikola"]    "vinko"
 *  ["mislav", "stanko", "mislav", "ana"]                 ["stanko", "ana", "mislav"]                 "mislav"
 */

// 문제 파악
// 완주한 사람과 완주하지 못하는 사람의 수는 딱 1명 차이이다.
// sort 메서드를 이용해 명단을 알파벳 순서로 정렬했을 때
// for문을 돌며 배열을 검사,
// 같은 인덱스에 일치하지 않는 사람 이름이 나오면 바로 리턴하자 !! -> 아이디어

// 풀이 1
{
  function solution(participant, completion) {
    
    let sortedParticipant = participant.slice().sort();
    let sortedCompletion = completion.slice().sort();
    
    for(let i=0; i<participant.length; i++){
      if(sortedCompletion[i] !== sortedParticipant[i]){
        return sortedParticipant[i];
      }
    }
  }
}
