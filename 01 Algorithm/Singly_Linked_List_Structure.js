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
    pop(val){
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
    traverse(val){
        let cur = this.head;
        while(cur){
            if(this.head === val){
                console.log(this.head);
            }
        }
    }
}

