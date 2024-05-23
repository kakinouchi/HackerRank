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

