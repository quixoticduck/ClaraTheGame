#pragma strict

// Here we are declaring a variable with a name of speed and a type of Number.
// On the same line, we are setting its value to 2.
// Values set here are default values - but they can be overridden on individual components in the Editor.
var speed:Number = 2;

// Update is called once per frame - that is to say, between 30 and 60 times per second.
function Update()
{
	// transform is a built-in Unity property that all components have. It is a reference to the transform on the same GameObject that the component is on.
	// Rotate is a built-in Unity function that you can call on a transform. You pass it a direction and an amount to rotate it by. 
	// Each time you call this function it rotates the transform by the amount specified. By calling it from inside Update, we move it by a constant amount every frame.
	transform.Rotate(Vector3.up, speed);
}