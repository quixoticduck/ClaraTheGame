#pragma strict
import UnityEngine.UI;

var displayText:Text;
var playerGameObject:GameObject;
var isShowingText:boolean;
var howManyTimesPressedSpaceSinceTalking:Number;
var textboxBackground: GameObject;
var notSpokenTo: boolean;

function Start () 
	{
		notSpokenTo = true;
	}

function Update () 
{
	if (isShowingText && notSpokenTo)
     
	{
		textboxBackground.SetActive(true);
	
		if(howManyTimesPressedSpaceSinceTalking == 0)
		{
			displayText.text = "1) Why am I 2d? How dare you. I'm not missing a dimension I've just been on a diet, unlike *some* people.";
		}
		else if (howManyTimesPressedSpaceSinceTalking == 1)
		{
			displayText.text = "2) I could change my angle at any moment if I wanted to. This is my best angle, I look great at this angle (obviously).";
			notSpokenTo = false;
			howManyTimesPressedSpaceSinceTalking = 0;
		}
		
	
	}
	
	if (isShowingText && !notSpokenTo)
     
	{
		textboxBackground.SetActive(true);
	
		if(howManyTimesPressedSpaceSinceTalking == 0)
		{
			displayText.text = "3) Why can't I move? How dare you. Of course I have animation programmed! I could even dance if I wanted to.";
		}		
		else if (howManyTimesPressedSpaceSinceTalking == 1)
		{
			displayText.text = "4) I'm just resting. Not everybody likes to show themselves up jumping around chasing after cups/mugs like a lunatic. Some people have class.";
		}	               
	}
	
	else
	
	{


	}
	
	if (Input.GetKeyUp(KeyCode.E))
	{
		howManyTimesPressedSpaceSinceTalking ++;
	}
}

function OnTriggerEnter (thingCollidedWith:Collider)
{
	if (thingCollidedWith.gameObject == playerGameObject)
	{
		howManyTimesPressedSpaceSinceTalking = 0;
		isShowingText = true;
	}
}

function OnTriggerExit (thingCollidedWith:Collider)
{
	textboxBackground.SetActive(false);
		displayText.text = "";
		
	if (thingCollidedWith.gameObject == playerGameObject)
	{
		isShowingText = false;
	}
}
	
	
	