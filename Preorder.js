class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

function preorderRec(root){
    if(root){
        pre.push(root.val)
        preorderRec(root.left)
        preorderRec(root.right)
    }
}

function preorderIt(root){
    if(!root) return

    let res = []
    let st = []
    st.push(root)

    while(st.length!=0){
        let a = st.pop()
        res.push(a.val)

        if(a.right) st.push(a.right)
        if(a.left) st.push(a.left)
    }

    return res
}

let pre = []
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

preorderRec(root)
console.log(pre)
console.log(preorderIt(root))


arr = [1,2,3,4,5]

arr.splice(2,1)

console.log(arr)