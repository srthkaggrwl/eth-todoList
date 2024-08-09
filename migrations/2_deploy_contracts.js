// The files are numbered so that truffle know in which order to run them

const TodoList = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
