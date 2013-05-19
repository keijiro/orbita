#pragma strict

private var initialScale = 1.0;
private var buffer = new float[44100 / 60];

function Start() {
	initialScale = transform.localScale.x;
}

function Update() {
	AudioListener.GetOutputData(buffer, 0);

	var rms = 0.0;
	for (var level in buffer) {
		rms += level * level;
	}
	rms = Mathf.Sqrt(rms / buffer.Length);

	var dbScale = 0.5 * (2.0 + Mathf.Log10(rms));
	transform.localScale = Vector3.one * initialScale * (1.0 + Mathf.Clamp01(dbScale));
}
