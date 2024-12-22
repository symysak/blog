---
title: ブログ一覧
emoji: 📋
date: 2024/12/23
---

<script lang="ts" setup>
    import { data } from "../../.vitepress/posts.data.mts";
    const posts = [...data].reverse().slice(1);
</script>

# Posts

ブログ一覧

<ul>
    <li v-for="(entry, index) in posts" :key="index">
        <a :href="entry.url">
            {{ entry.frontmatter.emoji }} {{ entry.frontmatter.title }} - {{ entry.frontmatter.date }}
        </a>
    </li>
</ul>
