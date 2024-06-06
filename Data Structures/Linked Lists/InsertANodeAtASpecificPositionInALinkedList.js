// (2024年5月21日)
// うーん、今日はダメだ…15分考えたものの進まなかった...
// でも最後に気づいたけど、
// 挿入すべき位置を 0 から順番に増やしていけば一般化が容易っぽいな。

// (2024年5月22日)
// 具体例でちょっと進んだ！ 具体例だいじ！
function insertNodeAtPosition(llist, data, position) {
    // if you want to insert the data to the position = 0
    // const newNode = new SinglyLinkedListNode();
    // newNode.data = data;
    // newNode.next = llist;
    
    // return newNode;
    
    // if you want to insert the data to the position = 1
    // const firstNodeRef = llist;
    // const secondNodeRef = llist.next;
    // const newNode = new SinglyLinkedListNode();
    // newNode.data = data;
    // newNode.next = secondNodeRef;
    // firstNodeRef.next = newNode
    
    // return llist;

    // if you want to insert the data to the position = 2
    const secondNodeRef = llist.next;
    const thirdNodeRef = llist.next.next;    
    const newNode = new SinglyLinkedListNode();
    newNode.data = data;
    newNode.next = thirdNodeRef;
    secondNodeRef.next = newNode
    
    return llist;
}

// (2024年5月23日)
// これを経て...
function insertNodeAtPosition(llist, data, position) {
    // if you want to insert the data to the position = 2
    // const secondNodeRef = llist.next;
    // const thirdNodeRef = llist.next.next;
    // const newNode = new SinglyLinkedListNode();
    // newNode.data = data;
    // newNode.next = thirdNodeRef;
    // secondNodeRef.next = newNode
    
    let frontNode = llist;
    for(let i = 0; i < 2 - 1; i++){
        frontNode = frontNode.next;
    }
    const backNode = frontNode.next;
    const newNode = new SinglyLinkedListNode();
    newNode.data = data;
    newNode.next = backNode;
    frontNode.next = newNode

    return llist;
}

// (2024年5月23日)
// 一般化できた！ ちょっとキショいので、明日再帰を考えてもいいな。
function insertNodeAtPosition(llist, data, position) {    
    let frontNode = llist;
    for(let i = 0; i < position - 1; i++){
        frontNode = frontNode.next;
    }
    const backNode = frontNode.next;
    const newNode = new SinglyLinkedListNode();
    newNode.data = data;
    newNode.next = backNode;
    frontNode.next = newNode

    return llist;
}

// (2024年5月24日)
// こんなノリじゃないかなー。通らなかったけど、違うところがわからん！
function insertNodeAtPosition(llist, data, position) {
    if(position == 0) {
        const newNode = new SinglyLinkedListNode();
        newNode.data = data;
        newNode.next = llist;
        return newNode;
    }
    if(position == 1) {
        const firstNodeRef = llist;
        const secondNodeRef = llist.next;
        const newNode = new SinglyLinkedListNode();
        newNode.data = data;
        newNode.next = secondNodeRef;
        firstNodeRef.next = newNode;
        
        return llist;
    }
    insertNodeAtPosition(llist.next, data, position - 1);
}

// (2024年6月3日)
// 再帰の基本的な書き方を忘れていた。
// 再帰的に呼び出すところで、return をしないと返却が戻っていかないんだな。
// ただ、一個ずれてしまうので、明日そこを再考する。
function insertNodeAtPosition(llist, data, position) {
    if(position == 1) {
        const firstNodeRef = llist;
        const secondNodeRef = llist.next;
        const newNode = new SinglyLinkedListNode();
        newNode.data = data;
        newNode.next = secondNodeRef;
        firstNodeRef.next = newNode;

        return llist;
    }
    if(position == 0) {
        const newNode = new SinglyLinkedListNode();
        newNode.data = data;
        newNode.next = llist;
        return newNode;
    }
    return insertNodeAtPosition(llist.next, data, position - 1);
}

