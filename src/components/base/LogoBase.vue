<template>
  <svg
    :class="size"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name" lang="en">{{ name }} Logo</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts" setup>
  defineProps({
    size: {
      type: String,
      default: 'w-24 h-24',
    },
    name: {
      type: String,
      default: 'Cosme Gressier',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  })
</script>
