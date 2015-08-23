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
		if(gameSceneController.numberCollected > 2)
		{
			GameObject.Destroy(this.gameObject);
		}
	}
}