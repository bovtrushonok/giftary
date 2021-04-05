/// <reference types="react-scripts" />

interface RefObject<T> {
  readonly current: T | null
}

export function createRef<T>(): RefObject<T>
