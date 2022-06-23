class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        if(this.root === null){
            this.root = new Node(value)
        }else{
            this.insertHelp(value, this.root)
        }
    }

    insertHelp(value, curr){
        if(value<curr.val){
            if(!curr.left) curr.left = new Node(value)
            else this.insertHelp(value, curr.left)

        }else if(value>curr.val){
            if(!curr.right) curr.right = new Node(value)
            else this.insertHelp(value, curr.right)

        }else{
            return 
        }
    }

    search(value){
        if(!this.root) return false
        else{
            return this.searchHelp(value, this.root)
        }
    }

    searchHelp(value, curr){

        if(!curr) return false

        if(value===curr.val) return true
        else if(value<curr.val) return this.searchHelp(value, curr.left)
        else return this.searchHelp(value, curr.right)
    }

    findMin(){
        if(!this.root) return false


        let min = this.findMinHelper(this.root)
        return min.val
    }

    findMinHelper(curr){
        while(curr.left){
            curr = curr.left
        }
        return curr
    }   

    findMax(){
        if(!this.root) return false

        let max = this.findMaxHelper(this.root)
        return max.val
    }

    findMaxHelper(curr){
        while (curr.right){
            curr = curr.right
        }
        return curr
    }
}


let t1 = new BST()

t1.insert(8)
t1.insert(3)
t1.insert(10)
t1.insert(1)
t1.insert(6)
t1.insert(14)
t1.insert(4)
t1.insert(7)
t1.insert(13)


console.log(t1.search(9))
console.log(t1.findMin())
console.log(t1.findMax())