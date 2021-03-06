﻿#pragma strict
import UnityEngine.UI;
    
var textboxTalkButton:GameObject;
var displayText:Text;
var displayNpcName:Text;
var playerGameObject:GameObject;
var isShowingText:boolean;
var howManyTimesPressedSpaceSinceTalking:Number;
var textboxBackground: GameObject;
var textboxNpcName: GameObject;

function Start () 
	{
        textboxBackground.SetActive(false);
		textboxNpcName.SetActive(false);
	}

function Update () 
{
	if (isShowingText)
	{
		textboxBackground.SetActive(true);
	
		if(howManyTimesPressedSpaceSinceTalking == 1)
		{
			displayText.text = "Hey, go and find my dad to finish the game!";
			//howManyTimesPressedSpaceSinceTalking = 1;
			Debug.Log("1");
		}
		else if (howManyTimesPressedSpaceSinceTalking == 2)
		{
			displayText.text = "Try collecting stuff to remove the forest barrier to my right.";
			Debug.Log("2");
		}
		
		else if (howManyTimesPressedSpaceSinceTalking == 3)
		{
			displayText.text = "I'M BUSY, PLEASE DESIST IN SPEAKING TO ME.";
			Debug.Log("3");
		}
		
		else if (howManyTimesPressedSpaceSinceTalking == 4)
		{
		textboxBackground.SetActive(false);
		isShowingText = false;
		displayText.text = "";
		textboxNpcName.SetActive(false);
		howManyTimesPressedSpaceSinceTalking = 0;
		Debug.Log("end");
		}
	}

}

// when player moves towards from NPC
function OnTriggerStay (thingCollidedWith:Collider)
    
    {
        //show textbox talk button when nearby NPC
        textboxTalkButton.SetActive(true);

        // when player is by NPC AND pressing talk button
	    if (thingCollidedWith.gameObject == playerGameObject && Input.GetKeyDown(KeyCode.E))
	
	    {
		    //howManyTimesPressedSpaceSinceTalking = 0;
		    displayNpcName.text = "Giraffe";
		    isShowingText = true;
		    textboxNpcName.SetActive(true);
		    howManyTimesPressedSpaceSinceTalking ++;
		    Debug.Log("collide and Press E");
	    }
}

// when player has moved away from NPC
function OnTriggerExit (thingCollidedWith:Collider)

    {
        //remove textbox talk button if player has moved away from NPC
        textboxTalkButton.SetActive(false);

        //remove textbox if player has moved away from NPC
	    textboxBackground.SetActive(false);
		    displayText.text = "";
		
	    if (thingCollidedWith.gameObject == playerGameObject)
	    {
		    isShowingText = false;
		    textboxNpcName.SetActive(false);
		    howManyTimesPressedSpaceSinceTalking = 0;
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



	
	
	