// Day5 No.1

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
// もっといい方法ありそう。
function mergeLists(head1, head2) {
    let list1 = head1
    let list2 = head2
    let array = []
    do {
        array.push(list1.data)
        list1 = list1.next
    }while(list1 !== null)
    do {
        array.push(list2.data)
        list2 = list2.next
    }while(list2 !== null)

    array.sort((a, b)=> a-b);
    let list3 = new SinglyLinkedList()
    array.forEach(e => {
        list3.insertNode(e)
    })
  
    return list3.head
}
