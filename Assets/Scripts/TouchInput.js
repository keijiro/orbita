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
	var ray = Camera.main.ScreenPointToRay(screenCoord);
	var hit : RaycastHit;
	if (Physics.Raycast(ray, hit) && hit.collider && hit.collider.gameObject.tag == "Button") {
		hit.collider.gameObject.SendMessage("OnButtonPressed");
		return;
	}

	FindObjectOfType(PlanetSpawner).SpawnPlanet(screenCoord);
}
