<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex border-b border-r border-gray-700">
      <div v-for="i in SIZE" :key="`i${i}`">
        <div
          v-for="j in SIZE"
          :key="`j${j}`"
          class="size-10 border-l border-t border-gray-700"
          :class="getCell(i, j) ? 'bg-gray-500' : ''"
          @click="onCellClicked(i, j)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import useCellsStore from "../stores/cellsStore.js"

const cellsStore = useCellsStore()
const SIZE = 25

function getCell(i, j) {
  return cellsStore.active.has(cellsStore.getIndex(i, j))
}

function onCellClicked(i, j) {
  cellsStore.toggle(i, j)
}
</script>
