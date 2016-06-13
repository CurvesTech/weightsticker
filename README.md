# PollResult

Show poll result in a stripe of colors with the poll options and the weights of each poll selected as the size of each stripe with tooltips with actual values.

## Dependencies
1. Bootstrap
2. JQuery

If you use bower you can simple load them with a bower install command.

## How to use

In your <head> add the following css
```
<link rel="stylesheet" type="text/css" href="css/weightsticker.css">
```

and after your jquery and bootstrap js add the following js
```
<script src="js/weightsticker.js"></script>
```

In your HTML use it like this:
```
<div class="ws">
	<input class="ws-input" type="hidden" data-option="1" data-value="7">
	<input class="ws-input" type="hidden" data-option="2" data-value="9">
	<input class="ws-input" type="hidden" data-option="3" data-value="2">
	<input class="ws-input" type="hidden" data-option="4" data-value="20">
	<input class="ws-input" type="hidden" data-option="5" data-value="12">
</div>
```
