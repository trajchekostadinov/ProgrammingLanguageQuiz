import { ref, onUnmounted } from 'vue'

export function useTimer(seconds, onExpire) {
  const timeLeft = ref(seconds)
  let intervalId = null

  function start() {
    stop()
    timeLeft.value = seconds
    intervalId = setInterval(() => {
      timeLeft.value -= 1
      if (timeLeft.value <= 0) {
        stop()
        onExpire && onExpire()
      }
    }, 1000)
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  onUnmounted(stop)

  return { timeLeft, start, stop }
}
