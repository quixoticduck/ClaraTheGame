﻿#pragma strict

function Start () {

}

	// Quits the player when the user hits escape
function Update () 
	{
		if (Input.GetKey ("escape")) 
		{
			Application.Quit();
		}
	}