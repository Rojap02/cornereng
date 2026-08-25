<script setup lang="ts">
import "@/assets/styles/privacy-policy-style.css";

import { marked } from "marked";
import privacyPolicy from "@/content/privacy-policy.md?raw";

const privacyPolicyHtml = marked.parse(privacyPolicy);
</script>

<template>
    <main class="privacy-policy">
        <div
            class="privacy-policy-container"
            v-html="privacyPolicyHtml"
        ></div>
    </main>
</template>