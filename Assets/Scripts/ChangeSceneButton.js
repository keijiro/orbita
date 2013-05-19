#pragma strict

function OnButtonPressed() {
	FindObjectOfType(PlanetSpawner).RemoveAllPlanets();
	Globals.r.ChangeScene();
}
