function Node(val) {
  this.val = val
  this.next = null
}

function Queue() {
  this.head = null
  this.tail = null
}

Queue.prototype.enqueue = function(val) {
  if(!this.head) {
    this.head = this.tail = new Node(val)
  } else {
    this.tail.next = new Node(val)
    this.tail = this.tail.next
  }
}

Queue.prototype.dequeue = function() {
  if(!this.head) {
    throw new Error()
  } else {
    var toReturn = this.head
    this.head = this.head.next
    return toReturn
  }
}

queue1 = new Queue()
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
queue1.enqueue(4)
queue1.enqueue(5)
queue1.dequeue()
queue1.dequeue()
queue1.enqueue(6)

console.log('queue1',queue1)
