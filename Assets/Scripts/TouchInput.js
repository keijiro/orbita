#pragma strict

function Update() {
#if (UNITY_IPHONE || UNITY_ANDROID) && !UNITY_EDITOR
	for (var touch in Input.touches) {
		if (touch.phase == TouchPhase.Began) {
			DoTouch(touch.position);
		}
	}
#else
	if (Input.GetMouseButtonDown(0)) {
		DoTouch(Input.mousePosition);
	}
#endif
}

private function DoTouch(screenCoord : Vector3) {
	var spawner = FindObjectOfType(PlanetSpawner);

	var ray = Camera.main.ScreenPointToRay(screenCoord);
	var hit : RaycastHit;
	if (Physics.Raycast(ray, hit) && hit.collider) {
		if (hit.collider.name == "Erase Button") {
			spawner.RemoveOldestPlanet();
			return;
		}
	}

	spawner.SpawnPlanet(screenCoord);
}
