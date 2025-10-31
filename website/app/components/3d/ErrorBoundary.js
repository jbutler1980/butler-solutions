'use client'

import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Scene Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the 3D scene.</div>
    }

    return this.props.children
  }
}
