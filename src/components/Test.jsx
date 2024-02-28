import React from 'react';

const Test = () => {
  class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor(head = null) {
      this.head = head;
    }

    getLast() {
      let lastNode = this.head;
      if (lastNode) {
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
      }
      return lastNode;
    }

    size() {
      let count = 0;
      let node = this.head;
      while (node) {
        count++;
        node = node.next;
      }
      return count;
    }
  }

  const createLinkedList = (arr) => {
    let l1_len = arr.length;
    let node = [];
    let list = [];
    for (let i = 0; i < l1_len; i++) {
      if (i == 0) {
        node[0] = new ListNode(arr[0]);
        list[0] = new LinkedList(node[0]);
      } else {
        node[i] = new ListNode(arr[i]);
      }
    }

    for (let i = 0; i < l1_len; i++) {
      if (node[i + 1] !== undefined) {
        node[i].next = node[i + 1];
      }
    }

    return list;
  };

  var addTwoNumbers = function (l1, l2) {
    let linked_1 = createLinkedList(l1);
    let linked_2 = createLinkedList(l2);
    console.log(linked_1[0].getLast);
  };

  addTwoNumbers([2, 4, 3], [5, 6, 4]);

  return <div></div>;
};

export default Test;
