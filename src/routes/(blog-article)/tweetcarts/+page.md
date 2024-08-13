---
title: Tweetcarts
slug: tweetcarts
coverImage: /images/posts/tweetcarts/mandelbrot_0.gif
date: 2024-07-31T21:55:15.361Z
excerpt: My current collection of tweetcarts.
tags:
  - pico8
  - lua
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
  import Tweetcarts from "$lib/components/organisms/Tweetcarts.svelte";
</script>

You might have heard of [PICO-8](https://www.lexaloffle.com/pico-8.php). If not, it essentially emulates a fictive computer from way back and this computer has all the software installed needed to make games, music and visualizations. It also has pretty crappy specs. It is purposefully slow, has a resolution of 128x128 pixels and a palette of only 16 colors. So when you write a program with this thing you are quite restricted in what you can do. I actually quite like this because it forces me to think more creatively. A tweetcart is a program written using PICO-8 that can fit into a single tweet. On this page you can see some of the tweetcarts I have made.

## Gallery

You can click on any of these to see the corresponding post i made on Twitter. There you can also see the code. 
<Tweetcarts />

## General tips

Whenever I start a new tweetcart I tend to not care about the number of characters I have used. That way I can focus on just creating whatever I want to create. Once I'm happy with what I have I iteratively make the code shorter, running the program every now and then to make sure everything still works. Here are some things that I do to make the program shorter:

- Rename all variable names to single letter names.
- Remove all whitespace whenever possible.
- Use single line if statements rather than the ``if ... then ... end`` construct. This is something you can't do in vanilla `lua`.
- Use ``goto _`` rather than ``function _update() ... end``.
- Use ?"text",x,y,color instead of ``print("text",x,y,color)``.
- Check the colors of pixels to do collision detection.
- Save a few characters on numbers if you can. For example if you have ``x=100`` can you instead get away with ``x=99``?

