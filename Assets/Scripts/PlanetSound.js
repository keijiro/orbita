#pragma strict

static private var baseNote = 60;
static private var clipLength = 2;

static private var intervals = [0, 2, 4, 7, 9, 11]; // Pentatonic + IIV

static private var globalIndex = 0;

private var osc : Oscillator;

function Awake() {
	var interval = intervals[globalIndex % intervals.Length];
	var octave = globalIndex / intervals.Length;

	osc = Oscillator();
	osc.SetNote(baseNote + octave * 12 + interval);

	globalIndex = (globalIndex + 1) % 12;
}

function Start() {
	audio.clip = AudioClip.Create("(null)", 0xfffffff, 1, SynthConfig.kSampleRate, false, true, OnAudioRead);
	audio.volume = 0;
    audio.Play();
}

function OnAudioRead(data:float[]) {
    for (var i = 0; i < data.Length; i++) {
        data[i] = osc.Run();
    }
}
