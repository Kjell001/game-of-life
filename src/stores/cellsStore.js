import { defineStore } from "pinia"

const F = 1000
const NEIGHBOURS = [-F - 1, -F, -F + 1, -1, 1, F - 1, F, F + 1]

export default defineStore("cellsStore", {
  state: () => ({
    active: new Set(),
    stale: true,
  }),
  actions: {
    getIndex(i, j) {
      return i * F + j
    },
    toggle(i, j) {
      const index = this.getIndex(i, j)
      if (this.active.has(index)) {
        this.active.delete(index)
      } else {
        this.active.add(index)
        this.stale = false
      }
    },
    step() {
      // Count the number of neighbours for each cell
      const counts = {}
      for (const index of this.active) {
        for (const offset of NEIGHBOURS) {
          const neighbour = index + offset
          counts[neighbour] = (counts[neighbour] || 0) + 1
        }
      }
      // Populate new set of active cells
      const previous = new Set(this.active)
      this.active.clear()
      let stale = true
      for (const [index, count] of Object.entries(counts)) {
        const occupied = previous.has(parseInt(index))
        if (count === 3 || (count === 2 && occupied)) {
          this.active.add(parseInt(index))
          stale = stale && occupied
        }
      }
      this.stale = stale
    },
  },
})
