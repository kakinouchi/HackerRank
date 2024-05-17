// (2024年5月13日)
// 問題文があまりピンと来ずに今日は終了...

// (2024年5月16日)
// 図に書いてみた：
// https://github.com/kakinouchi/HackerRank/blob/master/Data%20Structures/Linked%20Lists/InsertANodeAtTheHeadOfALinkedList_1.jpg
// https://github.com/kakinouchi/HackerRank/blob/master/Data%20Structures/Linked%20Lists/InsertANodeAtTheHeadOfALinkedList_2.jpg

// (2024年5月17日)
// できた！ なんてことはなかった。

function insertNodeAtHead(head, data) {
    const newNode = new SinglyLinkedListNode();
    
    newNode.data = data;
    newNode.next = head;
        
    return newNode;
}
