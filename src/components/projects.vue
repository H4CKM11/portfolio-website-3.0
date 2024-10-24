<template>
    <div class="flex w-full bg-white rounded-xl p-6 shadow-md flex-col">
        <div class="flex items-center gap-2">
            <font-awesome-icon :icon="icon" />
            <slot name="title"></slot>
        </div>
        <div class="px-4 py-2">
            <slot name="content"></slot>
        </div>
    </div>
</template>



<script setup lang="ts">
import { computed } from 'vue';

// Define the props directly
const props = defineProps<{
    type: 'frontend' | 'backend' | 'fullstack';
}>();

// Compute the icon based on the `type` prop
const icon = computed(() => {
    switch (props.type) {
        case 'frontend':
            return ['fas', 'desktop'];
        case 'backend':
            return ['fas', 'server'];
        case 'fullstack':
            return ['fas', 'laptop-code'];
        default:
            return ['fas', 'question']; // Fallback icon
    }
});
</script>