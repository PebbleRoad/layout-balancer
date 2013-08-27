# Layout Balancer

### Demo

[http://pebbleroad.github.io/layout-balancer/build/](http://pebbleroad.github.io/layout-balancer/build/)

## Key features Features: 

* Different interface options
* Responsive design

## What it is
A small jquery plugin will ensure that you don't have 'empty boxes' in gallery views. It works well on text and image galleries.

## Why use it

You spend time in ensuring that your gallery interface is always aligned. You hope it will remain this way even when new items are added. Alas, this is not always the case. Unless you diligently add only rows of items you will have empty boxes. These empty boxes spoil your delicately designed interface. This javascript code stretches the primary element (the recently added item) to occupy multiple columns thereby keeping the items in alignment.

## How to use it

### 1. Add your gallery html markup


	<ul class="grids balancer">
	  <li>
	    <h4>Lorem ipsum dolor sit amet</h4>
	    <p><img src="http://placehold.it/960x411" alt=""></p>
	    <p>Lorem ipsum dolor sit amet</p>
	  </li>
	  <li>
	    <h4>Lorem ipsum dolor sit amet</h4>
	    <p><img src="http://placehold.it/960x411" alt=""></p>
	    <p>Lorem ipsum dolor sit amet</p>
	  </li>
	  <li>
	    <h4>Lorem ipsum dolor sit amet</h4>
	    <p><img src="http://placehold.it/350x150" alt=""></p>
	    <p>Lorem ipsum dolor sit amet</p>
	  </li>
	  <li>
	    <h4>Lorem ipsum dolor sit amet</h4>
	    <p><img src="http://placehold.it/350x150" alt=""></p>
	    <p>Lorem ipsum dolor sit amet</p>
	  </li>
	</ul>


### 2. Initialize the plugin


	<script src="bower_components/jquery/jquery.js"></script> // jQuery library
	<script src="scripts/jquery.layout.balancer.js"></script>
	<script>
		$(document).ready(function(){

			$('.balancer').layoutBalancer({
				columns: 3 /* Number of columns in the gallery */
			});
			
		});
	</script>

