#pragma strict
import UnityEngine.UI;

var displayText:Text;
var playerGameObject:GameObject;
var isShowingText:boolean;
var howManyTimesPressedSpaceSinceTalking:Number;
var textboxBackground: GameObject;

function Start () {

}

function Update () 
{
	if (isShowingText)
     
	{
		textboxBackground.SetActive(true);
	
		if(howManyTimesPressedSpaceSinceTalking == 0)
		{
			displayText.text = "Why am I 2d? How dare you. I'm not missing a dimension I've just been on a diet, unlike *some* people.";
		}
		else if (howManyTimesPressedSpaceSinceTalking == 1)
		{
			displayText.text = "I could change my angle at any moment if I wanted to. This is my best angle, I look great at this angle (obviously).";
		}
		
//		else if (howManyTimesPressedSpaceSinceTalking == 2)
//		{
//			displayText.text = "Clearly a slendid specimin of an aardvark such as myself is not flat.";
//		}
		
		else if (howManyTimesPressedSpaceSinceTalking == 2)
		{
			displayText.text = "Why can't I move? How dare you. Of course I have animation programmed! I could even dance if I wanted to.";
		}		
		else
		{
			displayText.text = "I'm just resting. Not everybody likes to show themselves up jumping around chasing after cups/mugs like a lunatic. Some people have class.";
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
	
	
	