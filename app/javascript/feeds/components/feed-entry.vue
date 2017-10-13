<template>
  <article class="uk-article">
    <h1 class="uk-article-title">
      <a target="_blank" class="uk-link-text" :href="feedEntry.link">
        {{ feedEntry.title }}
      </a>
    </h1>
    <p class="uk-article-meta">{{ feedEntry.date | date('LLL') }}</p>
    <div class="summary" v-html="feedEntry.summary"></div>
  </article>
</template>

<script>
export default {
  props: ['feedEntry']
}
</script>
