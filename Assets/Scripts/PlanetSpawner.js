#pragma strict

var prefab : GameObject;
var spawned = ArrayList();

var minusButtonTexture : Texture2D;
var minusButtonStyle : GUIStyle;
var emptyButtonStyle : GUIStyle;

private function SpawnPlanet(pos : Vector3) {
	var planet = Instantiate(prefab, pos, Quaternion.identity) as GameObject;
	planet.renderer.material.color = FindObjectOfType(PlanetPalette).PickColor();
	spawned.Add(planet);
}

private function SpawnPlanetAtMousePosition() {
	var pos = Vector3(Input.mousePosition.x, Input.mousePosition.y, Mathf.Abs(Camera.main.transform.position.z));
	SpawnPlanet(Camera.main.ScreenToWorldPoint(pos));
}

function OnGUI() {
	if (GUI.Button(Rect(32, 32, 32, 32), minusButtonTexture, minusButtonStyle)) {
		if (spawned.Count > 0) {
			(spawned[0] as GameObject).SendMessage("Terminate");
			spawned.RemoveAt(0);
		}
	}
	if (GUI.Button(Rect(0, 0, Screen.width, Screen.height), "", emptyButtonStyle)) {
		SpawnPlanetAtMousePosition();
	}
}
