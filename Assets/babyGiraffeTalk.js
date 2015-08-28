#pragma strict
import UnityEngine.UI;

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
			displayText.text = "Try collecting stuff to open that exciting door.";
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

function OnTriggerStay (thingCollidedWith:Collider)
{
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



	
	
	