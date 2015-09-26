#pragma strict
var playerGameObject:GameObject;
var gameSceneController:GameSceneController;

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
		Debug.Log("giantCollectable collided with");
		GameObject.Destroy(this.gameObject);
		LoadNextScene();
	}
}

// We attach this function to the start button's OnClick event, so it gets called when the button is clicked 
function LoadNextScene()
{
	// This special Unity function loads the scene with the exact name that you send it - as long as the scene is in the project's build settings!
	// If you have trouble with this, double check the name, spelling, case and build settings
	Application.LoadLevel("End-scene");
}