#pragma strict

@HideInInspector
var actionCount = 0;

function OnButtonPressed() {
	StartCoroutine(function () {
		var b = 0.5;
		while (b < 1.0) {
			renderer.material.color = Color(b, b, b, 1);
			yield;
			b += Time.deltaTime * 6.0;
		}
		renderer.material.color = Color.white;
	}());
	actionCount++;
}
