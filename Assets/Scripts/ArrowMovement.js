#pragma strict

function Start() {
	var alpha = 0.0;
	while (alpha < 1.0) {
		alpha = Mathf.Min(1.0, alpha + Time.deltaTime * 4);
		renderer.material.color.a = alpha;
		yield;
	}
}

function Update() {
	transform.localPosition.x = Mathf.Sin(Time.time * 4.5) * 0.2;
}