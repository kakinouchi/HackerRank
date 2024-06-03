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

