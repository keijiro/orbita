#pragma strict

var colors : Color[];

private static var index = 0;

function PickColor() {
	var color = colors[index++];
	if (index >= colors.Length) index = 0;
	return color;
}
