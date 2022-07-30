<template>
  <Led state="true" size="32" />
  <Led state="false" size="64" />
  <Led :state="state" size="128" />
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

import Led from './components/Led.vue'
import { useTimer } from './composables/timer'

export default defineComponent({
  components: {
    Led,
  },
  setup() {
    const timer = ref(0)
    const state = ref(false)
    onMounted(() => timer.value = setInterval(() => state.value = !state.value, 500))
    onBeforeUnmount(() => { clearInterval(timer.value); state.value = 0 })

    return { state }
  },
})
</script>
