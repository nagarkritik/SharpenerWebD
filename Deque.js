class DequeNode{
    constructor(data=null){
        this.data = data
        this.next = null
        this.pre = null
    }
}

class Deque{
    constructor(){
        this.head = this.tail = null
    }

    pushFront(value){
        if(!this.head){
            this.head = this.tail = new DequeNode(value)
        }else{
            let temp = new DequeNode(value)
            this.head.pre = temp
            temp.next = this.head
            this.head = temp
        }
    }

    pushLast(value){
        if(!this.head){
            this.head = this.tail = new DequeNode(value)
        }else{
            let temp = new DequeNode(value)
            this.tail.next = temp
            temp.pre = this.tail
            this.tail = temp
        }
    }

    removeFirst(){
        if(!this.isEmpty()){
            let temp = this.head
            this.head = this.head.next
            this.pre = null
            return temp.data
        }
        return "Deque is empty"
    }

    removeLast(){
        if(!this.isEmpty()){
            let temp = this.tail
            this.tail = this.tail.pre
            this.tail.next = null

            return temp.data
        }
        return "Deque is empty"
    }

    isEmpty(){
        if(this.head === null) return true
        else return false
    }

    stackPeek(){
        if(this.head != null) return this.tail.data
        return "Deque is empty"
    }

    queuePeek(){
        if(this.head != null) return this.head.data
        return "Deque is empty"
    }

    print(){
        if(this.head != null){
            let temp = this.head
            
            while(temp){
                console.log(temp.data)
                temp = temp.next
            }
        }else console.log("Deque is empty")
    }
}

class Stack{
    constructor(){
        this.st = new Deque()
    }

    push(value){
        this.st.pushLast(value)
    }

    pop(){
       return this.st.removeLast()
    }

    peek(){
        return this.st.stackPeek()
    }

    printStack(){
        this.st.print()
    }

    isEmpty(){
        return this.st.isEmpty()
    }
}


let s1 = new Stack()

s1.push(2)
s1.push(1)
s1.push(3)
s1.printStack()
console.log(s1.pop())
console.log(s1.peek())
console.log(s1.isEmpty())

