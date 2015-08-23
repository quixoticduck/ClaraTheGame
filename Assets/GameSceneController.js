#pragma strict
var numberCollected:Number;

function Start () {
	numberCollected = 0;
}

function Update () {

}

function Collect()
{
	numberCollected ++;
	Debug.Log("Collected");
	
	GetComponent (AudioSource).Play();
}