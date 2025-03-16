# HoloViz Bridge

A framework-agnostic library for connecting Holochain with frontend visualization technologies like Three.js, React, Vue, and vanilla JavaScript.

## Overview

HoloViz Bridge provides a universal, framework-independent solution for integrating Holochain's distributed backend capabilities with rich frontend visualization experiences. The library follows a layered architecture with clear separation of concerns, ensuring true framework agnosticism while maintaining high performance and developer experience.

## Key Features

- **True Framework Agnosticism**: Core functionality implemented in vanilla JavaScript/TypeScript with zero dependencies on specific frontend frameworks
- **Adapter Pattern**: Thin adapter layers for specific frameworks (Three.js, React, Vue, etc.)
- **Selective Synchronization**: Optimize for performance by synchronizing only essential data
- **Modular Architecture**: Components usable independently or as a complete solution
- **Holochain 0.4.2 Compatibility**: Designed to work with Holochain version 0.4.2
- **Ecosystem Integration**: Seamless integration with existing Holochain ecosystem projects like AD4M, Flux, and Neighbourhoods

## Architecture

HoloViz Bridge follows a layered architecture:

1. **Core Layer**: Provides framework-independent connection to Holochain
2. **Data Management Layer**: Handles synchronization, caching, and conflict resolution
3. **Interface Layer**: Defines universal interfaces for common Holochain patterns
4. **Adapter Layer**: Implements thin adapters for specific frameworks
5. **Developer Tools**: Provides utilities for debugging, testing, and monitoring

## Installation

```bash
npm install holoviz-bridge
```

## Usage

### Basic Usage with Vanilla JavaScript

```javascript
import { HoloVizCore, VanillaAdapter } from 'holoviz-bridge';

// Initialize core
const holoVizCore = new HoloVizCore({
  conductorUrl: 'ws://localhost:8888'
});

// Create vanilla adapter
const vanillaAdapter = new VanillaAdapter(holoVizCore);

// Bind to DOM element
vanillaAdapter.bindToElement(document.getElementById('app'), {
  updateOnSignal: true,
  renderFunction: (data, element) => {
    element.innerHTML = `<h1>${data.title}</h1><p>${data.content}</p>`;
  }
});
```

### Three.js Integration

```javascript
import { HoloVizCore, ThreeJsAdapter } from 'holoviz-bridge';
import * as THREE from 'three';

// Initialize core
const holoVizCore = new HoloVizCore({
  conductorUrl: 'ws://localhost:8888'
});

// Create Three.js adapter
const threeJsAdapter = new ThreeJsAdapter(holoVizCore);

// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Bind Holochain data to Three.js scene
threeJsAdapter.bindToScene(scene);

// Create data visualizer
const visualizer = threeJsAdapter.createDataVisualizer({
  dataType: 'spatial',
  updateFrequency: 'realtime'
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  visualizer.update();
  renderer.render(scene, camera);
}
animate();
```

### React Integration

```jsx
import React from 'react';
import { HoloVizCore, ReactAdapter } from 'holoviz-bridge/react';

// Initialize core
const holoVizCore = new HoloVizCore({
  conductorUrl: 'ws://localhost:8888'
});

// Create React adapter
const reactAdapter = new ReactAdapter(holoVizCore);
const { Provider, useHolochainQuery, useHolochainSignal } = reactAdapter;

// React component using Holochain data
function AgentProfile({ agentId }) {
  const [profile, loading, error] = useHolochainQuery({
    zome: 'profiles',
    fn: 'get_profile',
    payload: { agent_id: agentId }
  });
  
  const latestSignal = useHolochainSignal({
    type: 'profile_update',
    agentId
  });
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      {latestSignal && <div>New update: {latestSignal.content}</div>}
    </div>
  );
}

// App with provider
function App() {
  return (
    <Provider>
      <AgentProfile agentId="uhCAkSEsUFZCcszgTKLXZLdGZZz8xmUhNHnzLc7Y5vBXu9j" />
    </Provider>
  );
}
```

## Documentation

For detailed documentation, see:

- [Architecture Overview](./docs/architecture.md)
- [Core Layer API](./docs/core-layer.md)
- [Data Management Layer API](./docs/data-management-layer.md)
- [Interface Layer API](./docs/interface-layer.md)
- [Adapter Layer API](./docs/adapter-layer.md)
- [Developer Tools API](./docs/developer-tools.md)
- [Ecosystem Integration](./docs/ecosystem-integration.md)

## Examples

The `examples` directory contains sample applications demonstrating various use cases:

- [Basic Connection](./examples/basic-connection)
- [Three.js Visualization](./examples/threejs-visualization)
- [React Integration](./examples/react-integration)
- [Vue Integration](./examples/vue-integration)
- [AD4M Integration](./examples/ad4m-integration)
- [Neighbourhoods Integration](./examples/neighbourhoods-integration)


