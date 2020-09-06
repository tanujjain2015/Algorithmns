class MinHeap {
    constructor() {
      this.items = []
    }
  
    getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    getLeftChildIndex(parentIndex) {
      return (parentIndex * 2) + 1;
    }
  
    getRightChildIndex(parentIndex) {
      return (parentIndex * 2) + 2;
    }
  
    getParent(index) {
      return this.items[this.getParentIndex(index)]
    }
  
    hasParent(index) {
      return this.getParentIndex(index) >= 0;
    }
  
    hasLeftChild(index) {
      return this.getLeftChildIndex(index) < this.items.length -1;
    }
  
    hasRightChild(index) {
      return this.getRightChildIndex(index) < this.items.length -1;
    }
  
    leftChild(index) {
      return this.items[this.getLeftChildIndex(index)];
    }
  
    rightChild(index) {
      return this.items[this.getRightChildIndex(index)];
    }
  
    heapifyUp() {
      let itemIndex = this.items.length - 1;
      while(this.hasParent(itemIndex) && this.getParent(itemIndex) > this.items[itemIndex]) {
        this.swap(this.getParentIndex(itemIndex), itemIndex);
        itemIndex = this.getParentIndex(itemIndex);
      }
    }
  
    heapifyDown() {
      let itemIndex = 0;
      // since this is complete tree, 
      // it should have a lchild
      // if there is no lchild, there is no rchild
      while(this.hasLeftChild(itemIndex)) { 
        let smallerChildIndex = this.getLeftChildIndex(itemIndex);
        if(this.hasRightChild(itemIndex) && this.rightChild(itemIndex) < this.leftChild(itemIndex)) {
          smallerChildIndex = this.getRightChildIndex(itemIndex);
        }
        if(this.items[itemIndex] < this.items[smallerChildIndex]) {
          break;
        } else {
          this.swap(itemIndex, smallerChildIndex);
        }
        itemIndex = smallerChildIndex;
      }
    }
  
    swap(index1, index2) {
      const temp = this.items[index1];
      this.items[index1] = this.items[index2];
      this.items[index2] = temp;
    }
  
    peek() {
      return this.items[0];
    }
  
    removeMin() {
      const item = this.items[0]
      this.items[0] = this.items.pop();
      this.heapifyDown();
      return item;
    }
  
    insert(item) {
      this.items.push(item);
      this.heapifyUp();
    }
  } 
  
  function topK(arr, k) {
    if(arr.length === 0) return [];
    //arr = ([...new Set(arr)]);
    let minHeap = new MinHeap();
    for(let i=0; i<arr.length; i++) {
          if(minHeap.items.length === k) {
              if(arr[i] > minHeap.peek()) {
                  minHeap.removeMin();
                  minHeap.insert(arr[i]);
              }
          } else {
              minHeap.insert(arr[i]);
          }
          if(minHeap.items.length > k) minHeap.removeMin();
    }
    return minHeap.items;
  }
  
  var sortNumbers = [4,8,9,6,6,2,10,2,8,1,2,9];
  //var sortNumbers = [4];
  console.log(topK(sortNumbers, 4));