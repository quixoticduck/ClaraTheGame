#pragma strict

// We attach this function to the start button's OnClick event, so it gets called when the button is clicked 
function endGame()
{
	// This special Unity function loads the scene with the exact name that you send it - as long as the scene is in the project's build settings!
	// If you have trouble with this, double check the name, spelling, case and build settings
	Application.Quit();
}