import chalk from "chalk";
import fs from "fs";

class Logger {

    info(message: string) {

        const date: Date = new Date();

        const formatedDate: string = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} ${date.getDate().toString().padStart(2, "0")}-${date.getMonth()}-${date.getFullYear()}`

        const log: string = `${formatedDate} [${"INFO"}]: ${message}\n`;

        if(!fs.existsSync("logs")) {
            fs.mkdirSync("logs")
        }

        fs.appendFileSync(`logs/all.log`, log)

        console.log(`${chalk.bold.black(formatedDate)} [${chalk.bold.green("INFO")}]: ${chalk.green(`${message}`)}`)
    }

    error(message: string) {

        const date: Date = new Date();

        const formatedDate: string = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} ${date.getDate().toString().padStart(2, "0")}-${date.getMonth()}-${date.getFullYear()}`

        const log: string = `${formatedDate} [${"ERROR"}]: ${message}\n`;

        if(!fs.existsSync("logs")) {
            fs.mkdirSync("logs")
        }

        fs.appendFileSync(`logs/all.log`, log);

        fs.appendFileSync(`logs/error.log`, log);


        console.log(`${chalk.bold.black(formatedDate)} [${chalk.bold.red("ERROR")}]: ${chalk.red(`${message}`)}`)
    }

    warn(message: string) {

        const date: Date = new Date();

        const formatedDate: string = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} ${date.getDate().toString().padStart(2, "0")}-${date.getMonth()}-${date.getFullYear()}`

        const log: string = `${formatedDate} [${"WARN"}]: ${message}\n`;

        if(!fs.existsSync("logs")) {
            fs.mkdirSync("logs")
        }

        fs.appendFileSync(`logs/all.log`, log)


        console.log(`${chalk.bold.black(formatedDate)} [${chalk.bold.yellow("WARN")}]: ${chalk.yellow(`${message}`)}`)
    }

    debug(message: string) {

        const date: Date = new Date();

        const formatedDate: string = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} ${date.getDate().toString().padStart(2, "0")}-${date.getMonth()}-${date.getFullYear()}`

        const log: string = `${formatedDate} [${"DEBUG"}]: ${message}\n`;

        if(!fs.existsSync("logs")) {
            fs.mkdirSync("logs")
        }

        fs.appendFileSync(`logs/all.log`, log)


        console.log(`${chalk.bold.black(formatedDate)} [${chalk.bold.cyan("DEBUG")}]: ${chalk.cyan(`${message}`)}`)
    }

    http(message: string) {

        const date: Date = new Date();

        const formatedDate: string = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} ${date.getDate().toString().padStart(2, "0")}-${date.getMonth()}-${date.getFullYear()}`

        const log: string = `${formatedDate} [${"HTTP"}]: ${message}\n`;

        if(!fs.existsSync("logs")) {
            fs.mkdirSync("logs")
        }

        fs.appendFileSync(`logs/all.log`, log)


        console.log(`${chalk.bold.black(formatedDate)} [${chalk.bold.magenta("HTTP")}]: ${chalk.magenta(`${message}`)}`)
    }


}

export const logger = new Logger();