/* 

#pragma strict
var playerGameObject:GameObject;
var gameSceneController:GameSceneController;

function Start () {

	playerGameObject = GameObject.FindGameObjectWithTag("Player");
	
	var go:GameObject=GameObject.Find("GameSceneController");
	gameSceneController = go.GetComponent("GameSceneController");

}

function Update () {

function Update () {
		if (Input.GetKeyDown (KeyCode.Space))
			var spacebarPress = true;
	}

}

function OnTriggerEnter (thingCollidedWith:Collider)
{
	if (thingCollidedWith.gameObject == playerGameObject)
	&& (spacebarPress = true)
	{
		Debug.Log("giraffeBabyText");
		// This special Unity function loads the scene with the exact name that you send it - as long as the scene is in the project's build settings!
		// If you have trouble with this, double check the name, spelling, case and build settings

		var textboxShow = true;
	}
}

*/
