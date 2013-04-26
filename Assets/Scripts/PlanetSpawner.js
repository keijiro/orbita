#pragma strict

var prefab : GameObject;

private function SpawnPlanet(pos : Vector3) {
	return Instantiate(prefab, pos, Quaternion.identity) as GameObject;
}

function Start() {
	var palette = FindObjectOfType(PlanetPalette);

	while (true) {
		if (Input.GetMouseButtonDown(0)) {
			var pos = Vector3(Input.mousePosition.x, Input.mousePosition.y, Mathf.Abs(Camera.main.transform.position.z));
			var planet = SpawnPlanet(Camera.main.ScreenToWorldPoint(pos));
			planet.renderer.material.color = palette.PickColor();
		}
		yield;
	}
}
