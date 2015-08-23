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
		Debug.Log("I have been collided with");
		gameSceneController.Collect();
		GameObject.Destroy(this.gameObject);
	}
}