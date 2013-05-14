#pragma strict

var mode = 0;

function Start() {
	var z = Mathf.Abs(camera.main.transform.position.z);
	if (mode == 0) {
		transform.position += camera.main.ScreenToWorldPoint(Vector3(0, Screen.height, z));
	} else {
		transform.position += camera.main.ScreenToWorldPoint(Vector3(Screen.width, Screen.height, z));
	}
}
