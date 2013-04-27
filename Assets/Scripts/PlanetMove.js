#pragma strict

var radius = 1.0;
var phi = 0.0;

var volume = 0.0;

private var theta = Mathf.PI;
private var decay = 1.0;

function Start() {
	radius = transform.position.magnitude / 2;
	phi = Mathf.Atan2(-transform.position.y, -transform.position.x);
}

function Update() {
	var r = radius / (1.0 + Globals.r.orbitEcc * Mathf.Cos(theta));

	transform.localPosition.x = r * Mathf.Cos(theta + phi);
	transform.localPosition.y = r * Mathf.Sin(theta + phi);

	volume = 0.5 * decay * (1.0 + Mathf.Cos(theta));

	theta += Time.deltaTime * Globals.r.orbitOmega / (r * r);
}

function Terminate() {
	StartCoroutine(function() {
		var trail = GetComponent.<TrailRenderer>();
		while (decay > 0.02) {
			var e = Mathf.Exp(-4.0 * Time.deltaTime);

			decay *= e;
			trail.time *= e;

			transform.localScale = Vector3.one * decay;

			yield;
		}
		Destroy(gameObject);
	}());
}
