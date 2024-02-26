<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex border-b border-r border-gray-700">
      <div v-for="i in SIZE" :key="`i${i}`">
        <div
          v-for="j in SIZE"
          :key="`j${j}`"
          class="size-10 border-l border-t border-gray-700"
          :class="getCell(i, j) ? 'bg-gray-700' : ''"
          @click="onCellClicked(i, j)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const SIZE = 25

const active = ref(new Set())

function getIndex(i, j) {
  return i * SIZE + j
}

function getCell(i, j) {
  return active.value.has(getIndex(i, j))
}

function toggle(i, j) {
  const index = getIndex(i, j)
  if (active.value.has(index)) {
    active.value.delete(index)
  } else {
    active.value.add(index)
  }
}

function onCellClicked(i, j) {
  toggle(i, j)
}
</script>
