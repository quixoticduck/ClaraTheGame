/* 

#pragma strict
var playerGameObject:GameObject;
var gameSceneController:GameSceneController;

function Start () {

var textboxShow = false;

}

function Update () {

	if var textboxShow = false {
		var Giraffe_Textbox renderer.enabled = false;
		
		else {
			var Giraffe_Textbox renderer.enabled = true;
		}
	}

}

function OnTriggerEnter (thingCollidedWith:Collider)
{
	if (thingCollidedWith.gameObject == playerGameObject)
	{
		Debug.Log("giraffeBabyText");
		// This special Unity function loads the scene with the exact name that you send it - as long as the scene is in the project's build settings!
		// If you have trouble with this, double check the name, spelling, case and build settings
		Application.LoadLevel("End-scene");
	}
}

*/
