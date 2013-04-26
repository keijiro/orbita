#pragma strict

static private var baseNote = 60;
static private var intervals = [0, 2, 4, 7, 9, 11]; // Pentatonic + IIV
static private var globalIndex = 0;

private var osc : FMOscillator;
private var targetVolume = 0.0;
private var realVolume = 0.0;

function Awake() {
	var interval = intervals[globalIndex % intervals.Length];
	var octave = globalIndex / intervals.Length;

	osc = FMOscillator();
	osc.SetNote(baseNote + octave * 12 + interval);

	globalIndex = (globalIndex + 1) % 12;
}

function Update() {
	targetVolume = GetComponent.<PlanetMove>().volume * Globals.r.volume;
}

function OnAudioFilterRead(data : float[], channels : int) {
    for (var i = 0; i < data.Length; i += 2) {
        data[i] = data[i + 1] = osc.Run() * realVolume;
    	realVolume = Mathf.Lerp(realVolume, targetVolume, 0.05);
    }
}
