#pragma strict

static var r : Globals;

@Range(0.0, 1.0)
var volume = 0.5;

@Range(0.0, 1.0)
var orbitEcc = 0.5;

@Range(0.0, 120.0)
var orbitOmega = 60.0;

@Range(0.2, 32.0)
var fmMultiplier = 16.0;

@Range(0.0, 1.0)
var fmModulation = 0.005;

function Awake() {
	r = this;
}

function Update() {
	FMOscillator.multiplier = fmMultiplier;
	FMOscillator.modulation = fmModulation;
}
