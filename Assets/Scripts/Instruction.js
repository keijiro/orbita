#pragma strict

var texts : String[];
var textStyle : GUIStyle;
var fadingSpeed = 6.0;

private var text = "";
private var alpha = 0.0;
private var index = 0;

function Start() {
	textStyle.fontSize = Mathf.FloorToInt(Screen.width / 300) * 10;
	
	while (index < texts.Length) {
		text = "";
		
		yield WaitForSeconds(5.0);

		text = texts[index];
		
		while (alpha < 1.0) {
			alpha = Mathf.Min(1.0, alpha + Time.deltaTime * fadingSpeed);
			yield;
		}
		
		while (!Input.GetMouseButtonDown(0)) {
			yield;
		}
		
		while (alpha > 0.0) {
			alpha = Mathf.Max(0.0, alpha - Time.deltaTime * fadingSpeed);
			yield;
		}
		
		index++;
	}
}

function Update() {
}

function OnGUI() {
	if (text) {
		textStyle.normal.textColor.a = alpha;
		GUI.Label(Rect(0.25 * Screen.width, 0.5 * Screen.height, 0.5 * Screen.width, 0.5 * Screen.height), text, textStyle);
	}
}