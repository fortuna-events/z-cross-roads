<script setup lang="ts">
import { ref, onMounted, onBeforeMount, watch, onUpdated } from "vue";
import type { Page } from "@/interfaces";
import { DEFAULT_PAGE, SAMPLE_DATA } from "./constants";
import { parsePage } from "./lib/parser";
import { decodeData, encodeDataToUrl } from "./lib/encoder";
import { updateIcons } from "./lib/icons";
import ZEditor from "./ZEditor.vue";

const visible = ref<boolean>(false);
const debug = ref<boolean>(true);
const debugData = ref<string>(SAMPLE_DATA);
const debugUrl = ref<string>("");
const parsed = ref<Page>(DEFAULT_PAGE);

function dataChanged(value: string) {
    parsed.value = parsePage(value);
    debugUrl.value = encodeDataToUrl(value);
}

onBeforeMount(() => {
    const url = new URL(window.location.href);

    if (url.searchParams.get("z") !== null) {
        debugData.value = decodeData(url.searchParams.get("z") ?? "");
        parsed.value = parsePage(debugData.value);
        debug.value = parsed.value.error !== null;
    }

    if (debug.value) {
        dataChanged(debugData.value);
    }
});

onMounted(() => {
    setTimeout(() => {
        visible.value = true;
    });
    updateIcons();
});

onUpdated(updateIcons);

watch(debugData, dataChanged);
</script>

<template>
    <main :style="{ display: visible ? 'inherit' : 'none' }">
        <div v-if="debug">
            <h1>
                <i icon="signpost-big"></i>
                Cross-Roads
            </h1>
            <ZEditor v-model="debugData" :parsed="parsed"></ZEditor>
            <a
                v-if="debugUrl && parsed.error === null"
                :href="debugUrl"
                target="_blank"
            >
                <i icon="link"></i>
                Output link
            </a>
            <br />
            <br />
            <hr />
        </div>
        <div class="header" v-html="parsed.header"></div>
        <a
            v-for="(link, i) in parsed.links"
            :key="`link-${i}`"
            :href="link.href"
            class="button"
            :class="link.color"
            target="_blank"
            v-html="link.label"
        ></a>
    </main>
</template>

<style scoped>
.header {
    margin: 2em 0 1rem;
}
</style>
