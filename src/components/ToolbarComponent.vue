<template>
  <div class="flex h-10">
    <div
      class="flex aspect-square h-full items-center justify-center rounded-full bg-white text-green-700"
      @click="cellsStore.step()"
    >
      <v-icon name="fa-play" />
    </div>
  </div>
</template>

<script setup>
import useCellsStore from "../stores/cellsStore.js"

const cellsStore = useCellsStore()
</script>
