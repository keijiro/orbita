#pragma strict

var normalizedOffset = Vector2.zero;

function Start() {
	transform.position += camera.main.ScreenToWorldPoint(Vector3(
		normalizedOffset.x * Screen.width,
		normalizedOffset.y * Screen.height,
		Mathf.Abs(camera.main.transform.position.z)
	));
}
