#pragma strict

var textStyle : GUIStyle;
var fadingSpeed = 6.0;

private var text = "";
private var alpha = 0.0;

function FadeIn() {
	while (alpha < 1.0) {
		alpha += Time.deltaTime * fadingSpeed;
		yield;
	}
};

function FadeOut() {
	while (alpha > 0.0) {
		alpha -= Time.deltaTime * fadingSpeed;
		yield;
	}
};

function WaitForSecondsAndClicks(preWait : float, time : float, clicks : int) {
	var clickCounts = 0;
	var elapsed = 0.0;

	yield WaitForSeconds(preWait);
	
	while (elapsed < time || clickCounts < clicks) {
		elapsed += Time.deltaTime;
		if (Input.GetMouseButtonDown(0)) clickCounts++;
		yield;
	}
}

function WaitForSecondsAndButtonAction(buttonName : String) {
	var button = GameObject.Find(buttonName).GetComponent.<ButtonReaction>();
	var elapsed = 0.0;

	yield WaitForSeconds(1.0);

	button.actionCount = 0;
	
	while (elapsed < 2 || button.actionCount < 1) {
		elapsed += Time.deltaTime;
		yield;
	}
}

function Start() {
	textStyle.fontSize = Mathf.FloorToInt(Screen.width / 300) * 10;
	
	yield WaitForSeconds(0.5);

	text = "TAP THE SCREEN TO CREATE A PLANET.";
	yield StartCoroutine(FadeIn());
	yield StartCoroutine(WaitForSecondsAndClicks(1, 2, 1));
	yield StartCoroutine(FadeOut());
	
	yield WaitForSeconds(1.0);
	
	text = "YOU CAN CREATE PLANETS AS MANY AS YOU LIKE.";
	yield StartCoroutine(FadeIn());
	yield StartCoroutine(WaitForSecondsAndClicks(1, 2, 1));
	yield StartCoroutine(FadeOut());
	
	yield WaitForSeconds(2.0);

	var arrow = transform.parent.Find("Arrow Left").gameObject;
	arrow.SetActive(true);

	text = "YOU CAN REMOVE THE OLDEST PLANET BY PRESSING THIS BUTTON.";
	yield StartCoroutine(FadeIn());
	yield StartCoroutine(WaitForSecondsAndButtonAction("Erase Button"));
	arrow.BroadcastMessage("Dismiss");
	yield StartCoroutine(FadeOut());

	yield WaitForSeconds(2.0);

	arrow = transform.parent.Find("Arrow Right").gameObject;
	arrow.SetActive(true);

	text = "PRESS THIS BUTTON TO CHANGE THE SCENE.";
	yield StartCoroutine(FadeIn());
	yield StartCoroutine(WaitForSecondsAndButtonAction("Change Scene Button"));
	arrow.BroadcastMessage("Dismiss");
	yield StartCoroutine(FadeOut());

	yield WaitForSeconds(0.5);

	text = "IT CHANGES NOT ONLY THE BACKGROUND COLOR BUT ALSO THE COLOR OF MUSIC!";
	yield StartCoroutine(FadeIn());
	yield StartCoroutine(WaitForSecondsAndClicks(1, 4, 1));
	yield StartCoroutine(FadeOut());
}

function OnGUI() {
	if (alpha > 0) {
		textStyle.normal.textColor.a = Mathf.Clamp01(alpha);
		GUI.Label(Rect(0.25 * Screen.width, 0.5 * Screen.height, 0.5 * Screen.width, 0.5 * Screen.height), text, textStyle);
	}
}
