#pragma strict

static private var scales = [
	[0, 4, 5, 7, 11],		// Ryukyu
	[0, 2, 4, 7, 9],		// Pentatonic
	[0, 2, 4, 5, 7, 9, 11],	// Diatonic
	[0, 2, 3, 4, 7, 9],		// Pentatonic + IIV
	[0, 2, 3, 4, 7, 9]		// Major blues
];

function Awake() {
	var intervals = scales[Globals.r.sceneIndex];
	var interval = intervals[Globals.r.planetIndex % intervals.Length];
	var octave = Globals.r.planetIndex / intervals.Length;

	var osc = FMOscillator();
	var length = Mathf.RoundToInt(osc.SetNote(Globals.r.baseNote + octave * 12 + interval) * 50);

	audio.clip = AudioClip.Create("", length, 1, SynthConfig.kSampleRate, false, false);

	var samples = new float[length];
	for (var i = 0; i < samples.Length; i++) samples[i] = osc.Run();
	audio.clip.SetData(samples, 0);

	audio.Play();
	
	Globals.r.IncrementPlanetIndex();
}
