#pragma strict

private var alpha = 0.0;
private var deactivated = false;

function Start() {
	while (alpha < 1.0) {
		alpha += Time.deltaTime * 4;
		yield;
	}

	while (!deactivated) yield;

	while (alpha > 0.0) {
		alpha -= Time.deltaTime * 4;
		yield;
	}

	Destroy(gameObject);
}

function Update() {
	transform.localPosition.x = Mathf.Sin(Time.time * 12) * 0.1;
	renderer.material.color.a = Mathf.Clamp01(alpha);
}

function Dismiss() {
	deactivated = true;
}