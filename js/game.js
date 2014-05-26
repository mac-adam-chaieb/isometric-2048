/*****************************************************
*
*	Designed and programmed by Mohamed Adam Chaieb.
*
*****************************************************/

function Game() {
	var gridSize = 4;
	this.grid = new Grid();
	this.graphicsManager = new GraphicsManager(this.grid);
	this.inputManager = new InputManager(this.graphicsManager, this.grid);
	this.graphicsManager.inputmanager = this.inputManager;
	this.grid.init();
	this.graphicsManager.drawBoard();
	this.graphicsManager.drawTiles(this.grid);
};