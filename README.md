# React Lifecycle Demo

A React application demonstrating class component lifecycle methods using Vite as the build tool.

## Overview

This demo showcases React class component lifecycle methods with extensive console logging to help visualize when each lifecycle method is called. The application includes two main components that demonstrate different lifecycle behaviors.

## Features

### Components

- **LifeCycleDemo**: Interactive class component demonstrating all major lifecycle methods
  - Click counter with state management
  - Dynamic title props from parent
  - Comprehensive lifecycle method logging
  - Visual component with styled border

- **Clock**: Real-time clock component showing timer-based updates
  - Updates every second using `setInterval`
  - Demonstrates `componentDidMount` and `componentWillUnmount` for cleanup
  - Real-time display of current time

### Interactive Controls

- **Mount/Unmount Toggle**: Show or hide the demo components
- **Update Props**: Modify the title prop to trigger lifecycle methods
- **Edit Title**: Form input to change component title
- **Increment Counter**: Button to update component state

## Lifecycle Methods Demonstrated

- `constructor()`
- `getDerivedStateFromProps()`
- `componentDidMount()`
- `shouldComponentUpdate()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`
- `componentWillUnmount()`
- `render()`

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Usage

1. Open the browser developer console to see lifecycle method logs
2. Use the "Mount Demo"/"Unmount Demo" button to observe mounting/unmounting lifecycle
3. Click "Update Prop: Title" to see prop update lifecycle methods
4. Use the increment button to observe state change lifecycle methods
5. Edit the title input to see controlled component behavior

## Tech Stack

- **React 19.1.1**: Class components with lifecycle methods
- **Vite 7.1.2**: Fast build tool and dev server
- **ESLint**: Code linting with React-specific rules

## Learning Objectives

This demo helps understand:
- React class component lifecycle method execution order
- When each lifecycle method is called
- How props and state changes trigger different lifecycle methods
- Proper cleanup in `componentWillUnmount`
- Real-time updates with timers in React components
