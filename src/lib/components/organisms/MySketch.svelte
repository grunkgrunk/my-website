<script lang="ts">
	import P5 from 'p5-svelte/P5.svelte';
	import Sketch from 'p5-svelte/P5.svelte';

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(p5.windowWidth, p5.windowHeight);
			p5.noStroke();
			p5.fill('#000000');
		};

		p5.draw = () => {
			p5.background(255, 255, 255, 0);
			for (let i = 0; i < p5.width / 100; i++) {
				for (let j = 0; j < p5.height / 100; j++) {
					p5.push()
					p5.translate(i * 100 + 25, j * 100 + 25);
					p5.rect(0, 0, 50, 50);
					p5.pop();
				}
			}
		};
	};
</script>

<P5 {sketch} />
