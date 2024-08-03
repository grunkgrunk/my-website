---
slug: sunflowers
title: Sunflowers!
date: 2023-04-22T21:55:21.800Z
excerpt: Sunflowers, sunflowers, sunflowers!!
coverImage: /images/posts/sunflowers_0.gif
tags:
  - procedural
  - pico8
---

<script>
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
	import Image from '$lib/components/atoms/Image.svelte';
</script>

I have always loved sunflowers. So when I announced this to one of my friends he replied,

*"I'm scared of sunflowers, they are tall and disgusting and it looks like they will fall down and attack you from above".*

I thought he was joking. So I went home and made him a little program of procedurally generated sunflowers using [PICO-8](https://www.lexaloffle.com/pico-8.php). 

<Image src=/images/posts/sunflowers_0.gif />

Unfortunately not even digital sunflowers could convince him that these flowers are amazing. I quite like them, so now I'm using them as my profile picture on Github. If you want to run this little program you can find it on [BBS](https://www.lexaloffle.com/bbs/?pid=45641). It's written using closures and you can find the code below. To give a simple overview of what is going on, the ``sunfl`` function returns a function ``f`` which when called has two effects:

- It updates the state within ``f`` (this is what makes the sunflower grow)
- It renders the sunflower.

It would probably be easier to just use tables instead but I wanted to experiment a bit with closures. Here is the code.

<CodeBlock lang="lua">

````lua
function sunfl()
	-- petal vars
	local n=0
	local const=rnd()+0.5
	local ang=360/137.5
	local maxrad = rnd()*3+3
	local r=0
	local a=0
	local pet =0.5+rnd()/2
	local npets = flr(rnd()*10)+15
	local madecenter=false
	
	-- root vars
	local root = {4,3,3,11,3,3}
	local miny = rnd()*80+10 
	local cx,cy = 
	(rnd()-0.5)*128+64,128-8

	local rooti= 0
	local growspd = 0.001
	
	local function makeroot()
		for i=1,50 do
			if rnd() > 0.999 then
				rooti+=1
			end
			local r = -flr(rnd(3))+3+rooti
			if r < 0 then
				r = 1
			end 
			if r > #root then
				r = #root
			end
			
			cy-=growspd
			cx =cx+(rnd()-0.5)
			pset(cx,cy,root[r])
			growspd += 0.0001
			if growspd > 0.1 then
				gridspd = 0.1
			end
			
			if cy < 120 and rnd()<0.01 then
				d = sgn(rnd()-0.5)
				local x,y = cx,cy
				for j=1,rnd(5)+5 do
					 x+=rnd()*d
					 y+=(rnd()-0.8)
					 pset(x,y,11)
				end
			end
		end
	end
	
	local function inner()
		if not madecenter then
			circfill(cx,cy,maxrad+1,0)
			madecenter=true
		end
		a=(n*ang)%1
		r=const*sqrt(n)
		local x,y=
		cos(a)*r+cx,
		sin(a)*r+cy
		pset(x,y,4)
		n+=1
	end
	
	local function outer() 
		local ps=pet*rnd()
		local osc=(sin(a*npets)+2)*ps
		if(osc<1)osc=1
		local x,y=
		cos(a)*maxrad*osc,
		sin(a)*maxrad*osc
		local c = 9
		if rnd()>0.6 then
			c=10
		end
		pset(x+cx,y+cy,c)
		a+= 0.01
	end 
	
	return function()
		local fn = nil
		if cy > miny then
			makeroot()
		else
			for i=1,50 do
        if(r<maxrad)then
          inner()
        else
          outer()
        end
			end
		end
	end
end


function reset() 
	fls = {}
	for i=1,10 do
		fls[#fls+1]=sunfl()
	end
end

started=false
map(0,0,0,0,16,16)
function _draw()
	if btn(5) then 
		if(not started)started=true
		reset()
	end
	if btn(4) then
		map(0,0,0,0,16,16)
		fls={}
	end
	if(not started)return
	for f in all(fls) do
		-- vary the speed of flowers
		if rnd()>0.2 then
			f()
		end
	end 
end
````

</CodeBlock>
