<template>
  <div class="flex h-12">
    <div
      class="aspect-square h-full rounded-full bg-white"
      @click="cellsStore.step()"
    />
  </div>
</template>

<script setup>
import useCellsStore from "../stores/cellsStore.js"

const cellsStore = useCellsStore()
</script>
