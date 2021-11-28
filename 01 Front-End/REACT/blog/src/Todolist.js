import React from 'react';
import './Todolist.css';

function List({ list, key }){
  return(
    <div className="list" key={key}>
      <b>{list.listname}</b>
    </div>
  );
}

// 아니 나는 객체를 배열에 예쁘게 담아줬건만 왜 너는 객체로 오는거야?
// Array.isArray(lists) === false 로 나옴 ...
// 와 댑악... useState로 들고오니까 제대로 나온다 ㅜ.ㅜ 아까는 [lists, setLists] = [~~] 이렇게 되어있었음 ㅠㅜ 
function TodoList({ lists }){

  return(
    <section className="listBox">
      {lists.map((list) => (
        <List list={list} key={list.id}/>
      ))}
    </section>
  );
}

export default TodoList;