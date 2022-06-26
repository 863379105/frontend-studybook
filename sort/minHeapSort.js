function peek(heap) {
  if (heap && heap.length) {
    return heap[0];
  }
  return null;
}

function push(heap, data) {
  heap.push(data)
  siftUp(heap, heap.length - 1)
}

function siftUp(heap, pos) {
  while(pos > 0) {
    const parentPos = Math.ceil(pos / 2) - 1;
    if (heap[parentPos] > heap[pos]) {
      let temp = heap[parentPos];
      heap[parentPos] = heap[pos];
      heap[pos] = temp;
      pos = parentPos;
    } else {
      return;
    }
  }
}

function pop(heap) {
  const first = peek(heap);
  if (!first) return null;
  const last = heap.pop();
  if (first !== last) {
    heap[0] = last;
    siftDown(heap, 0);
  }
  return first;
}

function siftDown(heap, pos) {
  while(pos < heap.length) {
    let left = (pos + 1) * 2 - 1;
    let right = (pos + 1) * 2;

    if (heap[left] && heap[right]) {
      let minPos = heap[left] - heap[right] < 0 ? left : right;
      if (heap[minPos] - heap[pos]) {
        let temp = heap[minPos];
        heap[minPos] = heap[pos];
        heap[pos] = temp;
        pos = minPos;
      } else {
        return;
      }
    } else if (heap[left]) {
      if (heap[left] - heap[pos] < 0) {
        let temp = heap[left];
        heap[left] = heap[pos];
        heap[pos] = temp;
        pos = left;
      } else {
        return
      }
    } else {
      return;
    }
  }
}