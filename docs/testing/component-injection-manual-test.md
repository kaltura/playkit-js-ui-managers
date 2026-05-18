# Component Injection Manager Manual Testing Guide

## Setup

1. Start dev server: `npm run dev`
2. Open browser console
3. Access player instance: `const player = KalturaPlayer.getPlayer('player-id')`

## Test Case 1: Bottom-Right Injection

```javascript
const uiManagers = player.getService('uiManagers');
const injectionManager = uiManagers.getComponentInjectionManager();

// Create test component
const TestImage = ({src}) => {
  return h('img', {
    src: src || 'https://via.placeholder.com/300x200',
    style: 'width: 300px; height: 200px; border: 2px solid red;'
  });
};

// Inject bottom-right
injectionManager.inject({
  position: 'bottom-right',
  component: TestImage,
  props: {src: 'https://via.placeholder.com/300x200'}
});
```

**Expected:** Image appears in bottom-right corner over video

## Test Case 2: Side-by-Side Injection

```javascript
// Switch to side-by-side
injectionManager.switchPosition('side-by-side');
```

**Expected:** 
- Video moves to left half
- Image appears in right half
- Both are 50% width

## Test Case 3: Position Switching

```javascript
// Switch back to bottom-right
injectionManager.switchPosition('bottom-right');
```

**Expected:**
- Video returns to full width
- Image appears bottom-right

## Test Case 4: Removal

```javascript
injectionManager.remove();
```

**Expected:**
- Component disappears
- Video element restored to original position

## Test Case 5: Replace Component

```javascript
// Inject first component
injectionManager.inject({
  position: 'bottom-right',
  component: TestImage,
  props: {src: 'https://via.placeholder.com/300x200/ff0000'}
});

// Inject second component (should replace first)
injectionManager.inject({
  position: 'bottom-right',
  component: TestImage,
  props: {src: 'https://via.placeholder.com/300x200/00ff00'}
});
```

**Expected:** Only green image visible (replaced red)
