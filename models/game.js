const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
import { User } from "./user";
import { Board } from "./board";

const gameSchema = new mongoose.Schema({
	player1: { type: User, required: true },
	player2: { type: User, required: true },
    board: { type: Board, required: true },
	isPlayer1Turn: { type: Boolean, required: true, default: true },
	isGameOver: { type: Boolean, required: true, default: false },
	p1chances: { type: Number, required: true, default: 5 },
	p2chances: { type: Number, required: true, default: 4 },
});



const Game = mongoose.model("game", gameSchema );


module.exports = { Game, validate };