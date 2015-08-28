#pragma strict
var playerGameObject:GameObject;
var gameSceneController:GameSceneController;
var treeWallDoorExit: GameObject;
var rSpeed: Number = 1;

var displayText:Text;
var displayNpcName:Text;
var isShowingText:boolean;
var howManyTimesPressedSpaceSinceTalking:Number;
var textboxBackground: GameObject;
var textboxNpcName: GameObject;


function Start () {

	playerGameObject = GameObject.FindGameObjectWithTag("Player");
	
	var go:GameObject=GameObject.Find("GameSceneController");
	gameSceneController = go.GetComponent("GameSceneController");
	
	textboxBackground.SetActive(false);
	textboxNpcName.SetActive(false);
	
}

function Update () {

}

//function OnTriggerEnter (thingCollidedWith:Collider)
//{
//	if (thingCollidedWith.gameObject == playerGameObject)
//	{
//		Debug.Log("end game");
//		// This special Unity function loads the scene with the exact name that you send it - as long as the scene is in the project's build settings!
//		// If you have trouble with this, double check the name, spelling, case and build settings
//		//Application.LoadLevel("End-scene");
//		// Move the object to (0, 0, 0)
//		//treeWallDoorExit.transform.position = Vector3(-497, 1.5, 8);
//		//treeWallDoorExit.transform.Rotate(Vector3.up, rSpeed);
//		GameObject.Destroy(treeWallDoorExit.gameObject);
//	}
	
	
	
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
		textboxBackground.SetActive(false);
		isShowingText = false;
		displayText.text = "";
		textboxNpcName.SetActive(false);
		howManyTimesPressedSpaceSinceTalking = 0;
		Debug.Log("end");
		}
	}

function OnTriggerStay (thingCollidedWith:Collider)
{
	if (thingCollidedWith.gameObject == playerGameObject && Input.GetKeyDown(KeyCode.E))
	
	{
		//howManyTimesPressedSpaceSinceTalking = 0;
		displayNpcName.text = "Giraffe Dad";
		isShowingText = true;
		textboxNpcName.SetActive(true);
		howManyTimesPressedSpaceSinceTalking ++;
		Debug.Log("collide and Press E");
		
		Debug.Log("destroy door");
		// This special Unity function loads the scene with the exact name that you send it - as long as the scene is in the project's build settings!
		// If you have trouble with this, double check the name, spelling, case and build settings
		//Application.LoadLevel("End-scene");
		// Move the object to (0, 0, 0)
		//treeWallDoorExit.transform.position = Vector3(-497, 1.5, 8);
		//treeWallDoorExit.transform.Rotate(Vector3.up, rSpeed);
		GameObject.Destroy(treeWallDoorExit.gameObject);
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