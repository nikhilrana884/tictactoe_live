const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
import { User } from "./user";

const boardSchema = new mongoose.Schema({
	squares: { type: Array, required: true, default: Array(9).fill(null) },
});



const Board = mongoose.model("board", boardSchema );


module.exports = { Board, validate };