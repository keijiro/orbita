#pragma strict

var variation = 32;
var luma = 0.2;

private static var index = 0;

function PickColor() {
	var x = 6.0 * index / variation;
	if (++index >= variation) index = 0;
	var color = Color(
		Mathf.Clamp01(Mathf.Abs(3.0 - x) - 1.0),
		Mathf.Clamp01(2.0 - Mathf.Abs(2.0 - x)),
		Mathf.Clamp01(2.0 - Mathf.Abs(4.0 - x))
	);
	return Color.Lerp(color, Color.white, luma);
}
