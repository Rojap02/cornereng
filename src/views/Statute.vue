<script setup lang="ts">
import "@/assets/styles/statute-style.css";

import { marked } from "marked";
import statute from "@/content/statute.md?raw";

const statuteHtml = marked.parse(statute);
</script>

<template>
    <main class="statute-full">
        <div
            class="statute-container"
            v-html="statuteHtml"
        ></div>
    </main> 
</template>