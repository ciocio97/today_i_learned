// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }

}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        // new Node(val)를 선언해놓고 if문 안에서 계속 쓰는구나 ㄷㄷ
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            // 객체잖아! 마지막(tail)에 next값 넣어주면 head에 있는 next값도 업데이트 되지 !!
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // push 할때마다 객체 길이 1씩 늘리는 거 잊지 말고
        this.length++;
        return this;     
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
            // HELLO -> GOODBYE -> !
            //   c                 c
            //   nt        nt
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    // 와 혼자 완성
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;   
        }
        this.length++;
        return this;
    }
    // Array의 index 조회 기능 추가
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    // Array의 index 조회&교체 기능 추가
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

var list = new SinglyLinkedList();
list.push("HELLO")
list.push("GOODBYE")


// 내 연습장
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }

}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        // 생각 꼬임 ..
        if(this.head === null){
            this.head = new Node(val);
            this.tail = new Node(val);
            this.length += 1;
        }
        else if(this.tail === null){
            this.tail = new Node(val);
            this.length += 1;
        }
        else{

        }        
    }
    pop(val){
        let cur = this.head;
        while(cur){
            if(this.head === val){
                console.log(this.head);
            }
        }
    }
}

