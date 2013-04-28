#pragma strict

function Start() {
	var z = Mathf.Abs(camera.main.transform.position.z);
	transform.position += camera.main.ScreenToWorldPoint(Vector3(0, Screen.height, z));
}
