<template>
  <div class="flex h-10 gap-2">
    <!-- Play -->
    <ButtonComponent @click="togglePlaying">
      <v-icon :name="timer ? 'fa-pause' : 'fa-play'" />
    </ButtonComponent>
    <!-- Speed -->
    <ButtonComponent class="select-none" @click="toggleSpeed">
      {{ speedOptions[speedIndex] }}x
    </ButtonComponent>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import useCellsStore from "../stores/cellsStore.js"
import ButtonComponent from "./ButtonComponent.vue"

const cellsStore = useCellsStore()
const speedOptions = [0, 1, 2, 4, 8, 16, 32]
const baseSpeed = 1024
const speedIndex = ref(1)
const timer = ref(false)

/**
 * Start or restart the loop with the current speed. A speed of 0 means the loop
 * is stopped after a single step. If 'start' is false, the loop is stopped.
 */
function loop(start) {
  clearInterval(timer.value)
  if (start === false) {
    timer.value = false
  } else if (speedIndex.value === 0) {
    cellsStore.step()
    timer.value = false
  } else {
    cellsStore.step()
    timer.value = setInterval(
      cellsStore.step,
      baseSpeed / speedOptions[speedIndex.value],
    )
  }
}

function togglePlaying() {
  if (!timer.value) {
    loop()
  } else {
    loop(false)
  }
}

function toggleSpeed() {
  speedIndex.value = (speedIndex.value + 1) % speedOptions.length
  if (timer.value) {
    loop()
  }
}

/**
 * Stop the loop when the cells don't change anymore
 */
watch([timer, () => cellsStore.stale], ([timer, stale]) => {
  if (timer && stale) loop(false)
})
</script>
