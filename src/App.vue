<template>
    <metainfo>
        <template #title="{ content }">
            {{ content ? `${content} | ${siteName}` : siteName }}
        </template>
    </metainfo>
    <router-view />
</template>

<script setup>
import { useMeta } from 'vue-meta'

const siteName = 'More'

useMeta({
    title: '',
    htmlAttrs: { lang: 'en', amp: true },
})
</script>
