#!/usr/bin/env node
import { setTimeout } from "timers/promises";
import inquirer from "inquirer";
import chalk from "chalk";
import keypress from "keypress";
// Function to format time as MM:SS
const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
};
// Welcome message
const app = "Countdown Timer Application";
const Developer = "Saifi Developer's";
console.log(chalk.magentaBright(`\n\t Welcome to ${chalk.greenBright(Developer)} ${chalk.blueBright(app)}\n`));
// Prompt for user's name
const { name } = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name: ",
        validate: (input) => {
            if (input.length === 0) {
                return chalk.redBright("Please enter your name \n");
            }
            return true;
        },
    },
]);
// Prompt for countdown time in seconds
const { inputSec } = await inquirer.prompt([
    {
        name: "inputSec",
        type: "input",
        message: "Enter the time in seconds: ",
        validate: (input) => {
            if (isNaN(Number(input))) {
                return chalk.redBright("Please enter a valid number \n");
            }
            return true;
        },
    },
]);
const input = Number(inputSec);
console.log(chalk.yellowBright(`\n Dear ${chalk.whiteBright(name)}! You have ${chalk.greenBright(formatTime(input))} seconds to blast a bomb\n`));
// Arrow keys instruction message
console.log(chalk.cyanBright("\nUse ↑ (up arrow) to pause, ↓ (down arrow) to resume, and → (right arrow) to exit.\n"));
let remainingTime = input;
let paused = false;
// Countdown function
const countdown = async () => {
    // Make `process.stdin` begin emitting "keypress" events
    keypress(process.stdin);
    process.stdin.on("keypress", (char, key) => {
        if (key && key.name === "up") {
            paused = true;
            console.log(chalk.greenBright(`\n Dear ${chalk.whiteBright(name)}! Countdown is paused, bomb is defused...\n`));
        }
        else if (key && key.name === "down") {
            paused = false;
            console.log(chalk.greenBright(`\n Dear ${chalk.whiteBright(name)}! Countdown is resumed...\n`));
        }
        else if (key && key.name === "right") {
            console.log(chalk.greenBright(`\n Dear ${chalk.whiteBright(name)}! thank you for using ${chalk.cyanBright(Developer)} ${chalk.yellowBright(app)}.\n`));
            process.exit(0);
        }
    });
    // Set raw mode to capture key presses
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }
    process.stdin.resume();
    while (remainingTime > 0) {
        if (!paused) {
            process.stdout.write(chalk.blueBright(`\r\tRemaining time: ${chalk.redBright(formatTime(remainingTime))}\n`));
            await setTimeout(1000);
            remainingTime--;
        }
        else {
            await setTimeout(1000); // Wait while paused
        }
    }
    // Timer finished
    console.clear();
    console.log(chalk.redBright(`\n\t Dear ${chalk.whiteBright(name)}! time is over\n`));
    console.log(chalk.redBright(`
      💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
      💥                                💥
      💥           BOOM!                💥
      💥                                💥
      💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
      `));
    console.log(chalk.blueBright(`\n\t\t BOOM is blast!\n`));
    process.exit(0);
};
countdown();
