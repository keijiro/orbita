#pragma strict

var prefab : GameObject;
var spawned = ArrayList();

function SpawnPlanet(screenCoord : Vector3) {
	var z = Mathf.Abs(Camera.main.transform.position.z);
	var pos = Camera.main.ScreenToWorldPoint(Vector3(screenCoord.x, screenCoord.y, z));

	var planet = Instantiate(prefab, pos, Quaternion.identity) as GameObject;
	planet.renderer.material.color = FindObjectOfType(PlanetPalette).PickColor();

	spawned.Add(planet);
}

function RemoveOldestPlanet() {
	if (spawned.Count > 0) {
		(spawned[0] as GameObject).SendMessage("Terminate");
		spawned.RemoveAt(0);
	}
}

function RemoveAllPlanets() {
	for (var planet in spawned) {
		(planet as GameObject).SendMessage("Terminate");
	}
	spawned.Clear();
}
