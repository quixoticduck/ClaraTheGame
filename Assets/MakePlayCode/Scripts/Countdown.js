#pragma strict
// The following line means that we are importing code from a specific library.
// In this case, the Unity UI code must be imported before we can use it.
// You don't really need to worry about understanding this for now, but you do need to remember to do it!
// If you forget to do this and try to use UI types like Text or Button in your script, you'll get errors.
import UnityEngine.UI;

var timeToCountdownFrom:Number = 10;
var displayText:Text;
var timeRemaining:Number;
var playerGameObject:GameObject;

// This is called once, when the object first appears in the scene.
function Start()
{
	// Here, we set our timeRemaining variable have the same value as timeToCountdownFrom variable.
	timeRemaining = timeToCountdownFrom;
}

// This runs once every frame.
function Update()
{


		
		
/*
	// Time.deltaTime is a Unity property that tells you how many seconds have passed since the last Update
	// We subtract it from the value of timeRemaining to keep count of how long has passed
	timeRemaining -= Time.deltaTime;
	
	if (timeRemaining > 0)
	{
		// Here we display one message in the Text component if there is still time remaining on the clock...
		displayText.text = "Time remaining: " + timeRemaining;
	}
	else
	{
		// ...And a different one if not!
		displayText.text = "Out of time!";
	}
	*/
}

function OnTriggerEnter (thingCollidedWith:Collider)
{
	if (thingCollidedWith.gameObject == playerGameObject)
	{
		Debug.Log("giraffe have been collided with");
		// Here we display one message in the Text component if there is still time remaining on the clock...
		displayText.text = "Hey, find my dad to exit the level. ";
	}
}