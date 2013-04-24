#pragma strict

static private var baseNote = 60;
static private var clipLength = 2;

static private var intervals = [0, 2, 4, 7, 9, 11]; // Pentatonic + IIV

static private var globalIndex = 0;

function Awake() {
	var interval = intervals[globalIndex % intervals.Length];
	var octave = globalIndex / intervals.Length;

	var osc = Oscillator();
	osc.SetNote(baseNote + octave * 12 + interval);

	var samples = new float[SynthConfig.kSampleRate * clipLength];
	for (var i = 0; i < samples.Length; i++) {
		samples[i] = osc.Run();
	}

	var clip = AudioClip.Create("note", SynthConfig.kSampleRate * clipLength, 1, SynthConfig.kSampleRate, false, false);
	clip.SetData(samples, 0);

	audio.clip = clip;

	globalIndex = (globalIndex + 1) % 12;
}
