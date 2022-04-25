# react 中的 diff 算法

### situation

### questions

* **Q1**

```js
function FunctionComponent(props) {
  const [state,dispatch] = useReducer(reducer, initState);
  const setShow = function() {
    dispatch({type: 'setShow'})
  }
  
  return (
    <div className="border">
      <p>{props.name}</p>
      <p>this is function component</p>
      {
        state.show ? 
          <h5>show</h5> :
          <p>not show</p>
      }
      <button onClick={setShow}>setShow</button>
    </div>
  );
}

/////// diff ////////////////////////////////////////////////////////////////////////////////////
// Step 1 
for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
  if (oldFiber.index > newIdx) {
    nextOldFiber = oldFiber;
    oldFiber = null;
  } else {
    nextOldFiber = oldFiber.sibling;
  }
  const newFiber = updateSlot(
    returnFiber,
    oldFiber,
    newChildren[newIdx],
    lanes,
  );
  console.log('oldFiber=>', oldFiber);
  console.log('newFiber=>', newFiber);
  if (newFiber === null) {
    // TODO: This breaks on empty slots like null children. That's
    // unfortunate because it triggers the slow path all the time. We need
    // a better way to communicate whether this was a miss or null,
    // boolean, undefined, etc.
    if (oldFiber === null) {
      oldFiber = nextOldFiber;
    }
    break;
  }
  if (shouldTrackSideEffects) {
    if (oldFiber && newFiber.alternate === null) {
      // We matched the slot, but we didn't reuse the existing fiber, so we
      // need to delete the existing child.
      deleteChild(returnFiber, oldFiber);
    }
  }
  lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
  if (previousNewFiber === null) {
    // TODO: Move out of the loop. This only happens for the first run.
    resultingFirstChild = newFiber;
  } else {
    // TODO: Defer siblings if we're not at the right index for this slot.
    // I.e. if we had null values before, then we want to defer this
    // for each null value. However, we also don't want to call updateSlot
    // with the previous one.
    previousNewFiber.sibling = newFiber;
  }
  previousNewFiber = newFiber;
  oldFiber = nextOldFiber;
}

```

* **Q2**

```js

// 当出现如下情况

// old : A B C D
// new : A B E D C

// STEP 1 复用 A B , 此时 lastPlacedIndex = 1

// 剩余 old : C D
// 剩余 new : E D C

// STEP 2 将剩余 old 存入 existingChildren 中，遍历 E D C
// 在 existingChildren 中未查找到 E 节点，创建新的 E ，放入 resultingFirstChild 尾部 此时 lastPlacedIndex = 1
// 在 existingChildren 中查找到 D 节点，判断不需要移动，删除 existingChildren 中的 D ，将取出的 D 放入 resultingFirstChild 尾部 此时 lastPlacedIndex = 3
// 在 existingChildren 中查找到 C 节点，判断需要移动，C 的 index(2) 小于 lastPlacedIndex(3) ,  删除 existingChildren 中的 C ，将取出的 C 放入 resultingFirstChild 尾部 此时 lastPlacedIndex = 2

```

> 为何需要判断 C 是否需要移动，从 existingChildren 中取出，直接加入 resultingFirstChild中不行吗