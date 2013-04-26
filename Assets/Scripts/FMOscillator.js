#pragma strict

class FMOscillator {
	static var multiplier = 16.0;
	static var modulation = 0.005;

	private var mx = 0.0;
	private var cx = 0.0;
	private var step = 0.0;
	
	static private var kPi2 = 6.28318530718;
	
	function SetNote(note : int) {
		var freq = 440.0 * Mathf.Pow(2.0, 1.0 * (note - 69) / 12.0);
		step = freq / SynthConfig.kSampleRate;
	}
	
	function Run() {
		mx += step * multiplier;
		cx += step;
		mx -= Mathf.Floor(mx);
		cx -= Mathf.Floor(cx);
		var x = cx + modulation * Mathf.Sin(kPi2 * mx);
		x -= Mathf.Floor(x);
		return Mathf.Sin(kPi2 * x);
	}
}
