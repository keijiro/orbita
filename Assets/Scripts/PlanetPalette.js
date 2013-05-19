#pragma strict

var luma = 0.2;

function PickColor() {
	var x = 6.0 * Globals.r.planetIndex / Globals.r.planetVariation;
	var color = Color(
		Mathf.Clamp01(Mathf.Abs(3.0 - x) - 1.0),
		Mathf.Clamp01(2.0 - Mathf.Abs(2.0 - x)),
		Mathf.Clamp01(2.0 - Mathf.Abs(4.0 - x))
	);
	return Color.Lerp(color, Color.white, luma);
}
