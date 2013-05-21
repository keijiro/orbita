#pragma strict

var weight = 5.0;
var speed = 4.0;

static var volume = 0.0;

private var spawner : PlanetSpawner;
private var amplifier = 1.0;

function Start() {
	spawner = FindObjectOfType(PlanetSpawner);
}

function Update() {
	var target = Mathf.Clamp01(weight / (spawner.spawned.Count + weight));
	amplifier = Mathf.Exp(-speed * Time.deltaTime) * (amplifier - target) + target;
	volume = Globals.r.volume * amplifier;
}
