#pragma strict

var prefab : GameObject;

private function SpawnPlanet(pos : Vector3) {
	Instantiate(prefab, pos, Quaternion.identity);
}

function Update() {
	if (Input.GetMouseButtonDown(0)) {
		var pos = Vector3(Input.mousePosition.x, Input.mousePosition.y, Mathf.Abs(Camera.main.transform.position.z));
		SpawnPlanet(Camera.main.ScreenToWorldPoint(pos));
	}
}
