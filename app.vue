<script setup lang="ts">
import { useStore } from "vuex"
const store = useStore()
const count = computed(() => store.state.count)

// This will be called twice and cause hydration mismatches
// await store.dispatch('fetchCount')

// This is safe
const { data } = await useAsyncStore('fetchCount')
console.log(data.value)
</script>

<template>
  <div>
    <p>
      {{ count }}
    </p>
  </div>
</template>
