# Holochain Ecosystem Projects Compatibility Research

This document outlines the compatibility requirements and integration approaches for the HoloViz Bridge library with existing Holochain ecosystem projects.

## 1. AD4M & Flux

### Overview
AD4M (Agent-centric Distributed Application Meta-ontology) is a distributed application framework and social network engine that extends Holochain's agent-centric philosophy and architecture into a spanning-layer that can work with different storage backends.

### Key Concepts
- **Agents**: Users represented by their self-sovereign identity through cryptographic keys, referenced by DID URIs.
- **Languages**: Tools agents use to exchange (objective) expressions. Languages define expression syntax and are components that store expressions.
- **Perspectives**: Subjective, semantic layers that serve as the main interface for interaction with shared data.
- **Social Contexts**: Digital spaces in which users communicate complex meaning, modeled as shared or overlapping Perspectives.
- **Neighbourhoods**: AD4M's term for shared perspectives.

### Integration Approach
1. **Language Compatibility**: Every Holochain DHT can be treated as an AD4M Language with a bit of wrapping JS code. The HoloViz Bridge should provide adapters that implement the Language interface for visualization data.

2. **Expression Addressing**: AD4M uses URI standard with Language source code hashes as the schema. HoloViz Bridge should support this addressing scheme for referencing visualization data across different Languages.

3. **Perspective Integration**: HoloViz Bridge should provide components that can be integrated into AD4M Perspectives, allowing visualization data to be part of the subjective semantic layer.

4. **Flux Compatibility**: As Flux is built on AD4M, ensuring compatibility with AD4M's architecture will enable integration with Flux applications.

## 2. Neighbourhoods

### Overview
Neighbourhoods is a design philosophy for Holochain hApps that aims to evolve "platforms" and "DAOs", pointing the way forward for group organizing on the distributed web. Neighbourhoods are formed around the Social Sensemaker.

### Key Concepts
- **Social Sensemaker**: Helps communities engage with each other while preserving their unique group culture.
- **Memetic Mediation**: Allows information to be shared across groups without requiring consensus or universal governance frameworks.
- **Cultural Lenses**: Define Neighbourhoods by determining which behaviors matter for different purposes.
- **Memetic Bridges**: Connections between Neighbourhoods that allow reputation and data to be translated from one context to another.

### Integration Approach
1. **Social Sensemaker Compatibility**: HoloViz Bridge should provide visualization components that can be integrated with the Social Sensemaker, allowing communities to visualize and make sense of their data.

2. **Widget Integration**: Neighbourhoods allows community activators to choose modules and widget-sized code blocks from the Neighbourhoods Bazaar. HoloViz Bridge should provide visualization widgets that can be added to the Bazaar.

3. **Context-Sensitive Visualization**: Support for cultural lenses in visualizations, allowing data to be presented according to what matters to specific communities.

4. **Memetic Bridge Support**: Enable visualizations to be translated across different Neighbourhoods contexts, preserving meaning while adapting to different cultural premises.

## 3. Unyt

### Overview
Based on limited information, Unyt appears to be an organization building HFV2 (likely Holo Fuel Version 2) and is part of the Holochain ecosystem.

### Integration Approach
Without detailed information, a general approach would be:

1. **Holo Fuel Visualization**: Provide specialized visualization components for Holo Fuel transactions and economics.

2. **HFV2 Compatibility**: Ensure the HoloViz Bridge can adapt to the new version of Holo Fuel when it becomes available.

## 4. Common Integration Requirements

Across all ecosystem projects, the following common requirements emerge:

### 1. Framework Agnosticism
All ecosystem projects benefit from a truly framework-agnostic approach that allows integration with any frontend technology.

### 2. Agent-Centric Design
Maintain alignment with Holochain's agent-centric philosophy, ensuring visualizations respect and enhance user agency.

### 3. Interoperability
Support seamless data exchange between different projects through standardized interfaces and data formats.

### 4. Context Preservation
Ensure that contextual information is preserved when visualizing data from different sources or communities.

### 5. Modular Architecture
Provide components that can be used independently or combined, allowing for flexible integration with existing projects.

### 6. WebSocket Communication
Support real-time updates through WebSocket connections to Holochain conductors.

### 7. URI-Based Addressing
Implement support for URI-based addressing schemes used by ecosystem projects for referencing data.

## 5. Technical Integration Approaches

### 1. Adapter Pattern
Implement adapters for each ecosystem project that translate between their data models and the HoloViz Bridge's internal representation.

### 2. Event Bridge
Create an event system that can translate between Holochain signals and visualization events, with filtering and transformation capabilities.

### 3. Data Synchronization
Implement selective synchronization strategies that minimize network traffic while keeping visualizations up-to-date.

### 4. Interface Contracts
Define clear interface contracts that ecosystem projects can implement to integrate with the HoloViz Bridge.

### 5. Reference Implementations
Provide reference implementations for common integration scenarios with each ecosystem project.

## 6. Next Steps

1. **Develop Detailed Integration Specifications**: Create detailed technical specifications for integration with each ecosystem project.

2. **Prioritize Integration Components**: Determine which integration components should be developed first based on ecosystem needs.

3. **Create Proof-of-Concept Integrations**: Develop simple proof-of-concept integrations with each ecosystem project to validate the approach.

4. **Engage with Project Communities**: Reach out to the communities of each ecosystem project to gather feedback on integration approaches.

5. **Refine Architecture Based on Findings**: Update the HoloViz Bridge architecture to better accommodate the requirements of ecosystem projects.
