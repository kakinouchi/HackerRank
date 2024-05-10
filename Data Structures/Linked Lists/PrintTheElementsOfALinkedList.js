// while 文嫌いマンだから再帰で書いた。

function printLinkedList(head) {
    console.log(head.data)

    if(head.next == null) {
        return;
    }
    printLinkedList(head.next)
}
