#pragma strict

function OnButtonPressed() {
	FindObjectOfType(PlanetSpawner).RemoveOldestPlanet();
}
