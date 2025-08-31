<template>
  <main class="min-h-screen relative">
    <hero />
    <github />
    <section
      class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col gap-6"
    >
      <div class="w-full flex bg-gray-200 h-10 rounded">
        <a
          href="/"
          class="grow flex place-items-center place-content-center text-base rounded-l sm:text-lg hover:bg-black/5"
          ><span>Released</span></a
        >
        <a
          href="#"
          class="grow flex place-items-center place-content-center text-base rounded-r sm:text-lg hover:bg-black/5"
          ><span>In Progress</span></a
        >
        <a
          href="/planned"
          class="grow flex place-items-center place-content-center text-base rounded-r sm:text-lg text-white bg-black/40 hover:bg-black/45 border-b-2 border-black"
          ><span>Planned</span></a
        >
      </div>
      <div class="pt-16">
        <post v-for="post in data" :content="post" />
      </div>
    </section>
  </main>
</template>

<script setup>
import seoConfig from "../seoConfig/index";
useHead({
  title: seoConfig.title,
  meta: [
    {
      name: "description",
      content: seoConfig.description,
      meta: [
        { name: "og:title", content: seoConfig.og.title },
        { name: "og:description", content: seoConfig.og.description },
        { name: "og:image", content: seoConfig.og.image },
        { name: "og:url", content: seoConfig.og.url },
        { name: "twitter:title", content: seoConfig.og.title },
        { name: "twitter:description", content: seoConfig.og.description },
        { name: "twitter:image", content: seoConfig.og.image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  ],
});
const { data } = await useAsyncData("feed", () =>
  queryContent("/planned").sort({ order: 1 }).find()
);
</script>
