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
    <li v-for="(post, index) in posts" :key="index">
        <a :href="post.url.replace(/^\/posts\/[0-9]+\/[0-9]+\//g, '/posts/')">
            {{ post.frontmatter.emoji }} {{ post.frontmatter.title }} - {{ post.frontmatter.date }}
        </a>
    </li>
</ul>
