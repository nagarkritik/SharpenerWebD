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

function inorderTrav(root, arr){
    if(root){
        inorderTrav(root.left, arr)
        arr.push(root.val)
        inorderTrav(root.right, arr)
    }
}


function merge(arr1, arr2){
    let i = 0
    let j = 0
    let arr = []
    while (i<arr.length & j<arr2.length){
        if(arr1[i]<arr1[j]){
            arr.push(arr1[i])
            i+=1
        }else{
            arr.push(arr2[j])
            j+=1
        }

    }
    while (i<arr1.length){
        arr.push(arr1[i])
        i+=1
    }

    while(j<arr2.length){
        arr.push(arr2[j])
        j+=1
    }
    return arr
}

function sortedArrayToBST(arr,s,e){
    if(s>e) return null

    let m = parseInt((s+e)/2)

    let root = new Node(arr[m])

    root.left = sortedArrayToBST(arr, s, m-1)
    root.right = sortedArrayToBST(arr, m+1, e)

    return root
}




let t1 = new BST()
let t2 = new BST()

t1.insert(8)
t1.insert(3)
t1.insert(10)
t1.insert(1)
t1.insert(6)
t1.insert(14)
t1.insert(4)
t1.insert(7)
t1.insert(13)

t2.insert(40)
t2.insert(30)
t2.insert(50)
t2.insert(25)
t2.insert(35)
t2.insert(45)
t2.insert(60)

let arr1 = []
let arr2 = []
inorderTrav(t1.root, arr1)
inorderTrav(t2.root, arr2)

let arr = []

arr = merge(arr1, arr2)

let arr3 = []
let t3 = sortedArrayToBST(arr,0,arr.length-1)
inorderTrav(t3, arr3)
console.log(arr3)

// console.log(t1.search(9))
// console.log(t1.findMin())
// console.log(t1.findMax())