$(function () {
	$("input").checkboxradio({
		icon: false,
	})

	let value = $('input[name="radio-1"]:checked').attr("value")

	$('input[name="radio-1"]').change(function () {
		value = $(this).attr("value")
	})

	const hexFromRGB = (r, g, b) => {
		let hex = [r.toString(16), g.toString(16), b.toString(16)]
		$.each(hex, function (nr, val) {
			if (val.length === 1) {
				hex[nr] = "0" + val
			}
		})
		return hex.join("").toUpperCase()
	}

	const refreshSwatch = (value) => {
		let red = $("#red").slider("value"),
			green = $("#green").slider("value"),
			blue = $("#blue").slider("value"),
			hex = hexFromRGB(red, green, blue)
		$("#swatch").css(value, "#" + hex)
	}

	$("#red, #green, #blue").slider({
		orientation: "horizontal",
		range: "min",
		max: 255,
		value: 127,
		slide: () => refreshSwatch(value),
		change: () => refreshSwatch(value),
	})
	$("#red").slider("value", 255)
	$("#green").slider("value", 140)
	$("#blue").slider("value", 60)
})
