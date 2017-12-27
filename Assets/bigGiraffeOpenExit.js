#pragma strict

var textboxTalkButton:GameObject;
var playerGameObject:GameObject;
var gameSceneController:GameSceneController;

//var treeWallDoorExit: GameObject;
var rSpeed: Number = 1;

var displayText:Text;
var displayNpcName:Text;
var isShowingText:boolean;
var howManyTimesPressedSpaceSinceTalking:Number;
var textboxBackground: GameObject;
var textboxNpcName: GameObject;
var treeWallDoorExit: GameObject;


function Start () {

	playerGameObject = GameObject.FindGameObjectWithTag("Player");
	
	var go:GameObject=GameObject.Find("GameSceneController");
	gameSceneController = go.GetComponent("GameSceneController");
	
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
			displayText.text = "Okay, I'll remove the forrest barrier for you, but be careful. It's dangerous to go alone.";
			//howManyTimesPressedSpaceSinceTalking = 1;
			Debug.Log("1");
		}
		else if (howManyTimesPressedSpaceSinceTalking == 2)
		{
			displayText.text = "Okay no. You can't expect people to hand out swords just because you didn't make decent preparations yourself.";
			Debug.Log("2");
		}
		
		else if (howManyTimesPressedSpaceSinceTalking == 3)
		{
			displayText.text = "By the way, if you can collect the giant cube then you can end the game.";
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


//function OnTriggerEnter (thingCollidedWith:Collider)
//{
//	if (thingCollidedWith.gameObject == playerGameObject)
//	{
//		if(gameSceneController.numberCollected > 2)
//		{
//			GameObject.Destroy(this.gameObject);
//		}
//	}
//}

    // when player moves towards from NPC
	function OnTriggerStay (thingCollidedWith:Collider)
	    {
	        //show textbox talk button when nearby NPC
	        textboxTalkButton.SetActive(true);

	        // when player is by NPC AND pressing talk button
		if (thingCollidedWith.gameObject == playerGameObject && Input.GetKeyDown(KeyCode.E))
		
		{
			//howManyTimesPressedSpaceSinceTalking = 0;
			displayNpcName.text = "Giraffe Dad";
			isShowingText = true;
			textboxNpcName.SetActive(true);
			howManyTimesPressedSpaceSinceTalking ++;
			Debug.Log("collide and Press E");
			//GameObject.Destroy(this.gameObject);
			GameObject.Destroy(treeWallDoorExit.gameObject);
			
	//		Debug.Log("destroy door");
	//		// This special Unity function loads the scene with the exact name that you send it - as long as the scene is in the project's build settings!
	//		// If you have trouble with this, double check the name, spelling, case and build settings
	//		//Application.LoadLevel("End-scene");
	//		// Move the object to (0, 0, 0)
	//		//treeWallDoorExit.transform.position = Vector3(-497, 1.5, 8);
	//		//treeWallDoorExit.transform.Rotate(Vector3.up, rSpeed);
	//		GameObject.Destroy(treeWallDoorExit.gameObject);
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
