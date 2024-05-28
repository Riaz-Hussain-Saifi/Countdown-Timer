
# Countdown Timer Application

Welcome to the **Countdown Timer Application** developed by **Riaz Hussain**.

## Description

This Node.js command-line application allows users to set a countdown timer. The timer displays the remaining time in a MM:SS format and allows users to pause, resume, or exit the countdown using arrow keys.

## Features

- **User Prompts**: Enter your name and set the countdown time in seconds.
- **Real-time Countdown**: Displays remaining time in a visually appealing format.
- **Keyboard Controls**: 
  - **↑ (up arrow)**: Pause the timer.
  - **↓ (down arrow)**: Resume the timer.
  - **→ (right arrow)**: Exit the application.

## Installation

1. **Clone the repository**:
    ```repo
    git clone https://github.com/Riaz-Hussain-Saifi/Countdown-Timer.git
    cd Countdown-Timer
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

Run the application using the following command:

```sh
npx ts-node index.ts
```

Follow the on-screen prompts:

1. Enter your name.
2. Enter the countdown time in seconds.
3. Use the arrow keys to control the timer:
   - **↑ (up arrow)**: Pause the timer.
   - **↓ (down arrow)**: Resume the timer.
   - **→ (right arrow)**: Exit the application.

## Example

```Demo
? Enter your name: Riaz
? Enter the time in seconds: 120

Dear Riaz! You have 02:00 minutes to blast a bomb

Use ↑ (up arrow) to pause, ↓ (down arrow) to resume, and → (right arrow) to exit.

Remaining time: 01:59
Remaining time: 01:58
...
```

## NPM Package

This application is also available as an NPM package. You can install it using the following command:

```npm package
npm install updated-countdown-timer
```

For more information, visit the [NPM package page](https://www.npmjs.com/package/updated-countdown-timer).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to contribute, report issues, and suggest features by visiting the [repository](https://github.com/Riaz-Hussain-Saifi/Countdown-Timer).

Happy timing!
