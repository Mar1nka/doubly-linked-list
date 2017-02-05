const Node = require('./node');

class LinkedList {
    constructor() {

        this._tail = null;
        this._head = null;
        this.length = 0;
    }

    append(data) {
        var node = null;

        if (this.length === 0) {
            node = new Node(data);

            this._tail = node;
            this._head = node;

          //  this._head.next = this._tail;
           // this._tail.prev = this._head;
        } else {
            node = new Node(data, this._tail);

            this._tail.next = node;

            this._tail = node;
        }

        ++this.length ;

        return this;
    }

    head() {
        var data = null;

        if (this.length !== 0) {
            data = this._head.data;
        }

        return data;
    }

    tail() {
        var data = null;

        if (this.length !== 0) {
            data = this._tail.data;
        }

        return data;
    }

    at(index) {
        var data = null;
        if(index < this.length) {
            var i = 0;
            var node = this._head;

            while (node !== null) {
                if (i === index) {
                    data = node.data;
                    break;
                }

                i++;
                node = node.next;
            }
        }
        return data;

    }

    insertAt(index, data) {
        var i = 0;
        var node = this._head;

        while (node !== null) {
            if (i === index) {
                node.data = data;
                break;
            }

            i++;
            node = node.next;
        }

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if(index < this.length) {
            var i = 0;
            var node = this._head;

            while (node !== null) {
                if (i === index) {

                    var previousNode = node.prev;
                    var nextNode = node.next;

                    if (previousNode && nextNode) {
                        previousNode.next = nextNode;
                        nextNode.prev = previousNode;
                    }

                    node = null;

                    break;
                }

                i++;
                node = node.next;
            }
        }


        return this;
    }

    reverse() {
        var node = this._head;
        var nodeForExchange = null;

        while(node !== null) {
            nodeForExchange = node.prev;
            node.prev = node.next;
            node.next = nodeForExchange;
            node = node.prev;
        }

        nodeForExchange = this._head;
        this._head = this._tail;
        this._tail = nodeForExchange;

        return this;
    }

    indexOf(data) {
        var node = this._head;
        var index = 0;

        while (node !== null) {

            if (node.data === data) {
                return index;
            } else {
                ++index;
                node = node.next;
            }
        }

        return -1;
    }
}

module.exports = LinkedList;



function test () {
    var link = new LinkedList();

    link.append(1);
    link.append(2);
    link.append(3);

    link.reverse();

    console.log(link);


}


test();


