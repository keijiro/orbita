#pragma strict

static private var baseNote = 60;
static private var intervals = [0, 2, 4, 7, 9, 11]; // Pentatonic + IIV
static private var globalIndex = 0;

function Awake() {
	var interval = intervals[globalIndex % intervals.Length];
	var octave = globalIndex / intervals.Length;

	var osc = FMOscillator();
	var length = osc.SetNote(baseNote + octave * 12 + interval) * 10;

	audio.clip = AudioClip.Create("", length, 1, SynthConfig.kSampleRate, false, false);

	var samples = new float[length];
	for (var i = 0; i < samples.Length; i++) samples[i] = osc.Run();
	audio.clip.SetData(samples, 0);

	audio.Play();

	globalIndex = (globalIndex + 1) % 12;
}
