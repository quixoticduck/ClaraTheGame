#pragma strict
var playerGameObject:GameObject;
var gameSceneController:GameSceneController;
var treeWallDoorExit: GameObject;
var rSpeed: Number = 1;

function Start () {

	playerGameObject = GameObject.FindGameObjectWithTag("Player");
	
	var go:GameObject=GameObject.Find("GameSceneController");
	gameSceneController = go.GetComponent("GameSceneController");
	

}

function Update () {

}

function OnTriggerEnter (thingCollidedWith:Collider)
{
	if (thingCollidedWith.gameObject == playerGameObject)
	{
		Debug.Log("end game");
		// This special Unity function loads the scene with the exact name that you send it - as long as the scene is in the project's build settings!
		// If you have trouble with this, double check the name, spelling, case and build settings
		//Application.LoadLevel("End-scene");
		// Move the object to (0, 0, 0)
		//treeWallDoorExit.transform.position = Vector3(-497, 1.5, 8);
		treeWallDoorExit.transform.Rotate(Vector3.up, rSpeed);
	}
}