// (2024年6月4日)
// んーなんかこういうノリで書けると思うんだよな〜。
function insertNodeAtPosition(llist, data, position) {
    const _insertNodeAtPosition = (llist, data, position, frontNode) => {
        if(position == 1) {
            const backNode = frontNode.next;    
            const newNode = new SinglyLinkedListNode();
            newNode.data = data;
            newNode.next = backNode;
            frontNode.next = newNode;
            
            return llist;
        }
        if(position == 0) {
            
        }
        return _insertNodeAtPosition(llist, data, position - 1, frontNode.next)
    }
    _insertNodeAtPosition(llist, data, position, llist);
}

// (2024年6月5日)
// あー、「既存のリストのつなぎ方を変える」という発想でやってたけど、
// 発想を変えて、
// 「リストをゼロから作り直す」
// とすればよさそうだな。
// そうすると再帰で書きやすそう。
// 8行目の書き方で、なるべく position の数字によらず同じ書き方にできないかなーと考えてたら
// この発想にいたった。

function insertNodeAtPosition(llist, data, position) {

    const recursiveInsertNodeAtPosition = (llist, count = 0) => {
        console.log("count");
        console.log(count)
        console.log(llist.data);
                
        const nextNode = llist.next;
        
        if(nextNode == null){
            return;
        }
        return recursiveInsertNodeAtPosition(nextNode, count + 1)
    }
    
    recursiveInsertNodeAtPosition(llist);
    // if you want to insert the data to the position = 0
    // const newNode = new SinglyLinkedListNode();
    // newNode.data = data;
    // newNode.next = llist;
    // const headNode = newNode;
    
    // return headNode;
    
    // if you want to insert the data to the position = 1
    // const firstNodeRef = llist;
    // const secondNodeRef = llist.next;
    // const newNode = new SinglyLinkedListNode();
    // newNode.data = data;
    // newNode.next = secondNodeRef;
    // firstNodeRef.next = newNode
    
    // return llist;
    // const newNode = new SinglyLinkedListNode();
    // newNode.data = data;
    // newNode.next = llist;
    // const headNode = newNode;
    
    // return headNode;
    // let currentNode = llist;
    // let count = 0;
    // let newLList = null;
    // while( currentNode != null ) {
    //     console.log()
    //     // if( count == position) {
    //     //     const newNode = new SinglyLinkedListNode();
    //     //     newNode.data = data;
    //     //     newNode.next = 
    //     // } else {
    //     //     const newNode = new SinglyLinkedListNode();
            
    //     // }
    //     currentNode = currentNode.next;
    // }


    // if you want to insert the data to the position = 2
    // const secondNodeRef = llist.next;
    // const thirdNodeRef = llist.next.next;    
    // const newNode = new SinglyLinkedListNode();
    // newNode.data = data;
    // newNode.next = thirdNodeRef;
    // secondNodeRef.next = newNode
    
    // return llist;
}

// (2024年6月6日)
// ちょっと近づいた気がする。
function insertNodeAtPosition(llist, data, position) {

    const recursiveInsertNodeAtPosition = (llist, count, newLlistHead, newLlistLast) => {
        console.log("\n")
        console.log("count");
        console.log(count)
        
        const newNode = new SinglyLinkedListNode()

        console.log("data")
        if(count == position) {
            console.log(data);
            newLlistLast.data = data;
            newLlistLast.next = newNode;
        } else {
            console.log(llist.data);
            newLlistLast.data = llist.data;
            newLlistLast.next = newNode;
        }
        
        console.log("newLlistHead")
        console.log(newLlistHead)
                
        const nextNode = count == position ? llist : llist.next;
        
        if(nextNode == null){
            return;
        }
        return recursiveInsertNodeAtPosition(nextNode, count + 1, newLlistHead, newNode)
    }
    
    const newNode = new SinglyLinkedListNode()
    
    recursiveInsertNodeAtPosition(
        llist,
        0,
        newNode,
        newNode
        );
};
