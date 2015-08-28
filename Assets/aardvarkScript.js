#pragma strict
import UnityEngine.UI;

var displayText:Text;
var displayNpcName:Text;
var playerGameObject:GameObject;
var isShowingText:boolean;
var howManyTimesPressedSpaceSinceTalking:Number;
var textboxBackground: GameObject;
var textboxNpcName: GameObject;
var notSpokenTo: boolean;
var sentenceTwo: boolean;

function Start () 
	{
		textboxBackground.SetActive(false);
		textboxNpcName.SetActive(false);
		notSpokenTo = true;
		sentenceTwo = false;
	}

function Update () 
{
	if (isShowingText && notSpokenTo)
	{
		textboxBackground.SetActive(true);
	
		if(howManyTimesPressedSpaceSinceTalking == 1)
		{
			displayText.text = "Why am I 2d? How dare you. I'm not missing a dimension, I've just been on a diet, unlike *some* people.";
			//howManyTimesPressedSpaceSinceTalking = 1;
			Debug.Log("1");
		}
		else if (howManyTimesPressedSpaceSinceTalking == 2)
		{
			displayText.text = "I could change my angle at any moment if I wanted to. This is my best angle, I look great at this angle (obviously).";
			sentenceTwo = true;
			Debug.Log("2");
		}
		
		else if (howManyTimesPressedSpaceSinceTalking == 3)
		{
		notSpokenTo = false;
		Debug.Log("plus");
		}
	}
	
	if (isShowingText && !notSpokenTo)
     
	{
		textboxBackground.SetActive(true);
	
		if(howManyTimesPressedSpaceSinceTalking == 1)
		{
			displayText.text = "Why can't I move? How dare you. Of course I have animation programmed! I could even dance if I wanted to.";
			Debug.Log("3");
		}		
		else if (howManyTimesPressedSpaceSinceTalking == 2)
		{
			displayText.text = "I'm just resting. Not everybody likes to show themselves up jumping around chasing after cups/mugs like a lunatic. Some people have class.";
			Debug.Log("4");
		}	
		
		else if (howManyTimesPressedSpaceSinceTalking == 3)    
		{
		textboxBackground.SetActive(false);
		isShowingText = false;
		displayText.text = "";
		textboxNpcName.SetActive(false);
		howManyTimesPressedSpaceSinceTalking = 0;
		Debug.Log("end");
		}           
	}
	
//bugs: if you move away then first time talking again is 'end' rather than speech
// sometimes button press does nothing
//if you ontrigger exir rather than 'e' on line 2, it doesn't move on to spokentotrue

//	if (Input.GetKeyUp(KeyCode.E))
//	
//	{
//		Debug.Log("Press E");
//		//howManyTimesPressedSpaceSinceTalking ++;
//	}
}

function OnTriggerStay (thingCollidedWith:Collider)
{
	if (thingCollidedWith.gameObject == playerGameObject && Input.GetKeyDown(KeyCode.E))
	
	{
		//howManyTimesPressedSpaceSinceTalking = 0;
		displayNpcName.text = "2D Aardvark";
		isShowingText = true;
		textboxNpcName.SetActive(true);
		howManyTimesPressedSpaceSinceTalking ++;
		Debug.Log("collide and Press E");
		
		if (sentenceTwo == true)
		{
			notSpokenTo = false;
		}
	}
}

//function OnTriggerEnter (thingCollidedWith:Collider)
//{
//	if (thingCollidedWith.gameObject == playerGameObject)
//	//if (thingCollidedWith.gameObject == playerGameObject && Input.GetKeyDown(KeyCode.E))
//	
//	{
//		howManyTimesPressedSpaceSinceTalking = 0;
//		isShowingText = true;
//		//Debug.Log("collide and E");
//	}
//}


function OnTriggerExit (thingCollidedWith:Collider)
{
	textboxBackground.SetActive(false);
		displayText.text = "";
		
	if (thingCollidedWith.gameObject == playerGameObject)
	{
		isShowingText = false;
		textboxNpcName.SetActive(false);
		howManyTimesPressedSpaceSinceTalking = 0;
	}
}
	
	
	