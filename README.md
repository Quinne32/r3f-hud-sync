# Interactive Exhibit (R3F + Zustand)

# Performance Considerations

This project was built with performance in mind, particularly around preventing unnecessary re-renders during 3D interactions while maintaining seamless synchronization between the React HUD and the Three.js scene.

# Zustand for global state management
I used Zustand as a lightweight global state solution to synchronize state between the React HUD and the Three.js scene. Components subscribe only to relevant state slices, which avoids prop drilling and minimizes unnecessary re-renders.

# State Scoped subscriptions
State updates are scoped to specific properties (such as rotation or color), ensuring that changes in one part of the state do not trigger full scene or UI re-renders. This keeps both the HUD and the 3D scene performant even as interactions increase.

# Minimal React Reconciliation
The project leverages React Three Fiber’s declarative rendering model and a stable component hierarchy to keep re-renders predictable. Instead of using React.memo, components update only when the specific state they depend on changes, keeping React’s reconciliation overhead low without introducing premature optimizations.

# Decoupling the 3D scene from the React render cycle
The Three.js scene logic is kept largely independent from React’s render cycle. Scene mutations (such as object transforms) are handled imperatively within Three.js, while React is responsible only for displaying derived state in the HUD.



