import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Simple composable that makes it easy to run code in intervals
 */
export function useTimer(cb) {
  const timer = ref(0)
  const state = ref(false)

  const start = (interval = 500) => {
    stop()
    timer.value = setInterval(cb, interval)
  }

  const stop = () => {
    if (timer.value) {
      clearInterval(timer.value)
      timer.value = null
    }
  }

  onMounted(start)
  onBeforeUnmount(stop)

  return { state, start, stop }
}
