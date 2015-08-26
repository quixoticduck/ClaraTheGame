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
			displayText.text = "Hey, go and find my dad to finish the game!";
		}
		else if (howManyTimesPressedSpaceSinceTalking == 1)
		{
			displayText.text = "Try collecting stuff to open that exciting door.";
		}
		else
		{
			displayText.text = "I'M BUSY, PLEASE DESIST IN SPEAKING TO ME.";
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