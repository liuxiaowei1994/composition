import { getCurrentInstance, onBeforeUnmount } from 'vue'
import { Fn } from '../utils'

/**
 * Call onBeforeUnmount() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 */
export function tryOnBeforeUnmount(fn: Fn) {
  if (getCurrentInstance())
    onBeforeUnmount(fn)
}
