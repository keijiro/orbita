#pragma strict

var colors : Color[];

function Update() {
	var target = colors[Globals.r.sceneIndex];
	var e = Mathf.Exp(-4.0 * Time.deltaTime);
	renderer.material.color = Color.Lerp(target, renderer.material.color, e);
}
