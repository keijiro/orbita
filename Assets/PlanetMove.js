#pragma strict

var radius = 1.0;
var ecc = 0.3;
var omega = 1.0;
var phi = 0.0;

private var theta = 0.0;

function Update() {
	var r = radius / (1.0 + ecc * Mathf.Cos(theta));

	transform.localPosition.x = r * Mathf.Cos(theta + phi);
	transform.localPosition.y = r * Mathf.Sin(theta + phi);

	theta += omega / (r * r);
}
